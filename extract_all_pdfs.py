import os
import pdfplumber

def main():
    directory = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp"
    output_file = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch\all_pdfs_raw.txt"
    
    # Get all PDF files
    pdf_files = [f for f in os.listdir(directory) if f.lower().endswith('.pdf')]
    print(f"Found {len(pdf_files)} PDF files.")
    
    with open(output_file, "w", encoding="utf-8") as out_f:
        for pdf_file in pdf_files:
            pdf_path = os.path.join(directory, pdf_file)
            print(f"Extracting {pdf_file}...")
            out_f.write(f"\n\n{'='*50}\nSTART OF PDF: {pdf_file}\n{'='*50}\n\n")
            
            try:
                with pdfplumber.open(pdf_path) as pdf:
                    for i, page in enumerate(pdf.pages):
                        text = page.extract_text()
                        if text:
                            out_f.write(text + "\n")
            except Exception as e:
                print(f"Error reading {pdf_file}: {e}")
                
    print(f"Done extracting all PDFs to {output_file}")

if __name__ == "__main__":
    main()
