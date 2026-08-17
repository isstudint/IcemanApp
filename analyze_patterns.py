import json

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    start = content.find("[")
    end = content.rfind("]") + 1
    questions = json.loads(content[start:end])
    
    print(f"Total questions: {len(questions)}")
    
    ids = set()
    duplicate_ids = []
    duplicate_texts = []
    seen_texts = set()
    
    out_of_bounds = []
    blank_choices = []
    missing_fields = []
    leaked_choices = []
    
    for q in questions:
        q_id = q.get("id", "UNKNOWN")
        text = q.get("question", "").strip()
        choices = q.get("choices", [])
        correct = q.get("correct", -1)
        
        # Check Duplicate IDs
        if q_id in ids:
            duplicate_ids.append(q_id)
        ids.add(q_id)
        
        # Check Duplicate Text (ignore exact case/spaces)
        if text.lower() in seen_texts:
            duplicate_texts.append(q_id)
        seen_texts.add(text.lower())
        
        # Check missing fields
        if not text or not choices or correct == -1:
            missing_fields.append(q_id)
            
        # Check out of bounds correct index
        if correct >= len(choices) or correct < 0:
            out_of_bounds.append((q_id, correct, len(choices)))
            
        # Check blank or suspiciously short choices
        has_blank = False
        for c in choices:
            c_str = str(c).strip()
            if len(c_str) < 4 and c_str != "Yes" and c_str != "No": 
                has_blank = True
        if has_blank:
            blank_choices.append(q_id)
            
        # Check potential leaked choices in question text
        # e.g. question ends with " A. "
        if text.endswith("A.") or " A. " in text[-10:] or "\nA." in text:
            leaked_choices.append(q_id)
            
    print("\n--- ANALYSIS RESULTS ---")
    print(f"Duplicate IDs: {len(duplicate_ids)} - {duplicate_ids}")
    print(f"Duplicate Texts: {len(duplicate_texts)} - {duplicate_texts[:5]} (showing first 5)")
    print(f"Missing Fields: {len(missing_fields)} - {missing_fields}")
    print(f"Out of Bounds Correct Index: {len(out_of_bounds)} - {out_of_bounds}")
    print(f"Blank/Short Choices: {len(blank_choices)} - {blank_choices}")
    print(f"Potential Leaked Choices in Question Text: {len(leaked_choices)} - {leaked_choices[:5]}")
    
if __name__ == "__main__":
    main()
