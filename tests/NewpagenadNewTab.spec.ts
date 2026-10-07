import {test, expect} from '@playwright/test';

test("New page and New tab", async ({page, context}) => {
const newPage = await context.newPage();
await page.goto("https://www.playwrightautomation.com/practice.html");
await expect(page.locator(".pw-brand-logo")).toBeVisible();
const newpage=context.waitForEvent('page');
await page.locator("#btn-open-pw-tab").click();
const newpagepromise=await newpage;
await expect(newpagepromise.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();

console.log("New tab is opened successfully");
});








 