import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/u/0/&emr=1&followup=https://mail.google.com/mail/u/0/&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1992611951:1789712050848173');
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('mohanraju');
  await page.getByRole('textbox', { name: 'Email or phone' }).press('ScrollLock');
  await page.getByRole('textbox', { name: 'Email or phone' }).press('ScrollLock');
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('mohanraju8304@gmail.com');
  await page.getByRole('textbox', { name: 'Email or phone' }).press('Tab');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Try again' }).click();
  
});