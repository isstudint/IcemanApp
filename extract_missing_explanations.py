import json
import os

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    output_path = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch\missing_explanations.json"
    
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    questions = json.loads(content[start_idx:end_idx])
    
    missing = []
    for q in questions:
        # Check if explanation is empty, missing, or just whitespace
        if not q.get("explanation") or str(q.get("explanation")).strip() == "":
            missing.append(q)
            
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(missing, f, indent=2)
        
    print(f"Extracted {len(missing)} questions with missing explanations.")

if __name__ == "__main__":
    main()
