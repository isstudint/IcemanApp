import json
import math
import os

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    scratch_dir = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch"
    
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    questions = json.loads(content[start_idx:end_idx])
    
    num_chunks = 8
    chunk_size = math.ceil(len(questions) / num_chunks)
    
    for i in range(num_chunks):
        chunk = questions[i*chunk_size : (i+1)*chunk_size]
        if not chunk:
            continue
            
        chunk_file = os.path.join(scratch_dir, f"chunk_{i}.json")
        with open(chunk_file, "w", encoding="utf-8") as f:
            json.dump(chunk, f, indent=2)
        print(f"Created chunk_{i}.json with {len(chunk)} questions")

if __name__ == "__main__":
    main()
