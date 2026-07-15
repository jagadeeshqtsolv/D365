import { test as base, expect } from "@playwright/test";
import { AllCustomersFinanceAndOperationsPage } from "../pageobjects/AllCustomersFinanceAndOperationsPage";
import { HomePage } from "../pageobjects/HomePage";

type AppFixtures = {
  allCustomersFinanceAndOperationsPage: AllCustomersFinanceAndOperationsPage;
  homePage: HomePage;
};

export const test = base.extend<AppFixtures>({
  allCustomersFinanceAndOperationsPage: async ({ page }, use) => {
    await use(new AllCustomersFinanceAndOperationsPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect };
