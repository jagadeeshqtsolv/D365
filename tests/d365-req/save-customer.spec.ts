import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Create new customer successfully and validate saved data', { tag: ["@e2e","@regression","@P0","@case-aa511386-a84d-4efd-be2c-25997854451f"] }, async ({ page, allCustomersFinanceAndOperationsPage }) => {
  await test.step("Open — Navigate to Sales details URL", async () => {
    await page.goto(env.baseURL);
  });

  await test.step("Assert visible — Verify Modules is visible", async () => {
    await allCustomersFinanceAndOperationsPage.expectBeforeVisible();
  });

  await test.step("Click — Click Modules", async () => {
    await allCustomersFinanceAndOperationsPage.clickBefore();
  });

  await test.step("Assert visible — Verify Accounts receivable is visible", async () => {
    await allCustomersFinanceAndOperationsPage.expectAccountsReceivableVisible();
  });

  await test.step("Click — Click Accounts receivable", async () => {
    await allCustomersFinanceAndOperationsPage.clickAccountsReceivable();
  });

  await test.step("Assert visible — Verify All customers is visible", async () => {
    await allCustomersFinanceAndOperationsPage.expectAllCustomersVisible();
  });

  await test.step("Click — Click All customers", async () => {
    await allCustomersFinanceAndOperationsPage.clickAllCustomers();
  });

  await test.step("Assert visible — Verify New button is visible", async () => {
    await allCustomersFinanceAndOperationsPage.expectNewVisible();
  });

  await test.step("Click — Click New", async () => {
    await allCustomersFinanceAndOperationsPage.clickNew();
  });

  await test.step("Assert visible — Verify Customer account field visible", async () => {
    await allCustomersFinanceAndOperationsPage.expectDynamicHeaderAccountNumVisible();
  });

  await test.step("Fill — Fill Customer account with 'test123'", async () => {
    await allCustomersFinanceAndOperationsPage.fillDynamicHeaderAccountNum(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillCustomerAccountWithTest123);
  });

  await test.step("Assert visible — Verify Name field visible", async () => {
    await allCustomersFinanceAndOperationsPage.expectOrgNameVisible();
  });

  await test.step("Fill — Fill Name with 'test'", async () => {
    await allCustomersFinanceAndOperationsPage.fillOrgName(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillNameWithTest);
  });

  await test.step("Assert visible — Verify Customer group field visible", async () => {
    await allCustomersFinanceAndOperationsPage.expectDynamicDetailCustGroupVisible();
  });

  await test.step("Fill — Fill Customer group with 'test'", async () => {
    await allCustomersFinanceAndOperationsPage.fillDynamicDetailCustGroup(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillCustomerGroupWithTest);
  });

  await test.step("Assert enabled — Verify Save is enabled", async () => {
    await allCustomersFinanceAndOperationsPage.expectSaveEnabled();
  });

  await test.step("Click — Click Save", async () => {
    await allCustomersFinanceAndOperationsPage.clickSave();
  });

  await test.step("Assert value — Validate saved Customer account value", async () => {
    await allCustomersFinanceAndOperationsPage.expectDynamicHeaderAccountNumValue(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillCustomerAccountWithTest123);
  });

  await test.step("Assert value — Validate saved Name value", async () => {
    await allCustomersFinanceAndOperationsPage.expectOrgNameValue(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillNameWithTest);
  });

  await test.step("Assert value — Validate saved Customer group value", async () => {
    await allCustomersFinanceAndOperationsPage.expectDynamicDetailCustGroupValue(testData.createNewCustomerSuccessfullyAndValidateSavedData.fillCustomerGroupWithTest);
  });
});
