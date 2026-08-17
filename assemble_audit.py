import os
import glob

def main():
    scratch_dir = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\scratch"
    master_report = r"C:\Users\Marvelous Gonzales\.gemini\antigravity\brain\928465f8-7f8e-45ca-b77d-31df669993e1\audit_report.md"
    
    report_files = sorted(glob.glob(os.path.join(scratch_dir, "audit_report_chunk_*.md")))
    
    with open(master_report, "w", encoding="utf-8") as out_f:
        out_f.write("# AZ-104 Fact Checker Audit Report\n\n")
        out_f.write("> [!WARNING]\n")
        out_f.write("> The following questions were flagged by the AI Subagent Swarm because their derived answers heavily disagreed with the PDF's answer key.\n\n")
        
        total_flagged = 0
        
        for rf in report_files:
            with open(rf, "r", encoding="utf-8") as in_f:
                content = in_f.read().strip()
                if "No discrepancies found" not in content and "0 discrepancies" not in content.lower():
                    total_flagged += 1
                    out_f.write(f"## From {os.path.basename(rf)}\n")
                    out_f.write(content + "\n\n---\n\n")
                    
        if total_flagged == 0:
            out_f.write("No discrepancies were found in any chunk. The dataset appears 100% accurate!\n")
            
    print(f"Master audit report generated at {master_report}")

if __name__ == "__main__":
    main()
