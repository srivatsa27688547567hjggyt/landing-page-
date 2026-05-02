# Founders Photos Update Plan

## Objective
Update the founders' photos in the `echelon-site/src/components/Founders.tsx` component following the `@[/orchestrate]` workflow rules.

## Phase 1 Findings
The founders' data is located in `echelon-site/src/components/Founders.tsx`. Current images used:
1. Elena Ristavaara: `/pdf-assets/page4_img1.jpeg`
2. Sophio Meshvildishvili: `/pdf-assets/page5_img1.jpeg`

## Proposed Changes (Phase 2)

### `frontend-specialist`
- **Modify** `echelon-site/src/components/Founders.tsx`:
  - Update `image` paths in the `founders` array to point to the newly provided photos.

### Data Preparation
- **Action Required by User**: Since I cannot save images attached to our chat directly to the local disk, please save the two new founder photos into the `echelon-site/public/pdf-assets/` directory.

### `test-engineer` & Verification
- Check the layout rendering consistency with the new images.
- Run `python .agent/scripts/checklist.py .` to ensure lint, security, and UI checks pass.
- Execute security scan: `python .agent/skills/vulnerability-scanner/scripts/security_scan.py .`

## Approval
Please reply with `Y` to approve this plan, and let me know the file names you saved the photos as (or if you simply overwrote the existing `page4_img1.jpeg` and `page5_img1.jpeg`).
