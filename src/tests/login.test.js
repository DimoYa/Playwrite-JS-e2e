const { test, expect } = require('@playwright/test');

test('Verify Login with valid credentials', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

    await page.click('//*[@href="/login"]');

    await page.fill('//*[@id="email"]', 'peter@abv.bg');
    await page.fill('//*[@id="password"]', '123456');
    await page.click('//*[@value="Login"]');

    await page.$('a[href="/catalog"]');

    expect(page.url()).toBe('http://localhost:3000/catalog')
});

test('Verify Login with empty credentials returns alert', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

    await page.click('a[href="/login"]'); 
    await page.$('a[href="/catalog"]');

    await page.click('input[type=submit]');



    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('All fields are !');
      });

    expect(page.url()).toBe('http://localhost:3000/login')
});