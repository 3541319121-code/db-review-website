---
version: alpha
name: Pintia-Design-Analysis
description: An inspired interpretation of Pintia (PTA)'s design language — a Chinese programming education platform whose surface is built on a trustworthy institutional blue, clean white cards on soft gray canvas, and a highly structured sidebar-plus-main-content layout for learning management surfaces.

colors:
  primary: "#1a73e8"
  on-primary: "#ffffff"
  primary-hover: "#1557b0"
  ink: "#1e293b"
  body: "#4b5563"
  mute: "#9ca3af"
  hairline: "#e5e7eb"
  hairline-strong: "#d1d5db"
  canvas: "#ffffff"
  canvas-soft: "#f8f9fa"
  canvas-soft-2: "#f1f3f4"
  sidebar-bg: "#ffffff"
  sidebar-active: "#e8f0fe"
  sidebar-active-text: "#1a73e8"
  success: "#34a853"
  success-soft: "#e6f4ea"
  error: "#ea4335"
  error-soft: "#fce8e6"
  warning: "#fbbc04"
  warning-soft: "#fef3e8"
  link: "#1a73e8"
  link-deep: "#1557b0"
  table-header-bg: "#f8f9fa"
  table-hover: "#f8f9fa"
  tag-bg: "#e8f0fe"
  tag-text: "#1a73e8"

typography:
  display-xl:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.3px
  display-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0px
  display-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  body-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  body-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  button-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: 0px
  button-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px

components:
  nav-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    height: 56px
    padding: "0 {spacing.lg}"
  nav-link:
    textColor: "rgba(255,255,255,0.9)"
    hoverTextColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-logo:
    textColor: "{colors.on-primary}"
    typography: "{typography.display-sm}"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.on-primary}"
    borderColor: "rgba(255,255,255,0.5)"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  sidebar:
    backgroundColor: "{colors.sidebar-bg}"
    width: 240px
    borderRight: "1px solid {colors.hairline}"
  sidebar-item:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm} {spacing.md}"
    rounded: "0px"
  sidebar-item-active:
    backgroundColor: "{colors.sidebar-active}"
    textColor: "{colors.sidebar-active-text}"
    typography: "{typography.body-md}"
    leftBorder: "3px solid {colors.primary}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  table:
    headerBackground: "{colors.table-header-bg}"
    headerTypography: "{typography.body-sm}"
    headerTextColor: "{colors.body}"
    bodyTypography: "{typography.body-md}"
    rowHover: "{colors.table-hover}"
    borderColor: "{colors.hairline}"
  tag:
    backgroundColor: "{colors.tag-bg}"
    textColor: "{colors.tag-text}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "2px {spacing.xs}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
    height: 40px
  page-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.lg} {spacing.xl}"
    borderBottom: "1px solid {colors.hairline}"
  login-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    shadow: "0 4px 20px rgba(0,0,0,0.08)"

---

## Overview

Pintia (PTA) is a Chinese programming education platform. Its design language prioritizes clarity, trust, and academic seriousness. The surface is built on a trustworthy institutional blue (`{colors.primary}` `#1a73e8`) that dominates the top navigation bar, paired with clean white cards on a very soft gray canvas (`{colors.canvas-soft}` `#f8f9fa`).

The platform's most distinctive structural feature is its **sidebar-plus-main-content layout** for learning management surfaces. A fixed left sidebar (240px) provides persistent chapter/section navigation, while the main content area hosts tables, cards, and forms. This creates a dashboard-like learning environment that keeps students oriented.

