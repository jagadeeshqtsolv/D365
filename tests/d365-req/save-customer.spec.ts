import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

  test('Create new customer successfully and validate saved data', { tag: ["@e2e","@regression","@P0","@case-aa511386-a84d-4efd-be2c-25997854451f"] }, async ({ page, homePage }) => {
    await test.step('Open — Navigate to Sales details URL', async () => {
      await page.goto('https://s-dev-ukg.sandbox.operations.dynamics.com/?cross-company=true&cmp=1001&mi=SalesTableDetails');
    });

    await test.step('Assert visible — Verify Modules is visible', async () => {
      await homePage.expectModulesVisible();
    });

    await test.step('Click — Click Modules', async () => {
      await homePage.clickModules();
    });

    await test.step('Assert visible — Verify Accounts receivable is visible', async () => {
      await homePage.expectAccountsReceivableVisible();
    });

    await test.step('Click — Click Accounts receivable', async () => {
      await homePage.clickAccountsReceivable();
    });

    await test.step('Assert visible — Verify All customers is visible', async () => {
      await homePage.expectAllCustomersVisible();
    });

    await test.step('Click — Click All customers', async () => {
      await homePage.clickAllCustomers();
    });

    await test.step('Assert visible — Verify New button is visible', async () => {
      await homePage.expectNewVisible();
    });

    await test.step('Click — Click New', async () => {
      await homePage.clickNew();
    });

    await test.step('Assert visible — Verify Customer account field visible', async () => {
      await homePage.expectDynamicHeaderAccountNumVisible();
    });

    await test.step('Fill — Fill Customer account with \'test123\'', async () => {
      await homePage.fillDynamicHeaderAccountNum(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillCustomerAccountWithTest123);
    });

    await test.step('Assert visible — Verify Name field visible', async () => {
      await homePage.expectOrgNameVisible();
    });

    await test.step('Fill — Fill Name with \'test\'', async () => {
      await homePage.fillOrgName(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillNameWithTest);
    });

    await test.step('Assert visible — Verify Customer group field visible', async () => {
      await homePage.expectDynamicDetailCustGroupVisible();
    });

    await test.step('Fill — Fill Customer group with \'test\'', async () => {
      await homePage.fillDynamicDetailCustGroup(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillCustomerGroupWithTest);
    });

    await test.step('Assert enabled — Verify Save is enabled', async () => {
      await homePage.expectSaveEnabled();
    });

    await test.step('Click — Click Save', async () => {
      await homePage.clickSave();
    });

    await test.step('Assert value — Validate saved Customer account value', async () => {
      await homePage.expectDynamicHeaderAccountNumValue(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillCustomerAccountWithTest123);
    });

    await test.step('Assert value — Validate saved Name value', async () => {
      await homePage.expectOrgNameValue(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillNameWithTest);
    });

    await test.step('Assert value — Validate saved Customer group value', async () => {
      await homePage.expectDynamicDetailCustGroupValue(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillCustomerGroupWithTest);
    });
  });
