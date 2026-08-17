import fitz
import os

def main():
    doc = fitz.open(r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\AZ-104 Exam Q&As (2).pdf")
    page = doc[285] # 0-indexed page 286
    print("Page text:")
    print(page.get_text())
    
    # Render page to image
    pix = page.get_pixmap(dpi=150)
    os.makedirs(r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\pdf_images", exist_ok=True)
    out_path = r"c:\Users\Marvelous Gonzales\Documents\GitHub\IcemanApp\pdf_images\page_286.png"
    pix.save(out_path)
    print(f"Saved rendered page to {out_path}")

if __name__ == "__main__":
    main()
