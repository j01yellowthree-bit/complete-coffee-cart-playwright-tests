# Coffee Cart — Playwright Automated E2E Tests ☕

This repository contains an Automated End-to-End (E2E) Test Suite for the [Coffee Cart](https://coffee-cart.app/) web application. Built with **Playwright** and **JavaScript**, this suite covers core e-commerce interactions including cart management, price calculations, and promo offer flows.

---

## 🛠 Tech Stack

- **Framework:** Playwright
- **Language:** JavaScript (Node.js)
- **Design Pattern:** Functional Automation Specs using reliable, accessible locators (`getByRole`, `getByText`, `aria-label`, custom filtering).

---

## 📋 Test Coverage

1. **Cart Updating & Calculations (`cartUpdatedAfterClickingPlusButton.spec.js`):**
   - Verifies item addition and navigation to `/cart`.
   - Validates quantity increments (`+` button) and ensures individual total costs and final cart total update correctly.

2. **Promo Offer Accept (`mochaAddedToCartOnPromoAccept.spec.js`):**
   - Triggers the promo pop-up by selecting 3 items.
   - Accepts the promotional offer (_"Yes, of course!"_) and verifies discounted items are added to the cart with correct pricing ($4.00).

3. **Promo Offer Reject (`mochaNotAddedToCartOnPromoDecline.spec.js`):**
   - Triggers the promo pop-up and declines the offer (_"Nah, I'll skip."_).
   - Asserts the discounted Mocha is not added, keeping only requested items in the cart.

4. **Cart Clearing (`cartCleanedAfterPageRefresh.spec.js`):**
   - Ensures cart state/persistence behaviors function as intended upon page reload.

---

## 🚀 How to Run Tests Locally

### 1. Clone the repository

```bash
git clone [https://github.com/j01yellowthree-bit/complete-coffee-cart-playwright-tests.git](https://github.com/j01yellowthree-bit/complete-coffee-cart-playwright-tests.git)
cd complete-coffee-cart-playwright-tests
```
