# Main Logo Update & Mobile Optimization Plan

## Objective
Update the main logo in the `NavBar.tsx` component to be styled as a "round" logo rather than square, and ensure that the logo remains mobile-friendly across different breakpoints.

## Proposed Changes

### [Phase 1] Analysis & Solutions
- **Logo Style**: We will apply `borderRadius: "50%"` and `overflow: "hidden"` to the main logo's wrapper in the `NavBar` component. We may need to adjust the width and height to be equal (e.g., `width: "48px", height: "48px"`) if the logo is currently using a wide rectangular container.
- **Mobile Responsiveness**: We will use responsive measurements (like `clamp()` or media queries) for the logo dimensions so it scales appropriately on smaller screens without breaking the navbar.

### [Phase 2] Implementation 

---

#### [Component] `frontend-specialist`
##### [MODIFY] [NavBar.tsx](file:///c:/Users/nandu/Desktop/DEMO%20LANDING/echelon-site/src/components/NavBar.tsx)
- Update the `<motion.div>` wrapping the `<Image>` tag for `/logo-light.png`.
- Change its dimensions from a fixed rectangle (`160px x 40px`) to a responsive circular box (e.g., `clamp(40px, 8vw, 56px)` for both width and height).
- Add `borderRadius: "50%"` and `overflow: "hidden"`.
- Adjust `objectFit` on the `Image` component to `"cover"` or `"contain"` so the logo fits nicely inside the circle.

---

#### [Verification] `test-engineer`
- **Visual Audit**: Verify the main logo is perfectly round and scales properly on mobile view (375x812) versus desktop.
- **Run Scripts**:
  - `python .agent/skills/lint-and-validate/scripts/lint_runner.py echelon-site/src/components/NavBar.tsx`
  - `python .agent/skills/vulnerability-scanner/scripts/security_scan.py .`

## Approval
Please reply with **"Y"** to approve this plan.
