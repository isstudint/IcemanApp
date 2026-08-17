---
tags: [AZ-104, dashboard]
last-reviewed: 2026-08-08
status: reference
domain: identity-governance
---

# 📊 AZ-104 Study Dashboard

> [!tip] How to use this dashboard
> This page auto-updates using **Dataview**. Change the `status` field in any note's frontmatter to track your progress:
> - `in-progress` — actively studying
> - `mastered` — you know this cold
> - `needs-review` — flagged for re-study
> - `stub` — short reference entry (no deep study needed)
> - `reference` — cheat sheets, checklists (not study content)

---

## 📈 Progress Overview

```dataview
TABLE WITHOUT ID
  length(filter(rows, (r) => r.status = "mastered")) AS "✅ Mastered",
  length(filter(rows, (r) => r.status = "in-progress")) AS "📝 In Progress",
  length(filter(rows, (r) => r.status = "needs-review")) AS "🔴 Needs Review",
  length(filter(rows, (r) => r.status = "stub")) AS "📌 Stubs",
  length(filter(rows, (r) => r.status = "reference")) AS "📋 Reference",
  length(rows) AS "📊 Total"
FROM "AZ - 104"
WHERE file.name != "AZ-104 - Study Dashboard"
GROUP BY true
```

---

## 🔴 Needs Review (study these first!)

```dataview
TABLE status, last-reviewed, domain
FROM "AZ - 104"
WHERE status = "needs-review"
SORT last-reviewed ASC
```

---

## 📝 In Progress (actively studying)

```dataview
TABLE last-reviewed, domain, file.folder AS "Folder"
FROM "AZ - 104"
WHERE status = "in-progress"
SORT last-reviewed ASC
```

---

## ✅ Mastered (you know these)

```dataview
TABLE last-reviewed, domain
FROM "AZ - 104"
WHERE status = "mastered"
SORT last-reviewed ASC
```

---

## 📅 Stale Notes (not reviewed in 7+ days)

```dataview
TABLE last-reviewed, status, domain
FROM "AZ - 104"
WHERE status != "reference" AND status != "stub"
WHERE date(last-reviewed) <= date(today) - dur(7 days)
SORT last-reviewed ASC
```

---

## 📌 Quick Links by Domain

### Identity & Governance (20–25%)

```dataview
TABLE status, last-reviewed
FROM "AZ - 104"
WHERE domain = "identity-governance" AND status != "reference" AND status != "stub"
SORT file.name ASC
```

### Glossary Stubs

```dataview
TABLE status, file.folder AS "Folder"
FROM "AZ - 104"
WHERE status = "stub"
SORT file.name ASC
```

---

## 🗂️ Full Vault Index

```dataview
TABLE status, last-reviewed, domain, file.folder AS "Folder"
FROM "AZ - 104"
WHERE file.name != "AZ-104 - Study Dashboard"
SORT file.folder ASC, file.name ASC
```

---

## 📋 How to Update Your Progress

When you finish studying a note, update its frontmatter:

```yaml
---
status: mastered        # ← change this
last-reviewed: 2026-08-08  # ← update to today's date
---
```

**Status options:**
| Status | When to use |
|---|---|
| `in-progress` | You're actively studying this topic |
| `mastered` | You can answer exam questions on this topic confidently |
| `needs-review` | You got questions wrong or feel shaky — flag for re-study |
| `stub` | Short reference entries (protocols, legacy terms) |
| `reference` | Cheat sheets and checklists — not study content |

> [!tip] Daily study routine
> 1. Open this dashboard
> 2. Check **"Stale Notes"** — anything not reviewed in 7+ days needs attention
> 3. Check **"Needs Review"** — priority re-study items
> 4. Pick 2-3 notes from **"In Progress"** to review
> 5. After reviewing, update `last-reviewed` date and `status` if mastered

---

## Related
- [[AZ-104 - Checklist]]
- [[AZ-104 - Exam Day Cheat Sheet]]
- [[AZ-104 - Command Cheat Sheet]]
