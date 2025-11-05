# SurveySparrows Assignment 

A no-build React + Tailwind (CDN) calendar that meets the assignment specs and runs anywhere (GitHub Pages, local file system).

## Highlights
- **Views:** Month / Week / Day
- **Navigation:** Previous / Next / Today
- **Today highlight** and out-of-month dimming
- **Static events from JSON** (`/data/events.json`)
- **Overlap handling:** interval partitioning → stacked lanes with width offsets
- **Add Event** modal (write-to-memory; ephemerally adds during session)
- **Responsive:** phone, tablet, laptop, desktop
- **Aesthetic UI:** soft glassmorphism card on **gradient background**

## Run locally
Just open `index.html` in any browser. No build step needed.

## Deploy to GitHub Pages
1. Create a repo named `surveysparrows-assignment` (or any name).
2. Add these files and push.
3. In **Settings → Pages**, choose the `main` branch and root (`/`). The app will be live.

## Events JSON
Edit `data/events.json`. Each event requires:
```json
{
  "id": "unique-string",
  "title": "Meeting",
  "date": "YYYY-MM-DD",
  "start": "HH:MM",
  "end": "HH:MM",
  "color": "#0ea5e9"
}
```

## Notes
- Designed to closely resemble Google Calendar behavior while keeping the scope aligned to the assignment PDF.
- You can extend with auth, persistence, drag-and-drop, recurring events, timezone selection, etc.

— Built for recruiters to review quickly and run instantly.
