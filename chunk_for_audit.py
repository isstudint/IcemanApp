import json
import math

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    output_dir = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch"
    
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    
    questions = json.loads(content[start_idx:end_idx])
    
    # We will split into 10 chunks to allow parallel AI auditing
    num_chunks = 10
    chunk_size = math.ceil(len(questions) / num_chunks)
    
    for i in range(num_chunks):
        chunk = questions[i*chunk_size : (i+1)*chunk_size]
        if not chunk: continue
        
        chunk_file = f"{output_dir}\\audit_chunk_{i}.json"
        with open(chunk_file, "w", encoding="utf-8") as f:
            json.dump(chunk, f, indent=2)
            
        print(f"Created {chunk_file} with {len(chunk)} questions.")

if __name__ == "__main__":
    main()
