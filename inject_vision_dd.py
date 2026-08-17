import json
import glob
import os
import re

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    
    # We will search the active conversation brains for vision_parsed_*.json
    brains_dir = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain"
    json_files = glob.glob(os.path.join(brains_dir, "**", "scratch", "vision_parsed_*.json"), recursive=True)
    
    new_questions = []
    for jf in json_files:
        try:
            with open(jf, "r", encoding="utf-8") as f:
                data = json.load(f)
                new_questions.append(data)
                print(f"Loaded {jf}")
        except Exception as e:
            print(f"Error loading {jf}: {e}")
            
    if not new_questions:
        print("No new vision parsed questions found.")
        return
        
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    
    existing_qs = json.loads(content[start_idx:end_idx])
    print(f"Loaded {len(existing_qs)} existing questions.")
    
    for i, nq in enumerate(new_questions):
        nq["id"] = f"vision_dd_extract_{i}"
        nq["type"] = "drag-drop"
        existing_qs.append(nq)
        
    print(f"Total questions now: {len(existing_qs)}")
    
    new_js = content[:start_idx] + json.dumps(existing_qs, indent=2) + content[end_idx:]
    
    with open(dataset_path, "w", encoding="utf-8") as f:
        f.write(new_js)
        
    print(f"Successfully injected {len(new_questions)} Drag and Drop questions into questions_dataset.js!")

if __name__ == "__main__":
    main()
