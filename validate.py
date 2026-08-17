import json

with open(r'C:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js', 'r', encoding='utf-8') as f:
    content = f.read()
    json_str = content[content.find('['):content.rfind(']')+1]
    questions = json.loads(json_str)

errors = 0
for q in questions:
    if q['correct'] >= len(q['choices']) or q['correct'] < 0:
        print(f"Error in {q['id']}: correct index {q['correct']} out of bounds for choices len {len(q['choices'])}")
        errors += 1
print(f'Total errors: {errors}')
