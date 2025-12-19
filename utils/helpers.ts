export async function click(page, selector) { await page.locator(selector).click(); }
export async function typeText(page, selector, text) { await page.locator(selector).fill(text); }