**Key Characteristics:**
- A single dominant institutional blue (`#1a73e8`) carries the entire brand — navigation bar, active sidebar states, primary buttons, links, and tags.
- Clean white cards with subtle 1px hairline borders on a near-white gray background — no heavy shadows, minimal elevation.
- Structured table-heavy surfaces for problem lists, with hover-highlight rows and compact density.
- Left-edge indicator bars (3px solid blue) for active sidebar navigation items — a subtle, efficient way to show location.
- Pill-shaped tags in soft blue tints for categorization (difficulty, chapter, status).
- Login/signup pages use a centered card pattern on a light gray background, often with a split layout showing brand illustration on the left.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — `#1a73e8`): The institutional blue. Used for the top navigation bar background, primary buttons, active sidebar indicators, links, and tag backgrounds. Conveys trust and academic authority.
- **Primary Hover** (`{colors.primary-hover}` — `#1557b0`): The pressed/deeper state for primary interactions.
- **Success** (`{colors.success}` — `#34a853`): Green for correct answers, success states, passed statuses.
- **Error** (`{colors.error}` — `#ea4335`): Red for wrong answers, errors, failed statuses.
- **Warning** (`{colors.warning}` — `#fbbc04`): Amber/yellow for pending, in-progress, or medium-difficulty indicators.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white for cards, modals, dropdowns, and sidebar backgrounds.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f8f9fa`): The default page background — a very light warm gray. Almost imperceptible but separates white cards from the page.
- **Canvas Soft 2** (`{colors.canvas-soft-2}` — `#f1f3f4`): Slightly deeper inset surface for table header backgrounds and alternate row stripes.
- **Sidebar Active** (`{colors.sidebar-active}` — `#e8f0fe`): Very light blue tint for the active sidebar item background.
- **Hairline** (`{colors.hairline}` — `#e5e7eb`): 1px borders for cards, tables, dividers.
- **Hairline Strong** (`{colors.hairline-strong}` — `#d1d5db`): Input borders and stronger dividers.

### Text
- **Ink** (`{colors.ink}` — `#1e293b`): Deep slate for headings and primary text on light surfaces.
- **Body** (`{colors.body}` — `#4b5563`): Secondary text — descriptions, metadata, inactive nav links.
- **Mute** (`{colors.mute}` — `#9ca3af`): Tertiary text — timestamps, fine print, placeholders.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text on the blue navigation bar.

### Semantic
- **Link** (`{colors.link}` — `#1a73e8`): Inline links, matching the primary blue.
- **Link Deep** (`{colors.link-deep}` — `#1557b0`): Hover/visited link state.
- **Tag Bg** (`{colors.tag-bg}` — `#e8f0fe`): Soft blue background for category/difficulty pills.
- **Tag Text** (`{colors.tag-text}` — `#1a73e8`): Blue text inside tag pills.

## Typography

### Font Family
A single system sans-serif stack carries the entire Chinese/English bilingual interface:
`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif`

Weights used: 400 (body), 500 (buttons, emphasis), 600 (headings, sidebar active items).

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 32px | 600 | 40px | Page titles in main content area. |
| `{typography.display-lg}` | 24px | 600 | 32px | Section headings, card titles. |
| `{typography.display-md}` | 20px | 600 | 28px | Sub-section headings. |
| `{typography.display-sm}` | 16px | 600 | 24px | Nav logo text, table column headers, sidebar active item. |
| `{typography.body-lg}` | 16px | 400 | 24px | Lead paragraphs, form labels. |
| `{typography.body-md}` | 14px | 400 | 22px | Default body text, table cells, sidebar items. |
| `{typography.body-sm}` | 13px | 400 | 20px | Secondary body, metadata, table headers. |
| `{typography.caption}` | 12px | 400 | 16px | Timestamps, fine print, tag labels. |
| `{typography.button-md}` | 14px | 500 | 22px | Primary and secondary button labels. |
| `{typography.button-sm}` | 13px | 500 | 20px | Small nav buttons, icon buttons. |

### Principles
- **No aggressive negative tracking.** Chinese text requires breathing room; letter-spacing stays at 0px for body, -0.5px max for large display.
- **Weight 600 is the display ceiling.** Headings and active states use 600; never heavier.
- **Consistent 14px body density.** The platform is information-dense; 14px is the comfortable reading size for tables and lists.

## Layout

### Spacing System
- **Base unit**: 4 px.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 48px · `{spacing.3xl}` 64px.
- **Section padding**: Content sections use `{spacing.lg}` to `{spacing.xl}` padding.
- **Card interior padding**: `{spacing.md}` to `{spacing.lg}`.
- **Inline gap**: `{spacing.xs}` to `{spacing.sm}` between sibling buttons, tags, or form fields.

