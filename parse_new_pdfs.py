import os
import re
import json
import difflib

def clean_text(text):
    return re.sub(r'\s+', ' ', text).strip()

def is_duplicate(new_q, existing_qs, threshold=0.85):
    new_q_clean = clean_text(new_q.lower())
    for eq in existing_qs:
        eq_clean = clean_text(eq['question'].lower())
        if len(new_q_clean) < 20 or len(eq_clean) < 20:
            continue
            
        # Fast exact match on normalized
        if new_q_clean == eq_clean:
            return True
        
        # Fast length filter
        if abs(len(new_q_clean) - len(eq_clean)) > 20:
            continue
            
        ratio = difflib.SequenceMatcher(None, new_q_clean, eq_clean).ratio()
        if ratio >= threshold:
            return True
    return False

def categorize(text):
    text = text.lower()
    if any(k in text for k in ['azure ad', 'active directory', 'mfa', 'conditional access', 'rbac', 'tenant', 'policy', 'role']):
        return 'identity'
    if any(k in text for k in ['storage account', 'blob', 'file share', 'azcopy', 'recovery services', 'backup']):
        return 'storage'
    if any(k in text for k in ['vnet', 'virtual network', 'nsg', 'load balancer', 'vpn', 'expressroute', 'dns', 'firewall', 'application gateway']):
        return 'networking'
    if any(k in text for k in ['monitor', 'log analytics', 'alert', 'metric', 'diagnostic', 'application insights']):
        return 'monitor'
    return 'compute' # default fallback (VMs, App Service, AKS, etc.)

def main():
    raw_path = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch\all_pdfs_raw.txt"
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    
    with open(raw_path, 'r', encoding='utf-8') as f:
        raw_text = f.read()
        
    # Load existing dataset
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    existing_dataset = json.loads(content[start_idx:end_idx])
    
    print(f"Loaded {len(existing_dataset)} existing questions.")
    
    blocks = re.split(r'(?i)(?:NEW QUESTION \d+|Question #\d+|QUESTION NO:\s*\d+|Question \d+)', raw_text)
    print(f"Found {len(blocks)} potential question blocks across all PDFs.")
    
    new_questions = []
    
    for idx, block in enumerate(blocks):
        if idx % 100 == 0:
            print(f"Processing block {idx}/{len(blocks)}...")
        block = block.strip()
        if not block or len(block) < 50:
            continue
            
        # Try to parse Answer
        ans_match = re.search(r'(?i)Answer:\s*([A-E]+)', block)
        if not ans_match:
            continue
            
        ans_str = ans_match.group(1).upper()
        if len(ans_str) > 1:
            # Skip multi-answer or hotspot for now to keep it clean single choice
            continue
            
        ans_letter = ans_str[0]
        correct_idx = ord(ans_letter) - ord('A')
        
        # Split block into Question, Choices, Explanation
        # Usually choices start with A., B., C., D.
        choices_match = list(re.finditer(r'(?m)^([A-E])\.\s+(.*)$', block))
        
        if len(choices_match) < 2:
            continue
            
        q_text = block[:choices_match[0].start()].strip()
        
        # Clean up question text (remove preamble garbage)
        q_text = re.sub(r'(?i)Note: The question is included.*?(satisfies the requirements\.|meet the goal\?)', '', q_text, flags=re.DOTALL)
        q_text = re.sub(r'(?i)Note: This question is part of a series.*?(review screen\.)', '', q_text, flags=re.DOTALL)
        q_text = re.sub(r'(?i)Recommend!! Get the Full.*?(New Questions)', '', q_text, flags=re.DOTALL)
        q_text = clean_text(q_text)
        
        choices = []
        for i in range(len(choices_match)):
            start = choices_match[i].start()
            end = choices_match[i+1].start() if i+1 < len(choices_match) else block.find('Answer:')
            if end == -1: end = len(block)
            choice_text = clean_text(block[start:end])
            choices.append(choice_text)
            
        # Try to parse Explanation
        exp_match = re.search(r'(?i)Explanation:([\s\S]*)', block)
        explanation = clean_text(exp_match.group(1)) if exp_match else "No detailed explanation was provided."
        
        # Clean explanation from following question markers if any leaked
        explanation = explanation.split('NEW QUESTION')[0].strip()
        
        if is_duplicate(q_text, existing_dataset) or is_duplicate(q_text, new_questions):
            continue
            
        new_q = {
            "id": f"new_pdf_q{len(new_questions)+1}",
            "number": str(len(existing_dataset) + len(new_questions) + 1),
            "question": q_text,
            "domain": categorize(q_text),
            "choices": choices,
            "explanation": explanation,
            "correct": correct_idx,
            "type": "pdf_expansion"
        }
        
        new_questions.append(new_q)
        
    print(f"Successfully extracted and deduplicated {len(new_questions)} BRAND NEW questions!")
    
    # Merge and save
    existing_dataset.extend(new_questions)
    
    js_output = f"""const DOMAINS = {{
  identity:   {{ name: 'Identities & Governance', short: 'Identity' }},
  storage:    {{ name: 'Implement & Manage Storage', short: 'Storage' }},
  compute:    {{ name: 'Deploy & Manage Compute', short: 'Compute' }},
  networking: {{ name: 'Virtual Networking', short: 'Networking' }},
  monitor:    {{ name: 'Monitor & Maintain', short: 'Monitor' }}
}};

const QUESTIONS = {json.dumps(existing_dataset, indent=2)};
"""
    with open(dataset_path, "w", encoding="utf-8") as f:
        f.write(js_output)
        
    print(f"Final dataset now contains {len(existing_dataset)} questions.")

if __name__ == "__main__":
    main()
