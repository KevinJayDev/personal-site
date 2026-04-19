# Project Ideas

## 1. Personal Website
- **Stack:** Next.js + TypeScript, deployed to Vercel
- **Purpose:** Primary practice project for the Claude Code learning plan
- **Notes:** Build alongside the 28-day plan; live at a custom domain or `.vercel.app`

---

## 2. Finance App
- **Stack:** TBD (SQLite → Postgres, Next.js frontend)
- **Purpose:** Personal finance tracker with ML-powered features
- **Ideas:** Transaction categorization, anomaly detection, embedded AI chatbot
- **Notes:** Starts in Phase 4 (Day 24+) of the learning plan

---

## 3. Expense Report Generator
- **Tool:** Cowork (Claude desktop automation)
- **Purpose:** Automate work expense report creation and submission
- **Ideas:** Pull receipts/data from files, generate formatted reports, automate filing workflow
- **Notes:** Good candidate for Cowork since it involves file management and repetitive desktop tasks
- **⏰ REMINDER:** Come back to this after completing the 28-day Claude Code learning plan. This is a standalone project — no coding required, just Cowork.

---

## 4. Daily Generative Content Page (on Personal Site)
- **Tools:** Cowork (scheduling + automation) + Claude Code (page infrastructure)
- **Purpose:** Cowork runs daily, generates something creative, commits it to the repo, Vercel auto-deploys. You check the site at work and see what it made.
- **Roadmap:**
  - **Phase 1 (start here):** Plain text generation — essays, fake Wikipedia articles, alternate history, letters to future readers, invented things. Use this phase to learn Cowork's scheduling and git automation.
  - **Phase 2 (eventually):** Upgrade to interactive HTML/JS — generative art, simulations, mini games, data visualizations, fake OS interfaces. Each day Claude picks a *medium* and a *theme* independently and combines them.
- **Mood system idea:** Give it a list of moods (philosophical, unhinged, scientific, melancholy, playful...) — it rolls one each morning before deciding what to make. Frames the content differently every day.
- **Budget note:** Phase 1 is viable on Pro ($20/mo). Phase 2 burns more tokens per generation — consider upgrading to Max 5x ($100/mo) before enabling it. Start with 2-3x/week rather than daily to preserve usage for Claude Code work.
- **⏰ REMINDER:** Start Phase 1 after completing the 28-day plan and finishing the Expense Report project (to learn Cowork first). Revisit Phase 2 when the personal site is live and you have a feel for your usage limits.

---

## 5. Build Diary Page (on Personal Site)
- **Purpose:** A page on the personal site that shows every meaningful Claude Code prompt that built the site, and what it returned. A transparent, auto-generated record of how the site was created.
- **Why it's compelling:** Most portfolios are static. This one documents its own creation in real time. Shows AI/ML fluency in a way a clean website never could.
- **How it works:** A `/log-session` slash command extracts meaningful prompts from the current session and appends them to a `build-log.json` file. The page reads that file and renders a timeline.
- **Design idea:** Make it look like a terminal or chat interface — not a table. Each entry shows the prompt, a summary of what changed, maybe a before/after screenshot.
- **Curation note:** Filter out boring commands (`git add .`, `npm run dev`) — only surface meaningful Claude interactions.
- **Current status:** ⚠️ Logging not yet set up — no build history captured from Days 1-2 yet.
- **⏰ ACTION ON DAY 8:** Create the `/log-session` slash command. Then manually write a summary entry for Days 1-2 to seed the log so the full history is there from the start.
