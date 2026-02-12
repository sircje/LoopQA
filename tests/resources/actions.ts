import { expect, Page } from "@playwright/test";
import { test } from "@playwright/test";

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log("Test failed — pausing for inspection");
        await new Promise(() => {}); // never resolves
    }
});

export async function navigateToProject(page: Page, project: string) {
    await page.click(`text=${project}`);
}

export async function verifyTaskInColumn(
    page: Page,
    column: string,
    task: string
) {
    const columnLocator = page.locator(`h2:has-text("${column}")`).locator("..");
    await expect(columnLocator).toContainText(task);
}

export async function verifyTags(
    page: Page,
    task: string,
    tags: string[]
) {
    for (const tag of tags) {
        const tagElement = page.locator(`span:has-text("${tag}")`).first();
        await expect(tagElement).toContainText(tag);
    }
}
