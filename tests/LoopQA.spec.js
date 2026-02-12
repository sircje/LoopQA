import { test } from "@playwright/test";
import { login } from "./resources/auth";
import {
  navigateToProject,
  verifyTaskInColumn,
  verifyTags,
} from "./resources/actions";
import testCases from "./cases/testCases.json";

test.describe("LoopQA Technical Evaluation", () => {
  for (const tc of testCases) {
    test(tc.name, async ({ page }) => {
      await login(page);
      await navigateToProject(page, tc.project);
      await verifyTaskInColumn(page, tc.column, tc.task);
      await verifyTags(page, tc.tags);
    });
  }
});
