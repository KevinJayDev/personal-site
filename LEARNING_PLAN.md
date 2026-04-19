# Claude Code Power User Learning Plan

**Source:** https://support.claude.com/en/articles/14554000-claude-code-power-user-tips
**Goal:** Become a Claude Code power user, building a personal website (Next.js + TypeScript) as the practice project
**Stack:** Next.js + TypeScript, deployed to Vercel
**Background:** Developer / AI-ML engineer, comfortable in notebooks, knows JS/TS basics
**Estimated total time:** 3–4 weeks at ~1 hour/day
**Version:** v2

---

## Environment Status

| Tool | Version | Status |
|------|---------|--------|
| Node.js | v24.15.0 | ✅ |
| Git | v2.50.1 (Apple Git-155) | ✅ |
| Claude Code | v2.1.114 | ✅ |
| Claude Pro | $20/month | ✅ |

---

## Coaching Notes (for Claude.ai)
- Always tell Kevin to restart Claude Code after creating new custom commands or making changes to `.claude/` config files — they don't hot-reload.
- Be explicit about every step, including things that seem obvious. Kevin is learning from zero.

## Sync Workflow (keeping this chat up to date)
At the end of each coding session in Claude Code, run `/session-end` — it updates `LEARNING_PLAN.md`, commits, and pushes to GitHub automatically.

To sync with this claude.ai chat:
1. Open `LEARNING_PLAN.md` in VS Code
2. Select all (Cmd + A), copy (Cmd + C)
3. Paste it into this chat and say: **"Here's my updated learning plan — what's next?"**

That's it. No manual editing needed — Claude Code maintains the file, you just paste it here.

Claude Code is instructed (via `CLAUDE.md`) to update this file after every session.
When checking in at claude.ai, share the repo or this file and say:
**"Here's my updated learning plan — what's next?"**
No manual syncing needed beyond that.

---

## Pre-Work Checklist (Before Day 1)
*Complete these before starting. No coding yet — just accounts and installs.*

### Accounts & Services
- ✅ **GitHub account** — created
- ✅ **Vercel account** — created (kevin@ksjay.com)
- [ ] **Domain name** (optional but recommended) — register one at Namecheap or Cloudflare Registrar (~$10–15/yr). Something like `yourname.dev`. Vercel gives you a free `.vercel.app` subdomain if you want to skip this for now and add it later.
- ✅ **Node.js 18+** installed — v24.15.0
- ✅ **Git** installed — v2.50.1 (Apple Git-155)

### Install Claude Code
- ✅ Run: `npm install -g @anthropic-ai/claude-code` — v2.1.114
- ✅ Verify: `claude --version`
- ✅ Sign in with your Anthropic account when prompted

### Install VS Code
- ✅ Download from code.visualstudio.com (free)
- ✅ Install the **ESLint** and **Prettier** extensions

---

## Phase 0: Sync System First (Day 1)
*Before anything else, wire up the auto-sync so this plan stays current without manual effort.*

**Day 1 — Project Setup & Auto-Sync**
- ✅ Create a new GitHub repo called `personal-site`
- ✅ Clone it locally and open in VS Code
- ✅ Run `claude` inside the repo directory
- ✅ Run `/init` to generate a starter `CLAUDE.md`
- [ ] Ask Claude Code to add this rule to `CLAUDE.md`:
  > "After every session, update `LEARNING_PLAN.md` — mark completed items with ✅ and add a one-line note on what was done or learned. Then commit and push the changes."
