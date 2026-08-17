import fitz
import os
import re

def main():
    pdf_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\microsoft.examcollection.az-104.free.pdf.2026-aug-04.by.jeff.308q.vce.pdf"
    output_dir = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\pdf_images"
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    doc = fitz.open(pdf_path)
    print(f"Opened {pdf_path} with {len(doc)} pages.")
    
    # We will just extract the first 3 Drag and Drop pages we find for proof-of-concept
    extracted_count = 0
    max_extract = 3
    
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text()
        
        if re.search(r'(?i)drag and drop|hotspot', text):
            # Render page to an image
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # 2x zoom for high quality
            img_path = os.path.join(output_dir, f"dd_page_{page_num}.png")
            pix.save(img_path)
            print(f"Extracted Drag & Drop image: {img_path}")
            
            extracted_count += 1
            if extracted_count >= max_extract:
                break
                
    print(f"Finished extracting {extracted_count} images.")

if __name__ == "__main__":
    main()
