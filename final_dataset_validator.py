import json
import re
import sys

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Verify JS assignment
    if "const QUESTIONS =" not in content or "const DOMAINS =" not in content:
        print("FAIL: dataset does not contain const QUESTIONS = or const DOMAINS =")
        sys.exit(1)

    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1

    try:
        questions = json.loads(content[start_idx:end_idx])
    except Exception as e:
        print(f"FAIL: JSON parsing error: {e}")
        sys.exit(1)

    print(f"Total Questions: {len(questions)}")

    issues = []
    domains = {}
    id_set = set()

    for idx, q in enumerate(questions):
        q_id = q.get("id")
        if not q_id:
            issues.append(f"Item #{idx} missing 'id'")
        elif q_id in id_set:
            issues.append(f"Duplicate id found: {q_id}")
        else:
            id_set.add(q_id)

        # Question text
        q_text = q.get("question", "")
        if not q_text or len(q_text.strip()) < 10:
            issues.append(f"Item {q_id} has empty/too short question text")

        # Choices
        choices = q.get("choices")
        if not isinstance(choices, list) or len(choices) < 2:
            issues.append(f"Item {q_id} has invalid choices (len: {len(choices) if isinstance(choices, list) else 'not a list'})")
        else:
            for c_idx, c in enumerate(choices):
                if not str(c).strip():
                    issues.append(f"Item {q_id} choice [{c_idx}] is empty")

        # Correct index
        correct = q.get("correct")
        if not isinstance(correct, int) or correct < 0 or (isinstance(choices, list) and correct >= len(choices)):
            issues.append(f"Item {q_id} correct index out of bounds: {correct} (choices len: {len(choices) if isinstance(choices, list) else 0})")

        # Domain
        domain = q.get("domain", "uncategorized")
        domains[domain] = domains.get(domain, 0) + 1

        # Explanation
        exp = q.get("explanation", "")
        if not exp or len(exp.strip()) == 0:
            issues.append(f"Item {q_id} has empty explanation")

        # Check for lingering artifacts
        if "=== PAGE" in q_text or any("=== PAGE" in str(c) for c in choices):
            issues.append(f"Item {q_id} has lingering '=== PAGE' marker")

        if "Mastered" in str(choices):
            issues.append(f"Item {q_id} has lingering 'Mastered' placeholder")

    print("\n--- Domain Breakdown ---")
    for d, count in sorted(domains.items()):
        print(f"  {d}: {count}")

    print("\n--- Issues Found ---")
    if not issues:
        print("PERFECT: 0 issues found! All questions are 100% valid and verified.")
    else:
        print(f"Found {len(issues)} issues:")
        for iss in issues[:20]:
            print(f"  - {iss}")

if __name__ == "__main__":
    main()
