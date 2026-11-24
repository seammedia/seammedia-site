import { test } from "node:test";
import assert from "node:assert/strict";
import { JOBS, JOB_BUDGETS, JOB_IDS, JOB_TIMINGS, isJobQualified, jobFromParam, readQuickJobFields } from "../lib/quick-jobs.ts";

test("qualified: every budget except Under $300, and Not sure counts", () => {
  assert.deepEqual(JOB_BUDGETS.map(isJobQualified), [false, true, true, true, true, true]);
  assert.equal(isJobQualified("Not sure"), true);
  assert.equal(isJobQualified("Under $300"), false);
  for (const b of ["", undefined, "$99"]) assert.equal(isJobQualified(b), false);
});

test("qualified doesn't depend on the job or timing", () => {
  for (const job of JOB_IDS) for (const timing of JOB_TIMINGS) for (const budget of JOB_BUDGETS) {
    const v = { job, timing, budget, details: "Fix my site" };
    assert.equal(readQuickJobFields((k) => v[k] ?? "").qualified, budget === "Under $300" ? "no" : "yes");
  }
});

test("prices", () => {
  assert.deepEqual(JOBS.map((j) => [j.id, j.from]), [["website", "$1,490"], ["shopify", "$1,490"], ["crm", "$690"], ["small", "$290"]]);
});

test("?job= picks one of the four jobs only", () => {
  for (const j of ["website", "shopify", "crm", "small"]) assert.equal(jobFromParam(j), j);
  assert.equal(jobFromParam(["crm", "small"]), "crm");
  for (const j of ["other", "constructor", "", undefined]) assert.equal(jobFromParam(j), "");
});

test("each required field is checked", () => {
  const ok = { job: "crm", budget: "Not sure", timing: "No rush", details: "Tidy it up" };
  assert.equal(readQuickJobFields((k) => ok[k] ?? "").website, "");
  for (const k of Object.keys(ok)) assert.ok("error" in readQuickJobFields((key) => (key === k ? "" : ok[key] ?? "")), k);
});
