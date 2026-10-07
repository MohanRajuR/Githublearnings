import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

    test.beforeAll(async () => {
        console.log('Runs ONCE before all tests');
    });

    test.beforeEach(async ({ page }) => {
        console.log('Runs before EACH test');

        await page.goto('https://google.com');
    });

    test.afterEach(async () => {
        console.log('Runs after EACH test');
    });

    test.afterAll(async () => {
        console.log('Runs ONCE after all tests');
    });

    test('Test 1', async ({ page }) => {
        console.log('Executing Test 1');
    });

    test('Test 2', async ({ page }) => {
        console.log('Executing Test 2');
    });

});