### Grid & Container
- **Main content max width**: fluid within the remaining viewport after the 240px sidebar.
- **Page padding**: `{spacing.lg}` 24px horizontal gutters on desktop, `{spacing.md}` 16px on mobile.
- **Two-column dashboard layout**: 240px fixed sidebar + fluid main content area.

### Whitespace Philosophy
The platform is function-first and information-dense. Whitespace is moderate — enough to separate distinct sections, but tables and lists are compact to maximize information density. Cards sit flush with subtle 1px borders rather than floating on heavy shadows.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Sidebar collapses to hamburger or bottom tab bar; tables enable horizontal scroll; cards stack vertically. |
| Tablet | 768–1024px | Sidebar may collapse to icon-only or overlay; content adjusts. |
| Desktop | ≥ 1024px | Full 240px sidebar visible; tables expand; multi-column layouts active. |

#### Touch Targets
Buttons and sidebar items meet 44×44px minimum. Table rows are ~48px tall for comfortable tapping.

#### Collapsing Strategy
- **Nav**: Blue bar stays fixed at top. On mobile, links collapse to hamburger menu.
- **Sidebar**: On mobile, transforms to a top tab bar or collapsible drawer. Active state indicator moves to underline or background tint.
- **Tables**: Enable horizontal scroll on mobile; freeze first column if needed.
- **Cards**: Stack vertically on mobile, 2-up on tablet, 3-up+ on desktop.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, 1px hairline border. | Default card chrome, table containers, sidebar. |
| Level 1 — Subtle | `0 1px 3px rgba(0,0,0,0.04)` | Slightly elevated cards, dropdown menus. |
| Level 2 — Card | `0 4px 12px rgba(0,0,0,0.06)` | Modal/dialog surfaces, login card. |
| Level 3 — Float | `0 8px 24px rgba(0,0,0,0.08)` | Toast notifications, popover menus. |

The platform avoids heavy shadows. Depth is communicated more through surface color changes (white card on gray background) than through elevation.

### Decorative Depth
- **Sidebar active indicator**: A 3px solid primary-blue left border on the active item — the platform's primary navigation depth cue.
- **Table row hover**: A background tint (`{colors.table-hover}`) on hover — subtle interaction feedback.
- **Tag pills**: Soft blue tint backgrounds create micro-depth for categorization.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Sidebar items, table cells, full-bleed sections. |
| `{rounded.xs}` | 4px | Tags, small inline pills, compact buttons. |
| `{rounded.sm}` | 6px | Primary/secondary buttons, form inputs, small cards. |
| `{rounded.md}` | 8px | Standard cards, dropdown menus, alerts. |
| `{rounded.lg}` | 12px | Large cards, modals, login containers. |
| `{rounded.xl}` | 16px | Hero cards, marketing surfaces. |
| `{rounded.full}` | 9999px | Avatar circles, status dots. |

### Component Geometry
- **Sidebar**: 240px wide, full-height, white background, 1px right border.
- **Table rows**: ~48px height, 1px bottom border, no vertical padding extremes.
- **Cards**: 1px solid hairline border, 8px radius, white fill.
- **Tags**: 4px radius, compact inline pills.

## Components

### Buttons

**`button-primary`** — the canonical blue action button.
- Background `{colors.primary}`, text `{colors.on-primary}`, label set in `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.sm}` 6px.

**`button-secondary`** — the outlined/button-white alternative.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, same typography/padding as primary, shape `{rounded.sm}`.

### Cards & Containers

**`card`** — the default content container.
- Background `{colors.canvas}`, 1px solid `{colors.hairline}` border, text `{colors.ink}`, padding `{spacing.md}` to `{spacing.lg}`, shape `{rounded.md}` 8px. No shadow by default.

**`login-card`** — the centered authentication surface.
- Background `{colors.canvas}`, shape `{rounded.lg}` 12px, padding `{spacing.xl}`, Level 2 shadow (`0 4px 20px rgba(0,0,0,0.08)`).

