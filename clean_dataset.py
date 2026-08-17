import json
import re
import os

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    
    questions = json.loads(content[start_idx:end_idx])
    
    final_questions = []
    deleted_hotspot = 0
    deleted_duplicates = 0
    pages_removed = 0
    ads_removed = 0
    
    page_regex = re.compile(r'===\s*PAGE\s*\d+\s*===', re.IGNORECASE)
    ad_regex = re.compile(r'Passing Certification Exams Made Easy visit\s*-\s*https?://\S+', re.IGNORECASE)
    
    for q in questions:
        # Delete duplicate
        if q["id"] == "topic4_q105":
            deleted_duplicates += 1
            continue
            
        # Delete Mastered junk (Hotspot)
        is_junk = False
        for c in q.get("choices", []):
            if "Mastered" in c or "Not Mastered" in c or c.strip() == "":
                is_junk = True
                break
        
        if is_junk:
            deleted_hotspot += 1
            continue
            
        # Scrub Junk Text from Question, Choices, Explanation
        def scrub(text):
            nonlocal pages_removed, ads_removed
            new_text, p_count = page_regex.subn('', text)
            new_text, a_count = ad_regex.subn('', new_text)
            pages_removed += p_count
            ads_removed += a_count
            return new_text.strip()
            
        q["question"] = scrub(q.get("question", ""))
        q["explanation"] = scrub(q.get("explanation", ""))
        q["choices"] = [scrub(c) for c in q.get("choices", [])]
        
        final_questions.append(q)
        
    print(f"Deleted {deleted_hotspot} unanswerable Hotspot ('Mastered') questions.")
    print(f"Deleted {deleted_duplicates} duplicate questions.")
    print(f"Scrubbed {pages_removed} '=== PAGE N ===' markers.")
    print(f"Scrubbed {ads_removed} ad/URL leakages.")
    
    new_js = content[:start_idx] + json.dumps(final_questions, indent=2) + content[end_idx:]
    
    with open(dataset_path, "w", encoding="utf-8") as f:
        f.write(new_js)
        
    print(f"Dataset successfully cleaned. Remaining questions: {len(final_questions)}")

if __name__ == "__main__":
    main()
