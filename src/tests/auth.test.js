const { test, expect } = require('@playwright/test');

test.only('Verify "All Books" link is visible after login', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

    await page.click('//*[@href="/login"]');

    await page.fill('//*[@id="email"]', 'peter@abv.bg');
    await page.fill('//*[@id="password"]', '123456');

    await page.click('//*[@value="Login"]');


    const allBooks = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooks.isVisible();


    expect(isLinkVisible).toBe(true);
});

test('Verify email address is visible after login', async ({ page }) => {

    const emailAddress = 'peter@abv.bg';

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

    await page.click('//*[@href="/login"]');

    await page.fill('//*[@id="email"]', emailAddress);
    await page.fill('//*[@id="password"]', '123456');
    await page.click('//*[@value="Login"]');


    const emailAddressWelcome = await page.$('//*[@id="user"]/span');



    expect(await emailAddressWelcome.textContent()).toEqual(expect.stringContaining(emailAddress));
});