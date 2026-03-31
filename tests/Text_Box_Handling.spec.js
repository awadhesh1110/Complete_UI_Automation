import {expect, test} from  '@playwright/test';


test('Text Box Handling', async ({ page }) => {

    await page.goto("https://demoqa.com/");

    await page.waitForLoadState('domcontentloaded');

    await page.locator("//h5[normalize-space()='Elements']").click();
    await page.locator("//span[normalize-space()='Text Box']").click();
    await expect(page.locator(".text-center")).toContainText("Text Box");

    await page.getByRole('textbox', {name: 'Full Name'}).fill("Awadhesh Singh");
    await page.getByRole('textbox', {name: 'name@example.com'}).fill("awadheshs@gmail.com")
    await page.locator("#currentAddress").fill("Thane City, Mumbai - 400604");
    await page.locator("#permanentAddress").fill("Same as Current Address");

    await page.getByRole('button', {name: 'Submit'}).click();

    let Submit_Details = await page.locator("div.border.col-md-12.col-sm-12").textContent()
    console.log(Submit_Details);

    await page.pause();

})