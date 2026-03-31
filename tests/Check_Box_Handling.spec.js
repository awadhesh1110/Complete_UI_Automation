import { test, expect } from '@playwright/test'

test('CheckBox Handing', async ({ page }) => {


    page.goto("https://demoqa.com/");

    await page.waitForLoadState('domcontentloaded');

    await page.locator("//h5[normalize-space()='Elements']").click();
    await page.locator("//span[normalize-space()='Check Box']").click();

    while (true) {

        const Close_Switchers = page.locator(".rc-tree-switcher.rc-tree-switcher_close");

        const Count = await Close_Switchers.count();

        if (Count === 0) break;

        await Close_Switchers.first().click();

        await page.waitForTimeout(300);
    }

    await page.getByRole('checkbox', { name: "Select Home" }).click();

    const Result = await page.locator("#result").textContent();

    console.log(Result)

    await page.pause();


})
