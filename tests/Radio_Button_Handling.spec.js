import { test, expect } from '@playwright/test'

test('Radio Button Handling', async ({ page }) => {

    // Navigate to DemoQA homepage
    await page.goto("https://demoqa.com/");

    // Wait until DOM is fully loaded (ensures elements are ready)
    await page.waitForLoadState('domcontentloaded');

    // Click on "Elements" section
    await page.locator("//h5[normalize-space()='Elements']").click();

    // Navigate to "Radio Button" page
    await page.locator("//span[normalize-space()='Radio Button']").click();

    // Select "Yes" radio button
    await page.getByRole('radio', { name: 'Yes' }).click();

    // Select "Impressive" radio button
    await page.getByRole('radio', { name: 'Impressive' }).click();

    // Validate that "No" radio button is disabled
    // (Using expect ensures test fails if condition is not met)
    await expect(page.getByRole('radio', { name: 'No' })).toBeDisabled();

    // Capture the result text displayed after selection
    const resultText = await page.locator(".mt-3").textContent();

    // Print the result in terminal (useful for debugging/verification)
    console.log(resultText);

    // Pause execution for debugging (Playwright Inspector)
    await page.pause();

});