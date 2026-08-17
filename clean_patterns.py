import json
import re

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    questions = json.loads(content[start_idx:end_idx])
    
    # 1. Fix q96
    for q in questions:
        if q["id"] == "new_pdf_q96":
            q["choices"] = [
                "A. Testsubnet1",
                "B. RecoverySubnetB",
                "C. DemoSubnet1",
                "D. RecoverySubnetA"
            ]
            
    # 2. Delete the 3 true duplicates
    duplicates_to_delete = {"topic4_q94", "topic4_q103", "topic5_q134"}
    
    # 3. Scrub new Ad format
    ad_regex2 = re.compile(r'Recommend!! Get the Full AZ-104 dumps.*?\(.*?\)', re.IGNORECASE | re.DOTALL)
    
    final_questions = []
    for q in questions:
        if q["id"] in duplicates_to_delete:
            continue
            
        # Scrub ads
        q["explanation"] = ad_regex2.sub('', q.get("explanation", "")).strip()
        q["question"] = ad_regex2.sub('', q.get("question", "")).strip()
        
        final_questions.append(q)
        
    print(f"Deleted {len(questions) - len(final_questions)} duplicates.")
    
    new_js = content[:start_idx] + json.dumps(final_questions, indent=2) + content[end_idx:]
    with open(dataset_path, "w", encoding="utf-8") as f:
        f.write(new_js)
        
    print("Dataset cleaned of remaining pattern anomalies!")

if __name__ == "__main__":
    main()
