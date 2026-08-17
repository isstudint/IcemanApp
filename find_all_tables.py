import json
import re

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()

    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    questions = json.loads(content[start_idx:end_idx])

    table_qs = []
    for q in questions:
        text = q.get("question", "")
        if "shown in the following table" in text or "following table" in text:
            table_qs.append(q["id"])

    print(f"Total questions referencing a table: {len(table_qs)}")
    for qid in table_qs[:10]:
        print(f"  - {qid}")

if __name__ == "__main__":
    main()
