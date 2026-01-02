import { test, expect } from '@playwright/test';

test('Navigate to Strategy page and verify text', async ({ page }) => {
  // Step 1: Open EPAM website
  await page.goto('https://www.epam.com/');

  // Step 2: Accept cookies
  await page.locator('#onetrust-accept-btn-handler').click();

  // Step 3: Navigate to Services -> Strategy
  await page.getByRole('link', { name: 'Services' }).hover();
  await page.getByRole('link', { name: 'Strategy' }).click();

  // Step 4: Verify text on Strategy page
  await expect(page.locator('text=Design the business models of the future.')).toBeVisible();
});