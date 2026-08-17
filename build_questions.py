import re
import json
import sys
import os

def main():
    answers_file = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch\answers_full.txt"
    pdf_file = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch\pdf_full_text.txt"
    output_file = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    images_dir1 = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\images"
    images_dir2 = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\pdf_images"
    
    with open(answers_file, "r", encoding="utf-8") as f:
        ans_text = f.read()

    ans_blocks = re.split(r'(?m)^1\s*\)', ans_text)
    
    # ans_blocks[0] is preamble.
    # block 1 = ans_blocks[1] (starts with 1 ), so we need to prepend "1 )"
    parsed_blocks = []
    for b in ans_blocks[1:]:
        block_text = "1 )" + b
        chunks = re.split(r'(?m)^(\d+)\s*\)', block_text)
        b_ans = {}
        for i in range(1, len(chunks), 2):
            q_num = int(chunks[i])
            content = chunks[i+1]
            ans_match = re.search(r'====+>\s*(.*)', content)
            if ans_match:
                b_ans[q_num] = ans_match.group(1).strip()
        parsed_blocks.append(b_ans)
    
    def get_answer(topic_num, q_num_str):
        q_num = int(q_num_str)
        if topic_num == "1":
            return parsed_blocks[0].get(q_num, "") if len(parsed_blocks) > 0 else ""
        elif topic_num == "2":
            return parsed_blocks[0].get(q_num + 40, "") if len(parsed_blocks) > 0 else ""
        elif topic_num == "3":
            return parsed_blocks[1].get(q_num, "") if len(parsed_blocks) > 1 else ""
        elif topic_num == "4":
            return parsed_blocks[2].get(q_num, "") if len(parsed_blocks) > 2 else ""
        elif topic_num == "5":
            return parsed_blocks[3].get(q_num, "") if len(parsed_blocks) > 3 else ""
        elif topic_num == "6":
            return parsed_blocks[3].get(q_num + 121, "") if len(parsed_blocks) > 3 else "" # best guess
        return ""


    critical_corrections = {
        "4": 1, "12": 1, "14": 0, "19": 1, "21": 0, "22": 1, 
        "26": 0, "27": 2, "30": 0, "33": 3, "34": 1, "35": 2, "40": 0
    }
    skip_questions = ["20", "23"]

    with open(pdf_file, "r", encoding="utf-8") as f:
        pdf_text = f.read()

    replacements = {
        "con\u0000gure": "configure", "con\u0000gured": "configured", 
        "\u0000le": "file", "o\u0000ce": "office", "satis\u0000es": "satisfies", 
        "\u0000nd": "find", "\u0000ve": "five", "\u0000rst": "first", 
        "Tra\u0000c": "Traffic", "\u0000lter": "filter", "Pro\u0000ler": "Profiler", 
        "\u0000ow": "flow", "certi\u0000cation": "certification", 
        "recon\u0000gure": "reconfigure", "o\u0000cial": "official",
        "bene\u0000t": "benefit", "\u0000gure": "figure", "\u0000les": "files",
        "speci\u0000ed": "specified", "identi\u0000ed": "identified",
        "speci\u0000c": "specific", "noti\u0000cation": "notification",
        "modi\u0000ed": "modified"
    }
    for k, v in replacements.items():
        pdf_text = pdf_text.replace(k, v)
    pdf_text = pdf_text.replace("\u0000", "fi")

    # Load available images
    available_images = []
    if os.path.exists(images_dir1):
        available_images.extend([f"images/{f}" for f in os.listdir(images_dir1) if f.endswith('.png')])
    if os.path.exists(images_dir2):
        available_images.extend([f"pdf_images/{f}" for f in os.listdir(images_dir2) if f.endswith('.png')])

    # Split by "Question #"
    chunks = re.split(r'(?m)^Question #(\d+)\s*(Topic\s*\d+)?', pdf_text)
    
    questions = []
    skipped = []

    for i in range(1, len(chunks), 3):
        if i + 2 >= len(chunks):
            break
        q_num = chunks[i]
        topic = chunks[i+1] if chunks[i+1] else "Topic 1"
        topic_num = re.search(r'\d+', topic).group() if re.search(r'\d+', topic) else "1"
        q_text = chunks[i+2]
        
        if q_num in skip_questions:
            skipped.append(q_num)
            continue
            
        choice_matches = list(re.finditer(r'(?m)^([A-E])\.\s+(.*)', q_text))
        
        choices = []
        clean_q_text = q_text
        if choice_matches:
            clean_q_text = q_text[:choice_matches[0].start()].strip()
            
            for j in range(len(choice_matches)):
                start_idx = choice_matches[j].start()
                end_idx = choice_matches[j+1].start() if j+1 < len(choice_matches) else len(q_text)
                choice_text = q_text[start_idx:end_idx].strip()
                choice_text = re.sub(r'(?m)^Topic \d+ - Question Set.*$', '', choice_text).strip()
                choices.append(choice_text)
        
        if not choices:
            ans_val = get_answer(topic_num, q_num).strip().upper()
            if ans_val in ["YES", "NO"]:
                choices = ["A. Yes", "B. No"]
            else:
                skipped.append(q_num)
                continue

        ans_idx = 0
        if q_num in critical_corrections and topic_num == "1":
            ans_idx = critical_corrections[q_num]
        else:
            ans_val = get_answer(topic_num, q_num)
            if ans_val.upper() == "YES":
                ans_idx = 0
            elif ans_val.upper() == "NO":
                ans_idx = 1
            else:
                for idx, c in enumerate(choices):
                    if ans_val.lower() in c.lower():
                        ans_idx = idx
                        break

        domain = "compute"
        q_lower = clean_q_text.lower()
        if any(x in q_lower for x in ["azure ad", "active directory", "rbac", "policy", "tenant", "management group"]):
            domain = "identity"
        elif any(x in q_lower for x in ["storage", "blob", "file share", "backup", "azcopy", "recovery vault"]):
            domain = "storage"
        elif any(x in q_lower for x in ["vnet", "nsg", "load balancer", "vpn", "dns", "firewall", "traffic manager"]):
            domain = "networking"
        elif any(x in q_lower for x in ["monitor", "log analytics", "alert", "diagnostic"]):
            domain = "monitor"

        # Check for image refs in text
        image_path = ""
        for img in available_images:
            if f"topic{topic_num}_" in img and f"_q{q_num}" in img:
                image_path = img
                break
        
        if not image_path and ("exhibit" in q_lower or "following table" in q_lower):
            pass # Handle better if named properly

        q_obj = {
            "id": f"topic{topic_num}_q{q_num}",
            "number": q_num,
            "question": clean_q_text,
            "domain": domain,
            "choices": choices,
            "explanation": "No detailed explanation was provided in the official answer key.",
            "correct": ans_idx,
            "type": "pdf"
        }
        if image_path:
            q_obj["image"] = image_path
            
        questions.append(q_obj)

    js_output = f"""const DOMAINS = {{
  identity:   {{ name: 'Identities & Governance', short: 'Identity' }},
  storage:    {{ name: 'Implement & Manage Storage', short: 'Storage' }},
  compute:    {{ name: 'Deploy & Manage Compute', short: 'Compute' }},
  networking: {{ name: 'Virtual Networking', short: 'Networking' }},
  monitor:    {{ name: 'Monitor & Maintain', short: 'Monitor' }}
}};

const QUESTIONS = {json.dumps(questions, indent=2)};
"""
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(js_output)
        
    print(f"Generated {len(questions)} questions.")
    print(f"Skipped {len(skipped)} questions: {', '.join(skipped)}")

if __name__ == "__main__":
    main()
