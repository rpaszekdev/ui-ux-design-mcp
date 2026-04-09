# UIsense — Frontend ↔ Backend API Contract

## Base URL

```
http://localhost:3001/api
```

---

## Endpoint: `POST /api/audit`

### Request

**Content-Type:** `multipart/form-data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `screenshot` | File (png/jpg) | Yes | Screenshot of the website page |
| `url` | string | Yes | URL of the website |

**Example (fetch):**
```js
const formData = new FormData();
formData.append('screenshot', file);       // File from <input type="file">
formData.append('url', 'https://example.com');

const response = await fetch('http://localhost:3001/api/audit', {
  method: 'POST',
  body: formData,
});
const data = await response.json();
```

---

### Response (Success — 200)

```json
{
  "score": 42,
  "maxScore": 100,
  "summary": "Your landing page has strong visual hierarchy but critical issues with CTA placement and accessibility.",
  "findings": [
    {
      "id": "f1",
      "issue": "Primary CTA is below the fold",
      "severity": "critical",
      "category": "usability",
      "principle": "Nielsen Heuristic #7 — Flexibility and efficiency of use",
      "citation": "Users should be able to reach key actions without scrolling. Primary actions must be visible in the initial viewport.",
      "suggestion": "Move the main CTA button into the hero section, above the fold."
    },
    {
      "id": "f2",
      "issue": "Navigation has 12 items",
      "severity": "medium",
      "category": "cognitive-load",
      "principle": "Hick's Law",
      "citation": "The time to make a decision increases with the number and complexity of choices.",
      "suggestion": "Reduce navigation to 5-7 primary items. Group secondary items under a 'More' dropdown."
    },
    {
      "id": "f3",
      "issue": "Good use of whitespace in hero section",
      "severity": "positive",
      "category": "visual-design",
      "principle": "Gestalt — Proximity",
      "citation": "Objects near each other are perceived as related.",
      "suggestion": null
    }
  ],
  "improvedHtml": "<!DOCTYPE html><html>...full self-contained HTML+CSS...</html>",
  "principlesUsed": [
    "Nielsen Heuristics",
    "Gestalt Principles",
    "Laws of UX",
    "WCAG Accessibility",
    "Typography Rules"
  ]
}
```

---

### Response (Error — 400/500)

```json
{
  "error": "Screenshot is required",
  "code": "MISSING_SCREENSHOT"
}
```

**Error codes:**

| Code | Status | Meaning |
|------|--------|---------|
| `MISSING_SCREENSHOT` | 400 | No screenshot uploaded |
| `MISSING_URL` | 400 | No URL provided |
| `INVALID_IMAGE` | 400 | File is not a valid image |
| `ANALYSIS_FAILED` | 500 | Claude API call failed |
| `MCP_UNAVAILABLE` | 500 | Could not reach uiux MCP |

---

### Severity Values

| Value | Color | Meaning |
|-------|-------|---------|
| `"critical"` | Red | Must fix — major usability/accessibility issue |
| `"medium"` | Yellow | Should fix — notable improvement opportunity |
| `"low"` | Blue | Nice to fix — minor polish |
| `"positive"` | Green | Already good — worth keeping |

---

### Categories

```
"usability" | "accessibility" | "visual-design" | "cognitive-load" |
"typography" | "color" | "layout" | "navigation" | "forms" | "mobile"
```

---

## Frontend Requirements

### Page 1: Landing / Upload
- URL text input
- Screenshot file upload (drag & drop preferred)
- "Audit My Site" button
- On submit: POST to `/api/audit`, show loading state

### Page 2: Loading
- Show animation while backend processes (~15-30 seconds)
- Animated "reading books" effect showing principle categories being analyzed
- `principlesUsed` in response tells you which ones were consulted

### Page 3: Results
- **Score** — gauge or number out of 100
- **Before / After** — original screenshot (left) vs `improvedHtml` rendered in iframe (right)
- **Findings list** — sorted by severity, each showing:
  - Issue description
  - Severity badge (colored)
  - Principle name + citation
  - Suggestion (if not positive)
- **Summary** — top-level text

### Design Notes
- Clean, minimal, Notion-like aesthetic
- Use system font stack or Inter
- White background, subtle gray borders
- Green/yellow/red for severity badges
- The `improvedHtml` must be rendered in a **sandboxed iframe** (`sandbox="allow-scripts"`)

---

## CORS

Backend will have CORS enabled for `http://localhost:5173` (Vite default).

---

## How to develop without backend

Mock the API response with the example JSON above. When backend is ready, just point fetch to `localhost:3001`.
