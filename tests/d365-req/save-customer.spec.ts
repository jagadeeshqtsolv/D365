import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

  test('Create new customer successfully and validate saved data', { tag: ["@e2e","@regression","@P0","@case-aa511386-a84d-4efd-be2c-25997854451f","@req-432a0d61-c539-42f9-a780-50a0d7c9d535"] }, async ({ page, allCustomersFinanceAndOperationsPage }) => {
  await test.step('Navigate to URL — Navigate to Sales details URL', async () => {
    await page.goto('https://s-dev-ukg.sandbox.operations.dynamics.com/?cross-company=true&cmp=1001&mi=SalesTableDetails');
  });
  await test.step('Assert visible — Verify Modules is visible', async () => {
    await allCustomersFinanceAndOperationsPage.expectBeforeVisible();
  });
  await test.step('Click — Click Modules', async () => {
    await allCustomersFinanceAndOperationsPage.clickBefore();
  });
  await test.step('Assert visible — Verify Accounts receivable is visible', async () => {
    await allCustomersFinanceAndOperationsPage.expectAccountsReceivableVisible();
  });
  await test.step('Click — Click Accounts receivable', async () => {
    await allCustomersFinanceAndOperationsPage.clickAccountsReceivable();
  });
  await test.step('Assert visible — Verify All customers is visible', async () => {
    await allCustomersFinanceAndOperationsPage.expectAllCustomersVisible();
  });
  await test.step('Click — Click All customers', async () => {
    await allCustomersFinanceAndOperationsPage.clickAllCustomers();
  });
  await test.step('Click — Click New', async () => {
    await allCustomersFinanceAndOperationsPage.clickNew();
  });
  await test.step('Fill — Fill Customer account with \'test123\'', async () => {
    await allCustomersFinanceAndOperationsPage.fillDynamicHeaderAccountNum('test123');
  });
  await test.step('Fill — Fill Name with \'test\'', async () => {
    await allCustomersFinanceAndOperationsPage.fillOrgName('test');
  });
  await test.step('Fill — Fill Customer group with \'test\'', async () => {
    await allCustomersFinanceAndOperationsPage.fillDynamicDetailCustGroup('test');
  });
  await test.step('Assert enabled — Verify Save is enabled', async () => {
    await allCustomersFinanceAndOperationsPage.expectSaveEnabled();
  });
  await test.step('Click — Click Save', async () => {
    await allCustomersFinanceAndOperationsPage.clickSave();
  });
  await test.step('Assert field value — Validate saved Customer account value', async () => {
    await allCustomersFinanceAndOperationsPage.expectDynamicHeaderAccountNumValue('test123');
  });
  await test.step('Assert field value — Validate saved Name value', async () => {
    await allCustomersFinanceAndOperationsPage.expectOrgNameValue('test');
  });
  await test.step('Assert field value — Validate saved Customer group value', async () => {
    await allCustomersFinanceAndOperationsPage.expectDynamicDetailCustGroupValue('test');
  });
});