- [ ] Copy this `Learning_Plan` file into the repo as `LEARNING_PLAN.md`
- [ ] Create `.claude/commands/session-end.md` — a custom slash command that tells Claude to update the plan, commit, and push (ask Claude Code to write this for you)
- [ ] Run `/session-end` to test it — verify the commit appears on GitHub
- [ ] Run `/help` to orient yourself to available commands
- [ ] Skim the [Claude Code cheatsheet](https://support.claude.com/en/articles/14553413-claude-code-cheatsheet)

✅ **Sync system is now live. From here, Claude Code maintains your progress automatically.**

---

## Phase 1: Core Concepts (Days 2–6)
*Learn the highest-leverage habits before writing much code.*

**Day 2 — Verification (the #1 tip)**
- [ ] Install the **Claude Code Chrome extension**: code.claude.com/docs/en/chrome
- [ ] Scaffold the Next.js project: ask Claude Code to run `npx create-next-app@latest` with TypeScript
- [ ] Start the dev server and give Claude a small UI task; follow it with "Prove to me this works"
- [ ] Observe how Claude uses the browser extension to iterate until it looks right
- [ ] Deploy to Vercel: connect your GitHub repo at vercel.com — it auto-deploys on every push

**Day 3 — CLAUDE.md & Memory**
- [ ] Make Claude do something you don't like, correct it, then say: "Update your CLAUDE.md so you don't make that mistake again"
- [ ] Run `/memory` to explore the memory configuration menu
- [ ] Enable **auto-memory** and **auto-dream**
- [ ] Run `/dream` manually once to see what it does
- [ ] Review what's now in `CLAUDE.md` — it should reflect your preferences

**Day 4 — Planning Mode**
- [ ] Press `Shift+Tab` to enter plan mode
- [ ] Use it to plan a real feature: e.g., "add a projects section to the homepage"
- [ ] Practice the flow: plan → refine → auto-accept → execute
- [ ] Have Claude review its own plan "as a staff engineer" before executing
- [ ] Use `claude --name "homepage-projects"` to name the session

**Day 5 — Prompting Effectively**
- [ ] Practice these prompts on real website tasks:
  - "Grill me on these changes and don't make a PR until I pass your test."
  - "Knowing everything you know now, scrap this and implement the elegant solution."
  - "Prove to me this works." (compare before/after in the browser)
- [ ] Write a detailed spec for one feature before handing it off — observe the quality difference

**Day 6 — Effort Levels & Output Styles**
- [ ] Run `/effort` and try each level on the same task; compare results
- [ ] Use `/effort max` on a layout or architecture decision
- [ ] Run `/config` and set output style to **Explanatory**
- [ ] Ask Claude to explain the *why* behind a Next.js pattern it used
- [ ] Try **Learning** mode — have Claude coach you through a TypeScript concept

---

## Phase 2: Customization & Automation (Days 7–14)

**Day 7 — Terminal & Environment**
- [ ] Run `/terminal-setup` to enable `Shift+Enter` for newlines
- [ ] Run `/statusline` to build a custom status line (model, context, cost)
- [ ] Run `/color` to color-code your prompt
- [ ] Run `/vim` if you use Vim keybindings

**Day 8 — Slash Commands**
- [ ] Create a `/page` command: adds a new Next.js page with standard boilerplate
- [ ] Create a `/techdebt` command: reviews changed files for duplication and complexity
- [ ] Practice: any repeated action → turn it into a command

**Day 9 — Permissions**
- [ ] Run `/permissions` to review defaults
- [ ] Pre-approve common safe commands: `"Bash(npm run *)"`, `"Bash(git *)"`, `"Edit(src/**)"`
- [ ] Commit `.claude/settings.json` to git

**Day 10 — Subagents**
- [ ] Create `.claude/agents/` folder
- [ ] Write a `code-reviewer.md` agent focused on TypeScript quality
- [ ] Write a `accessibility-checker.md` agent for frontend a11y review
- [ ] Append "use subagents" to a complex request and observe the difference

**Day 11 — Hooks**
- [ ] Add a `PostToolUse` hook to auto-run `npm run format` after Write/Edit
- [ ] Add a `Stop` hook to run `npm run build` as a final check on long tasks
- [ ] Consider a `SessionStart` hook to echo remaining context and cost

**Day 12 — /simplify**
- [ ] After building a feature, run: `make this change then run /simplify`
- [ ] Observe parallel agents reviewing for reuse, quality, and CLAUDE.md compliance
- [ ] Add `/simplify` to your `/session-end` command

**Day 13 — GitHub Integration**
- [ ] Run `/install-github-action` to set up `@claude` in PRs
- [ ] Open a PR for a feature, tag `@claude` with a correction + "add to CLAUDE.md"
- [ ] Observe "Compounding Engineering" in action

**Day 14 — Review & Consolidate**
- [ ] Re-read `CLAUDE.md` — prune anything stale
- [ ] Run `/dream` to consolidate memory
- [ ] Audit `.claude/commands/` — are all commands documented and useful?
- [ ] Full workflow test: plan mode → build → `/simplify` → `/session-end`

---

## Phase 3: Parallelism & Advanced Patterns (Days 15–21)

**Day 15 — Parallel Sessions**
- [ ] Open 3 terminal tabs, run `claude` in each, color-code them with `/color`
- [ ] Try `claude --worktree` for an isolated feature branch session
- [ ] Assign one session per concern: UI, logic, tests

**Day 16 — Scheduled Tasks**
- [ ] Try `/loop 30m /techdebt` — recurring local code quality check
- [ ] Try `/schedule` for a cloud job (e.g., daily check for broken links on the site)

**Day 17 — Voice Input**
- [ ] Run `/voice` (hold spacebar to speak) or use the Desktop app microphone
- [ ] Dictate a full feature prompt — notice how much more detail you naturally give

**Day 18 — Remote & Mobile**
- [ ] Download the Claude app on your phone; tap the Code tab
- [ ] Try `claude --teleport` to move a session between terminal and mobile
- [ ] Try `/remote-control` from your phone

**Day 19 — MCP Integrations**
- [ ] Add a GitHub MCP server to `settings.json`
- [ ] Try: "go fix the failing CI tests" — no micromanagement
- [ ] Explore adding a database MCP when the finance app begins

**Day 20 — /batch**
- [ ] Use `/batch` on a real migration (e.g., convert all CSS modules to Tailwind)
- [ ] Observe how agents fan out, work in isolation, and create PRs independently

**Day 21 — Review & Personal System**
- [ ] Pick your 3 highest-leverage workflows; ensure each has a slash command or agent
- [ ] Run `/dream` to clean memory
- [ ] Commit everything — your `.claude/` setup is now a portable power-user toolkit

---

## Phase 4: Advanced & Finance App Prep (Days 22–28)

**Day 22 — SDK & Multi-Repo**
- [ ] Try `--bare` for faster non-interactive Claude usage
- [ ] Use `--add-dir` to reference a second repo in one session
- [ ] Practice `/branch` to fork a session and explore an alternative solution

**Day 23 — Auto Mode & Sandboxing**
- [ ] Enable auto mode: `claude --enable-auto-mode`
- [ ] Run `/sandbox` and try file + network isolation modes
- [ ] Use `--permission-mode=dontAsk` for a long automated task

**Day 24 — Finance App: Architecture Planning**
- [ ] Create a new repo `finance-app`
- [ ] Use `/effort max` + plan mode to design the full architecture
- [ ] Have Claude review its own architecture plan "as a staff engineer"
- [ ] Produce a `SPEC.md` before writing any code

**Day 25 — Finance App: Data Layer**
- [ ] Set up a local database (SQLite to start, Postgres later)
- [ ] Add a database MCP or CLI tool so Claude can query it directly
- [ ] Let Claude write and run the schema — "prove to me this works"

**Day 26 — Finance App: ML Integration**
- [ ] Plan where your ML/AI background adds value (e.g., transaction categorization, anomaly detection)
- [ ] Use subagents to isolate the ML pipeline from the UI layer
- [ ] Plan the embedded chatbot feature for the personal site (revisit this with MCP + Anthropic API)

**Day 27 — @claude Code Reviews at Scale**
- [ ] Set up code review agents for the finance app: logic, security, performance
- [ ] Each agent posts inline PR comments independently
- [ ] Measure: how much does this change your review turnaround time?

**Day 28 — Final Review & System Audit**
- [ ] Both repos have rich `CLAUDE.md`, committed `.claude/` configs, and working `/session-end`
- [ ] You have a personal slash command library that reflects your actual workflows
- [ ] Identify the single highest-leverage thing you've built — document it in `CLAUDE.md`
- [ ] The personal site is live at your domain (or `.vercel.app`). The finance app has a working foundation.
- [ ] **Start the Cowork expense report project** — see `PROJECT_IDEAS.md` for details
- [ ] **Plan the daily generative content page** — see `PROJECT_IDEAS.md`, start with Phase 1 (plain text) to learn Cowork, evolve toward interactive visualizations

---

## Domain Name Guidance

| Decision | Recommendation |
|----------|---------------|
| Skip for now | Use the free `yourproject.vercel.app` subdomain — zero setup |
| Buy now | Cloudflare Registrar (cheapest, ~$9/yr for `.dev`) or Namecheap |
| Good name formats | `firstname.dev`, `firstnamelastname.com`, `firstnamelast.io` |
| Connect to Vercel | Add domain in Vercel dashboard → update DNS at your registrar → done |

You do **not** need a domain to start. Buy one when the site is live enough to share.

---

## Quick Reference: Key Commands

| Area | Commands |
|------|----------|
| Sync | `/session-end` (custom), commit + push `LEARNING_PLAN.md` |
| Start | `claude`, `/help`, `claude --version` |
| Planning | `Shift+Tab` (plan mode), `/effort max`, `claude --name` |
| Memory | `/init`, `/memory`, `/dream`, `CLAUDE.md` |
| Verification | Chrome extension, `/simplify`, Desktop app |
| Parallelism | `claude --worktree`, `/batch`, `isolation: worktree` |
| Automation | `.claude/commands/`, `.claude/agents/`, `--agent` |
| Hooks | `PostToolUse`, `Stop`, `PostCompact`, `SessionStart` |
| Permissions | `/permissions`, auto mode, `/sandbox` |
| Scheduling | `/loop`, `/schedule` |
| Remote | `--teleport`, `/remote-control`, mobile app |
| Customization | `/statusline`, `/color`, `/voice`, `/config` |
| SDK | `--bare`, `--add-dir`, `/branch` |

---

## The Single Most Important Habit

> **Give Claude a way to verify its own output.**
> If Claude can close the feedback loop on its own, it will iterate until the output is right.
> Everything else in this plan is secondary to this one principle.

---

## How to Use This Plan with Claude.ai

When checking in at claude.ai (this chat), say:
**"Here's my updated LEARNING_PLAN.md — what's next?"**
Then paste the file or share the repo. Claude will read progress, confirm what's done, and give you the next day's instructions.

You do not need to explain what you've already done — the ✅ checkmarks and session notes in this file tell the story.
