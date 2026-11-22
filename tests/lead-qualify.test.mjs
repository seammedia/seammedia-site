// Run with `npm test` (Node's built-in runner; lib/lead-qualify.ts has no imports, so Node loads it with type stripping).
import { test } from "node:test";
import assert from "node:assert/strict";
import { BUDGETS, INDUSTRIES, OFFER_BUDGETS, REVIEW_OPTIONS, HIGH_BUDGET, isHighBudget, isOfferQualified, isQualifiedBudget } from "../lib/lead-qualify.ts";

const [noProfile, under10, tenPlus] = REVIEW_OPTIONS;

test("the top budget band is $2,500+ a month on both forms", () => {
  assert.equal(HIGH_BUDGET, "$2,500+ a month");
  assert.ok(OFFER_BUDGETS.includes(HIGH_BUDGET));
  assert.ok(isHighBudget("$2,500+ a month"));
  assert.ok(!isHighBudget("$1,000 to $2,500 a month"));
  assert.ok(!isHighBudget(undefined));
});

test("website offer: $2,500+ a month qualifies whatever the reviews or industry", () => {
  for (const reviews of [...REVIEW_OPTIONS, undefined]) {
    for (const industry of [...INDUSTRIES, undefined]) {
      assert.equal(isOfferQualified({ budget: HIGH_BUDGET, reviews, industry }), true, `${reviews} / ${industry}`);
    }
  }
});

test("website offer: every other band is unchanged (10+ reviews, not e-commerce, $250+)", () => {
  const otherBands = OFFER_BUDGETS.filter((b) => b !== HIGH_BUDGET);
  for (const budget of otherBands) {
    const paying = isQualifiedBudget(budget);
    assert.equal(isOfferQualified({ budget, reviews: tenPlus, industry: "Trades and home services" }), paying, budget);
    assert.equal(isOfferQualified({ budget, reviews: tenPlus, industry: "Ecommerce and retail" }), false, budget);
    assert.equal(isOfferQualified({ budget, reviews: under10, industry: "Trades and home services" }), false, budget);
    assert.equal(isOfferQualified({ budget, reviews: noProfile, industry: "NDIS and allied health" }), false, budget);
  }
  assert.equal(isOfferQualified({ budget: "$1,000 to $2,500 a month", reviews: tenPlus, industry: "Dental and medical" }), true);
  assert.equal(isOfferQualified({ budget: "Just looking for now", reviews: tenPlus, industry: "Dental and medical" }), false);
});

test("guide forms: budget rule unchanged", () => {
  assert.deepEqual(BUDGETS.map(isQualifiedBudget), [false, false, true, true, true, true]);
  assert.equal(isQualifiedBudget(OFFER_BUDGETS[0]), false);
  assert.equal(isQualifiedBudget(""), false);
});
