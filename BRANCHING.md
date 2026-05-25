# Branching Strategy — ameyrupji.com

> **Audience:** Lead Engineer, QA Engineer, and all technical staff working with the CTO.  
> **Status:** Authoritative. Do not deviate without explicit board approval.

---

## Overview

This project uses a trunk-based release model with **`develop` as the default and integration branch** and **`master` as the production branch**. Each branch tier maps directly to a deployment environment.

---

## Branch Tiers

### 1. Feature Branches

| Property | Value |
|---|---|
| **Naming** | `feature/GH-{issue-number}-{short-description}` |
| **Cut from** | `develop` |
| **Merges into** | `develop` |
| **Auto-deploy URL** | `https://beta.ameyrupji.com/{branch-name}/index.html` |

**Purpose:** Isolate work on a single GitHub issue. Each push to a feature branch deploys automatically to a per-branch preview URL for in-flight validation.

**Example:**  
Branch `feature/GH-139-can-section` → deploys to `https://beta.ameyrupji.com/feature/GH-139-can-section/index.html`

**Rules:**
- Always cut from the tip of `develop`, never from `master` or another feature branch.
- Keep branches short-lived. Merge back to `develop` as soon as the feature is validated on the preview URL.
- Dependabot PRs must target `develop`.

---

### 2. `develop` (Default Branch — Staging)

| Property | Value |
|---|---|
| **Branch** | `develop` |
| **Auto-deploy URL** | `https://beta.ameyrupji.com` |

**Purpose:** Stable integration environment. When a feature PR is merged here, the result deploys to the staging URL for broader QA sign-off before a release is cut.

**Rules:**
- This is the **GitHub default branch** — do not change it.
- Never push directly; all changes arrive via PR from a feature branch.
- All PR base targets must point to `develop`, not `main` or `master`.

---

### 3. Release Branches

| Property | Value |
|---|---|
| **Naming** | `release/v{major}-{minor}-{patch}` (e.g. `release/v2-3-0`) |
| **Cut from** | `develop` |
| **Merges into** | `master` (via PR) |
| **Auto-deploy URL** | `https://ameyrupji.com/release/{version}/index.html` |

**Purpose:** Stabilise a set of features before shipping to production. After cutting the branch, bump the version number, commit, and verify the release preview URL before opening the PR to `master`.

**Example:**  
Branch `release/v2-3-0` → deploys to `https://ameyrupji.com/release/v2-3-0/index.html`

**Rules:**
- Only bug fixes and version-bump commits belong on a release branch — no new features.
- The release PR targets `master`, not `develop`.
- QA must sign off on the release preview URL before the PR is merged.

---

### 4. `master` (Production)

| Property | Value |
|---|---|
| **Branch** | `master` |
| **Deploy trigger** | CircleCI build on merge — **requires manual approval gate** |
| **Production URL** | `https://ameyrupji.com` |

**Purpose:** Production. A merge into `master` triggers the CircleCI pipeline. The pipeline requires explicit human approval before pushing to AWS.

**Rules:**
- `master` is write-protected. Changes arrive only via release branch PRs.
- Never merge feature branches directly into `master`.
- The CircleCI manual approval step must be completed by the CTO or a designated release manager.

---

## Workflow Summary

```
feature/GH-{n}-{name}  →  PR  →  develop  →  PR  →  release/v{x}-{y}-{z}  →  PR  →  master
        ↓                              ↓                          ↓                         ↓
beta.ameyrupji.com/               beta.ameyrupji.com      ameyrupji.com/release/      ameyrupji.com
{branch-name}/index.html                                  {version}/index.html       (after approval)
```

---

## PR Merge Target Quick Reference

| Work type | PR base target |
|---|---|
| Feature development | `develop` |
| Dependabot updates | `develop` |
| Release stabilisation / version bump | `release/v{x}-{y}-{z}` (internal commits) |
| Shipping a release to production | `master` |

**Never** set a PR base to `main` — that branch does not exist in this repo.

---

## Rationale

The board intentionally keeps `develop` as the default branch. The branch hierarchy mirrors the deployment pipeline: feature → staging → release preview → production. This allows the team to validate changes at each tier before they reach users.

> Reference: Board decision on [ARC-18](/ARC/issues/ARC-18) (2026-05-25). The switch to `main` as default was explicitly declined.
