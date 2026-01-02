import { test, expect } from '@playwright/test';

test('Navigate to Strategy and verify text', async ({ page }) => {
  // Step 1: Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Step 2: Accept cookies
  await page.locator('#onetrust-accept-btn-handler').click();

  // Step 3: Hover over "Services" and click "Strategy"
  await page.getByRole('link', { name: 'Services' }).hover();
  await page.waitForTimeout(2000); // Wait for animations
  await page.getByRole('link', { name: 'Strategy' }).click();

  // Step 4: Verify the text
  const text = await page.getByText('Design the business models of the future.');
  await expect(text).toBeVisible();
});