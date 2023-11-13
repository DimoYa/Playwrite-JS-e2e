const { test, expect } = require('@playwright/test');

test('Add book with correct data', async ({ page }) => {

    await page.goto('http://localhost:3000/login');

    await page.fill('//*[@id="email"]', 'peter@abv.bg');
    await page.fill('//*[@id="password"]', '123456');

    await Promise.all([
        page.click('//*[@value="Login"]'),
        page.waitForURL('http://localhost:3000/catalog')

    ]);

    await page.click('a[href="/create"]');
    await page.waitForSelector('#create-form');

    await page.fill('#title', 'Test Book');
    await page.fill('#description', 'Test description');
    await page.fill('#image', 'https://writology.com/wp-content/uploads/2017/02/all_the_light_we_cannot_see.jpg');
    await page.selectOption('#type', 'Fiction');

    await page.click('#create-form input[type="submit"]');

    await page.waitForURL('http://localhost:3000/catalog');

    expect(page.url()).toBe('http://localhost:3000/catalog');
});