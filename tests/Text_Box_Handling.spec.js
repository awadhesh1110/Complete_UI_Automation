import { expect, test } from '@playwright/test';

test('Text Box Handling', async ({ page }) => {

    // Navigate to DemoQA homepage
    await page.goto("https://demoqa.com/");

    // Wait until DOM is fully loaded
    await page.waitForLoadState('domcontentloaded');

    // Click on "Elements" section
    await page.locator("//h5[normalize-space()='Elements']").click();

    // Navigate to "Text Box" page
    await page.locator("//span[normalize-space()='Text Box']").click();

    // Validate that the correct page is opened by checking heading
    await expect(page.locator(".text-center")).toContainText("Text Box");

    // Fill user details in the form fields
    await page.getByRole('textbox', { name: 'Full Name' }).fill("Awadhesh Singh");
    await page.getByRole('textbox', { name: 'name@example.com' }).fill("awadheshs@gmail.com");
    await page.locator("#currentAddress").fill("Thane City, Mumbai - 400604");
    await page.locator("#permanentAddress").fill("Same as Current Address");

    // Click on Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // Capture the submitted details displayed after form submission
    let submitDetails = await page.locator("div.border.col-md-12.col-sm-12").textContent();

    // Print submitted data in terminal (useful for validation/debugging)
    console.log(submitDetails);

    // Pause execution for debugging (Playwright Inspector)
    await page.pause();

});