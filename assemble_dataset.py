import json
import os

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    scratch_dir = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch"
    
    all_questions = []
    
    for i in range(8):
        chunk_file = os.path.join(scratch_dir, f"chunk_{i}_explained.json")
        if not os.path.exists(chunk_file):
            print(f"Error: {chunk_file} does not exist yet. Ensure all subagents have finished.")
            return
            
        with open(chunk_file, "r", encoding="utf-8") as f:
            chunk_data = json.load(f)
            all_questions.extend(chunk_data)
            
    # Write back to the dataset file
    js_output = f"""const DOMAINS = {{
  identity:   {{ name: 'Identities & Governance', short: 'Identity' }},
  storage:    {{ name: 'Implement & Manage Storage', short: 'Storage' }},
  compute:    {{ name: 'Deploy & Manage Compute', short: 'Compute' }},
  networking: {{ name: 'Virtual Networking', short: 'Networking' }},
  monitor:    {{ name: 'Monitor & Maintain', short: 'Monitor' }}
}};

const QUESTIONS = {json.dumps(all_questions, indent=2)};
"""
    with open(dataset_path, "w", encoding="utf-8") as f:
        f.write(js_output)
        
    print(f"Successfully assembled {len(all_questions)} explained questions into questions_dataset.js!")

if __name__ == "__main__":
    main()
