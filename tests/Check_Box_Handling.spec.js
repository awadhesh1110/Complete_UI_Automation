import { test, expect } from '@playwright/test'

test('CheckBox Handling', async ({ page }) => {

    // Navigate to DemoQA homepage
    await page.goto("https://demoqa.com/");

    // Wait until DOM content is fully loaded
    await page.waitForLoadState('domcontentloaded');

    // Click on "Elements" section
    await page.locator("//h5[normalize-space()='Elements']").click();

    // Navigate to "Check Box" page
    await page.locator("//span[normalize-space()='Check Box']").click();

    // Expand all collapsed tree nodes
    // Loop will continue until no closed nodes are left
    while (true) {

        // Locate all collapsed (closed) tree switchers
        const Close_Switchers = page.locator(".rc-tree-switcher.rc-tree-switcher_close");

        // Count how many closed nodes are present
        const Count = await Close_Switchers.count();

        // Exit loop when all nodes are expanded
        if (Count === 0) break;

        // Click the first closed node to expand it
        await Close_Switchers.first().click();

        // Small wait to allow UI to update dynamically
        await page.waitForTimeout(300);
    }

    // Select the main checkbox "Home" (selects all child checkboxes)
    await page.getByRole('checkbox', { name: "Select Home" }).click();

    // Capture the result text displayed after selection
    const resultText = await page.locator("#result").textContent();

    // Print the selected checkbox results in terminal
    console.log(resultText);

    // Pause execution for debugging using Playwright Inspector
    await page.pause();

});