**`page-header`** — the top bar inside main content.
- Background `{colors.canvas}`, bottom border 1px `{colors.hairline}`, padding `{spacing.lg} {spacing.xl}`, contains page title in `{typography.display-lg}`.

### Navigation

**`nav-bar`** — the sticky top navigation bar.
- Background `{colors.primary}`, text `{colors.on-primary}`, height 56px, padding `0 {spacing.lg}`. Layout: logo left, primary link row center-left, user actions right.

**`nav-link`** — links inside the blue nav bar.
- Text `rgba(255,255,255,0.9)`, hover `{colors.on-primary}`, typography `{typography.body-md}`, padding `{spacing.xs} {spacing.sm}`.

**`nav-cta`** — login/signup button in the nav bar.
- Transparent background, white text, 1px `rgba(255,255,255,0.5)` border, typography `{typography.button-sm}`, shape `{rounded.sm}`.

**`sidebar`** — the left navigation panel.
- Background `{colors.canvas}`, width 240px, 1px right border `{colors.hairline}`, full viewport height below nav.

**`sidebar-item`** — individual navigation link in sidebar.
- Text `{colors.body}`, typography `{typography.body-md}`, padding `{spacing.sm} {spacing.md}`, no border-radius, full width.

**`sidebar-item-active`** — the currently active sidebar item.
- Background `{colors.sidebar-active}`, text `{colors.sidebar-active-text}`, 3px solid `{colors.primary}` left border indicator.

### Inputs & Forms

**`form-input`** — canonical text input.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, typography `{typography.body-md}`, padding `{spacing.xs} {spacing.sm}`, height 40px, shape `{rounded.sm}` 6px.

### Tables

**`table`** — data-dense problem/exam lists.
- Header background `{colors.table-header-bg}`, header text `{colors.body}` in `{typography.body-sm}`, body text `{colors.ink}` in `{typography.body-md}`, row hover `{colors.table-hover}`, cell borders 1px `{colors.hairline}`, row height ~48px.

### Tags

**`tag`** — category/difficulty/status pill.
- Background `{colors.tag-bg}`, text `{colors.tag-text}`, typography `{typography.caption}`, padding `2px {spacing.xs}`, shape `{rounded.xs}` 4px.

### Signature Components

**`sidebar-layout`** — the defining two-column learning surface.
- Full viewport height. Fixed 240px white sidebar on the left with vertical nav items. Fluid main content area on the right with `{spacing.lg}` padding. Sidebar items show active state via left blue border indicator.

**`problem-table-row`** — a row in the problem list.
- ~48px tall, columns for status icon, problem ID, title, tags (difficulty, chapter), score. Hover reveals subtle background tint. Click navigates to problem detail.

**`dashboard-stat-card`** — statistics cards on home/dashboard.
- White card with 8px radius, 1px hairline border, top icon or number in `{typography.display-lg}`, bottom label in `{typography.body-sm}` `{colors.body}`.

## Do's and Don'ts

### Do
- Use `{colors.primary}` blue as the single dominant brand color across nav, buttons, active states, and links.
- Keep the sidebar at exactly 240px wide on desktop with the 3px left-border active indicator.
- Use white cards with 1px hairline borders on the `{colors.canvas-soft}` gray background — this is the platform's default surface rhythm.
- Keep table density high with ~48px row heights for information-heavy learning surfaces.
- Use `{colors.tag-bg}` / `{colors.tag-text}` blue-tint pills for categorization (difficulty, chapter, status).
- Reserve weight 600 for headings and active navigation; use 500 for buttons, 400 for body.

### Don't
- Don't introduce additional accent colors beyond the institutional blue + semantic green/red/amber. The platform's voice is clean and unified.
- Don't use heavy drop shadows on cards. Rely on the 1px hairline border and white-on-gray contrast.
- Don't make the sidebar wider than 240px or add rounded corners to sidebar items — they should be flush rectangles.
- Don't use aggressive letter-spacing on Chinese text — keep it at 0px for readability.
- Don't render navigation in all-caps. Sentence-case Chinese navigation is the standard.
