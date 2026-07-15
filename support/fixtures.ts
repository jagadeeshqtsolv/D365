import { test as base, expect } from "@playwright/test";
import { AllCustomersFinanceAndOperationsPage } from "../pageobjects/AllCustomersFinanceAndOperationsPage";

type AppFixtures = {
  allCustomersFinanceAndOperationsPage: AllCustomersFinanceAndOperationsPage;
};

export const test = base.extend<AppFixtures>({
  allCustomersFinanceAndOperationsPage: async ({ page }, use) => {
    await use(new AllCustomersFinanceAndOperationsPage(page));
  },
});

export { expect };
