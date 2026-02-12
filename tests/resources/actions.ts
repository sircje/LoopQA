import { expect, Page } from "@playwright/test";

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
    const taskCard = page.locator(`h3:has-text("${task}")`).first().locator('..');
    for (const tag of tags) {
        await expect(taskCard).toContainText(tag);
    }
}
