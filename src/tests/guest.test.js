const { test, expect } = require('@playwright/test');

test('Verify "All Books" link is visible', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

    const allBooks = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooks.isVisible();

    expect(isLinkVisible).toBe(true);
});

test('Verify "Login" btn is visible', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

    const allBooks = await page.locator('//*[@href="/login"]');
    const isLinkVisible = await allBooks.isVisible();

    expect(isLinkVisible).toBe(true);
});

test('Verify "Register" btn is visible', async ({ page }) => {

    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

    const allBooks = page.locator('//*[@href="/register"]');
    const isLinkVisible = await allBooks.isVisible();

    expect(isLinkVisible).toBe(true);
});