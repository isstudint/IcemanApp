import json
import os

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    
    questions = json.loads(content[start_idx:end_idx])
    
    fixes = {
        "new_pdf_q15": {
            "choices": [
                "A. Assign User1 the Network Contributor role for Subscription1.",
                "B. Remove User from the Security Reader and Reader roles for Subscription1.",
                "C. Assign User1 the Network Contributor role for VNet1.",
                "D. Assign User1 the User Access Administrator role for VNet1."
            ],
            "correct": 3
        },
        "new_pdf_q49": {
            "choices": [
                "A. The user principal name of each user only",
                "B. The display name of each user only",
                "C. The display name and usage location of each user only",
                "D. The display name and user principal name of each user only"
            ],
            "correct": 0
        },
        "new_pdf_q177": {
            "choices": [
                "A. stored in the Hot access tier",
                "B. stored in the Cool access tier",
                "C. stored in the Archive access tier",
                "D. deleted"
            ],
            "correct": 2
        },
        "new_pdf_q31": {
            "choices": [
                "A. one Availability Set that has three fault domains and one update domain",
                "B. one Availability Set that has 10 update domains and one fault domain",
                "C. one virtual machine scale set that has 10 virtual machines instances",
                "D. one virtual machine scale set that has 12 virtual machines instances"
            ],
            "correct": 2
        },
        "new_pdf_q133": {
            "choices": [
                "A. Add a subnet to VNET1.",
                "B. Remove Microsoft.Network/virtualNetworks from the policy.",
                "C. Remove Microsoft.Compute/virtualMachines from the policy."
            ],
            "correct": 1
        }
    }
    
    to_delete = {"new_pdf_q37", "new_pdf_q118"}
    
    final_questions = []
    fixed_count = 0
    deleted_count = 0
    
    for q in questions:
        if q["id"] in to_delete:
            deleted_count += 1
            continue
            
        if q["id"] in fixes:
            q["choices"] = fixes[q["id"]]["choices"]
            q["correct"] = fixes[q["id"]]["correct"]
            fixed_count += 1
            
        final_questions.append(q)
        
    print(f"Fixed {fixed_count} questions.")
    print(f"Deleted {deleted_count} questions.")
    
    new_js = content[:start_idx] + json.dumps(final_questions, indent=2) + content[end_idx:]
    
    with open(dataset_path, "w", encoding="utf-8") as f:
        f.write(new_js)
        
    print("Dataset updated successfully!")

if __name__ == "__main__":
    main()
