# PRD — Ticket intake merge (skeleton)

## Status

**Blocked on stakeholder intake.** This file is a **structure-only** shell. Do not treat any requirement, persona, field list, or flow below as agreed until you paste real notes into the **Intake** section and mark sections as confirmed.

| Field | Value |
| --- | --- |
| Document | Draft skeleton |
| Last updated | 2026-04-10 |

---

## 0. Intake (fill this in — nothing below is authoritative until this section is completed)

Paste from your workshop / tickets / partner sync:

- **Current flow (As-is):** _TBD_
- **Target / constraints (To-be):** _TBD_
- **New or changed inputs (fields, channels, SLA, tooling):** _TBD_
- **Teams / ownership boundaries:** _TBD_
- **Open questions:** _TBD_

---

## 1. Problem & goals

_To be written after §0._

### Problem

_TBD_

### Goals

_TBD_

### Non-goals (MVP)

_TBD_

---

## 2. Personas & scope

_To be written after §0._

---

## 3. As-is vs To-be

_To be written after §0._

---

## 4. Functional requirements

_To be written after §0._ Wireframe screen IDs in §7 are **layout placeholders** for discussion, not finalized IA.

---

## 5. Non-functional

_TBD_

---

## 6. Metrics & analytics

_TBD_

---

## 7. Wireframe inventory (app registry)

These routes exist in the app so `/wireframe` can list screens and the shell viewer can load iframes. **Copy and annotations are placeholders** until §0 is filled.

| Screen ID | Route | Notes |
| --- | --- | --- |
| `ti-hub` | `/ticket-intake` | Hub links only |
| `ti-submit` | `/ticket-intake/submit` | Form regions TBD |
| `ti-triage` | `/ticket-intake/triage` | List regions TBD |
| `ti-handoff` | `/ticket-intake/handoff` | Detail regions TBD |

**Figma**

- **Flow chart:** Not attached to this doc. Create or link a FigJam / design file **after** §0 is agreed (or discard any exploratory diagram not reviewed by your team).
- **Wireframe HTML-to-Figma:** When ready, follow `my-next-app/.cursor/skills/figma-push/SKILL.md` and then set `figmaFileKey` / `figmaNodeId` / `lastCaptured` on each `Screen` in `src/lib/screens.ts`.

---

## 8. Open decisions

_List here only what is still unresolved after §0._

---

## 9. References

- Route skill: `my-next-app/.cursor/skills/route/SKILL.md`
- Figma push SOP: `my-next-app/.cursor/skills/figma-push/SKILL.md`
- Screen registry: `my-next-app/src/lib/screens.ts`
