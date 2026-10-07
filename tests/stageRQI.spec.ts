import { test, expect } from '@playwright/test';

// test.describe('Stage RQI', () => {

// Login test

test('stagelogin', async ({ page }) => {
  await page.goto("https://stg-rqi1stop.laerdalblr.in/admin");
  // await page.locator("input[name='email']").fill("cdp-superadmin@laerdal.com");
  await page.locator("input[name='email']").pressSequentially("cdp-superadmin@laerdal.com");
  //  await page.locator("input[name='email']").press("Enter");
  await page.locator("input[name='password']").fill("Test@123");
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeEnabled();
  await page.getByRole('button', { name: 'Sign In' }).press("Enter");
  // await page.getByRole('button', { name: 'Sign In' }).click();

  console.log(
    await page.getByRole('link', { name: 'Super Administrator' }).textContent());

  await page.getByRole('link', { name: 'Super Administrator' }).click();
  console.log("Logged in successfully as Super Administrator role");
  await page.getByRole('link', { name: ' Organizations' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Organization Name' }).fill("mohan");
  await page.waitForTimeout(5000);
  await page.getByRole('combobox', { name: 'Select Org Type' }).locator('b').click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Customer Training Center' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(5000);
  console.log("I have successfully searched the org with name mohan");
});

//JavaScript event handling ( handling click event on hidden button )
//await page.getByRole('button', { name: 'Submit' }).dispatchEvent('click');


// await expect(page.getByRole('link',{ name: 'Super Administrator' })).toHaveCount(1);
// await expect(page.getByRole('link',{ name: ' Organizations' })).toBeVisible();


// Grouping concepts
//test.describe('Stage RQI', async() => { }
// test.skip()  → Don't run it
// test.fixme() → Don't run it; it's broken and needs fixing
// test.fail()  → Run it; failure is expected
//test.fail((browserName) => browserName === 'webkit', 'Known issue in WebKit');
//test.only()  → Run only this test
//test.timeout() → Set a custom timeout for this test
//test.slow() → Mark this test as slow, which will increase the timeout for this test


//Hooks concepts
//test.beforeEach() → Run a function before each test in this file
//test.beforeAll() → Run a function before all tests in this file
//test.afterEach() → Run a function after each test in this file
//test.afterAll() → Run a function after all tests in this file
//test.afterEach(async ({ page }, testInfo) => {

// test.describe('First 5 cases are grouped', async() => {


//Javascript Alerts
// Alert: page.on('dialog', dialog => dialog.accept());
// Confirm: page.on('dialog', dialog => dialog.accept());
// Prompt: page.on('dialog', dialog => dialog.accept('My input'));

// test('Handle Alert Dialog', async ({ page }) => {

//   page.on('dialog', async dialog => {
//     console.log('Dialog type:', dialog.type());
//     console.log('Dialog message:', dialog.message());

//     await dialog.accept();
//   });


//Frames concepts
// const frame = page.frame({ name: 'frame-name' });
//iframes can be accessed using the frame() method, which takes a name or URL as an argument. Once you have a reference to the frame, you can interact with its elements just like you would with the main page.
//frame.locator('selector').click();

// Separate group
// test.describe('Console Tests', () => {
// test.fail(({ browserName }) => browserName === 'chromium', 'Expected failure on Chromium');
test('console 1', async ({ page }) => {
  console.log('This is my first console log');
});

test('console 2', async ({ page }) => {
  console.log('This is my second console log');
});

test('console 3', async ({ page }) => {
  console.log('This is my third console log');
});

test('console 4', async ({ page }) => {
  console.log('This is my fourth console log');
});

test('console 5', async ({ page }) => {
  console.log('This is my fifth console log');
});


// Expected failure on Chromium
// test.fail(
//   ({ browserName }) => browserName === 'chromium',
//   'Testing the fail condition for console 6'
// );

test('console 6', async ({ page }) => {

  console.log('This is my sixth console log');

});

// Expected failure on Firefox
// test.fail(
//   ({ browserName }) => browserName === 'firefox',
//   'Testing the fail condition for console 7'
// );

test('console 7', async ({ page }) => {

  console.log('This is my seventh console log');

});


// Skip console 8
test('console 8', async ({ page }) => {

  test.skip(
    true,
    'Temporarily skipping console 8'
  );

  console.log('This is my eighth console log');

});


test('console 9', async ({ page }) => {
  console.log('This is my ninth console log');
});

test('console 10', async ({ page }) => {
  console.log('This is my tenth console log');
});

test('console 11', async ({ page }) => {
  console.log('This is my eleventh console log');
});

// });

// });