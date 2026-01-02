import { test, expect } from '@playwright/test';

test('Verify Strategy Page Text', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Accept cookies
  await page.locator('#onetrust-accept-btn-handler').click();

  // Hover over "Services" and click "Strategy"
  await page.getByRole('link', { name: 'Services' }).hover();
  await page.getByRole('link', { name: 'Strategy' }).click();

  // Verify text on Strategy page
  const textExists = await page.locator('body').innerText();
  expect(textExists).toContain('Design the business models of the future.');
});