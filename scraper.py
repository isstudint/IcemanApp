import json
import time
import re
import sys
from duckduckgo_search import DDGS

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    questions = json.loads(content[start_idx:end_idx])
    
    ddgs = DDGS()
    
    # Process just a few for testing if argument is 'test'
    is_test = len(sys.argv) > 1 and sys.argv[1] == "test"
    count = 3 if is_test else len(questions)
    
    for i, q in enumerate(questions[:count]):
        # Skip if we already got an explanation
        if q.get("explanation") and "No detailed explanation" not in q["explanation"]:
            continue
            
        # Get first sentence or two of the question for search, excluding generic preambles
        q_text = q["question"]
        q_text = re.sub(r'(?i)Note: The question is included.*?(satisfies the requirements\.|meet the goal\?)', '', q_text, flags=re.DOTALL)
        q_text = re.sub(r'(?i)Note: This question is part of a series.*?(review screen\.)', '', q_text, flags=re.DOTALL)
        
        snippet = " ".join(q_text.split("\n")[:2])[:100].strip()
        query = f"AZ-104 {snippet}"
        print(f"Searching: {query}")
        
        try:
            results = ddgs.text(query, max_results=2)
            explanation_parts = []
            for r in results:
                explanation_parts.append(r['body'])
                
            if explanation_parts:
                q["explanation"] = " ".join(explanation_parts)
            else:
                q["explanation"] = "No detailed explanation found online."
        except Exception as e:
            print(f"Error fetching Q{q['number']}: {e}")
            
        time.sleep(1) # Rate limit protection
        
    if is_test:
        for q in questions[:count]:
            print(f"--- Q{q['number']} Explanation ---")
            print(q["explanation"])
            print("---------------------------")
    else:
        # Save back
        js_output = f"""const DOMAINS = {{
  identity:   {{ name: 'Identities & Governance', short: 'Identity' }},
  storage:    {{ name: 'Implement & Manage Storage', short: 'Storage' }},
  compute:    {{ name: 'Deploy & Manage Compute', short: 'Compute' }},
  networking: {{ name: 'Virtual Networking', short: 'Networking' }},
  monitor:    {{ name: 'Monitor & Maintain', short: 'Monitor' }}
}};

const QUESTIONS = {json.dumps(questions, indent=2)};
"""
        with open(dataset_path, "w", encoding="utf-8") as f:
            f.write(js_output)
        print("Updated questions_dataset.js successfully.")

if __name__ == "__main__":
    main()
