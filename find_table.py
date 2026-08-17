import fitz
import glob
import os

def main():
    pdf_files = glob.glob(r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\*.pdf")
    query = "manage outbound"
    
    for pdf_path in pdf_files:
        try:
            doc = fitz.open(pdf_path)
            for page_num in range(len(doc)):
                text = doc[page_num].get_text()
                if "Firewall1" in text and ("outbound" in text or "VNET1" in text):
                    print(f"--- Found in {os.path.basename(pdf_path)} (Page {page_num + 1}) ---")
                    print(text[:1500])
                    print("="*60)
        except Exception as e:
            pass

if __name__ == "__main__":
    main()
