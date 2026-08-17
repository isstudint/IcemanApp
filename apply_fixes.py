import json
import os

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    fixes_path = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch\fixes.json"
    
    if not os.path.exists(fixes_path):
        print("fixes.json not found!")
        return
        
    with open(fixes_path, "r", encoding="utf-8") as f:
        fixes = json.load(f)
        
    # Build lookup dict for O(1) fixes
    fix_dict = {f["id"]: f for f in fixes}
    print(f"Loaded {len(fix_dict)} fixes to apply.")
    
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    
    questions = json.loads(content[start_idx:end_idx])
    
    fixes_applied = 0
    dd_deleted = 0
    final_questions = []
    
    for q in questions:
        # Delete drag-drop questions
        if q.get("type") == "drag-drop":
            dd_deleted += 1
            continue
            
        # Apply fixes
        if q["id"] in fix_dict:
            fix = fix_dict[q["id"]]
            q["correct"] = fix["correct"]
            # Prepend the AI's explanation noting the discrepancy
            q["explanation"] = f"**Fact-Check Note:** {fix['explanation']}\n\nOriginal: {q.get('explanation', '')}"
            fixes_applied += 1
            
        final_questions.append(q)
        
    print(f"Applied {fixes_applied} corrections to the dataset.")
    print(f"Deleted {dd_deleted} Drag and Drop questions.")
    
    new_js = content[:start_idx] + json.dumps(final_questions, indent=2) + content[end_idx:]
    
    with open(dataset_path, "w", encoding="utf-8") as f:
        f.write(new_js)
        
    print("Dataset completely hardened!")

if __name__ == "__main__":
    main()
