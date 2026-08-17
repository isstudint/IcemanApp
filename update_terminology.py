import re

def main():
    dataset_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\questions_dataset.js"
    
    with open(dataset_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    replacements = [
        (r'\bAzure Active Directory\b', 'Microsoft Entra ID'),
        (r'\bAzure AD\b', 'Microsoft Entra ID'),
        (r'\bAzure Security Center\b', 'Microsoft Defender for Cloud'),
        (r'\bAzure Advanced Threat Protection\b', 'Microsoft Defender for Identity'),
        (r'\bAzure ATP\b', 'Microsoft Defender for Identity')
    ]
    
    new_content = content
    total_replacements = 0
    
    for pattern, repl in replacements:
        # Ignore case for searching but keep replacement exact
        new_content, count = re.subn(re.compile(pattern, re.IGNORECASE), repl, new_content)
        total_replacements += count
        print(f"Replaced {count} instances of {pattern}")
        
    if total_replacements > 0:
        with open(dataset_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Successfully applied {total_replacements} terminology updates!")
    else:
        print("No terminology updates needed.")

if __name__ == "__main__":
    main()
