---
name: product-strategist
description: >-
  Provides Head-of-Product-style strategic workflows: OKR cascades (company → product → team),
  market and competitive framing, vision/strategy prompts, org scaling patterns, and KPI/metrics
  definitions. Use when the user asks for OKRs, quarterly planning, product vision, competitive
  analysis, roadmap narrative, team structure, or strategy alignment; or when the agent role
  `md-product-strategist` is relevant.
---

# Product Strategist

Strategic toolkit for product leadership: alignment, prioritization, and clear narratives. Assume the agent already knows general product management; add only domain-specific structure and outputs this skill defines.

## When to apply

- Quarterly or annual planning, OKR drafting, or goal cascade
- Vision, strategy one-pagers, or stakeholder-ready summaries
- Competitive landscape, differentiation, or positioning
- Org design at a high level (roles, layers, scaling concerns)
- Metric trees: north-star, input/output KPIs

## Instructions

1. **Clarify scope** — horizon (quarter/year), audience (exec, board, team), and constraints (revenue stage, headcount).
2. **Pick outputs** — match deliverables to the ask (e.g. OKR cascade vs. competitive matrix vs. vision doc); avoid bundling everything unless requested.
3. **Be explicit about assumptions** — label guesses vs. facts; suggest what data would validate each assumption.
4. **Prefer actionable structure** — tables, numbered initiatives, and clear owners/risk callouts over long prose.

## OKR cascade (script)

Company → product → team OKR generation and alignment scoring use the script next to this skill (stdlib only; Python 3).

**With workspace root = this repository** (`joshgittest`; this skill lives at `.cursor/skills/product-strategist/`):

```bash
python .cursor/skills/product-strategist/scripts/okr_cascade_generator.py [strategy]
python .cursor/skills/product-strategist/scripts/okr_cascade_generator.py [strategy] json
```

**From this skill directory** (after `cd` into it):

```bash
python scripts/okr_cascade_generator.py [strategy]
python scripts/okr_cascade_generator.py [strategy] json
```

**Strategies:** `growth` | `retention` | `revenue` | `innovation` | `operational` (default: `growth` if omitted).

**Second argument `json`:** prints the full cascade as JSON after the dashboard.

The script prints a text dashboard, alignment scores, and optional JSON. Execute when the user wants generated OKR scaffolding or alignment numbers; otherwise produce OKRs directly in markdown without running it.

## Manual deliverable patterns (no script)

Use when the user wants tailored OKRs or narrative without running Python:

- **OKR table:** Objective | Key results | Owner | Confidence | Leading indicator
- **Strategy one-pager:** Context → Bet → What we ship → Metrics → Risks
- **Competitive snapshot:** Player | Positioning | Strength | Gap | Implication for us

## Placement (Cursor)

- In this repo, skill and script live at `.cursor/skills/product-strategist/` (`SKILL.md` + `scripts/`) — **open the repository root** as the Cursor workspace so the agent loads them.
- **User-wide skill:** copy that folder to `~/.cursor/skills/product-strategist/` if you want it in every project.
- Do not place custom skills under `~/.cursor/skills-cursor/` (reserved for Cursor).

## Core capabilities (reference)

| Area | Examples |
|------|----------|
| OKRs | Cascade, alignment language, KR quality checks |
| Market / competition | Positioning, moat, scenario framing |
| Vision / strategy | Narrative arc, bets, non-goals |
| Org scaling | IC/lead ratios, squad topology at a high level |
| Metrics | North star, funnel, guardrails |

Keep `SKILL.md` as the entrypoint; split long reference material into separate files only if this file grows beyond a concise cheat sheet.
