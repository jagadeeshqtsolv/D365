import type { Locator, Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class AllCustomersFinanceAndOperationsPage {
  private static readonly L = {
    verifyModulesIsVisible: { strategy: 'text' as const, value: 'Verify Modules is visible', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}


  async clickVerifyModulesIsVisible(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible));
  }

  async doubleClickVerifyModulesIsVisible(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible));
  }

  async longPressVerifyModulesIsVisible(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible));
  }

  async expectVerifyModulesIsVisibleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), timeoutMs);
  }

  async expectVerifyModulesIsVisibleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), timeoutMs);
  }

  async expectVerifyModulesIsVisibleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), expected, timeoutMs);
  }

  async expectVerifyModulesIsVisibleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), substring, timeoutMs);
  }

  async expectVerifyModulesIsVisibleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), value, timeoutMs);
  }

  async expectVerifyModulesIsVisibleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), timeoutMs);
  }

  async expectVerifyModulesIsVisibleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), timeoutMs);
  }

  async expectVerifyModulesIsVisibleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), timeoutMs);
  }

  async expectVerifyModulesIsVisibleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), timeoutMs);
  }

  async expectVerifyModulesIsVisibleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), timeoutMs);
  }

  async expectVerifyModulesIsVisibleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible), count, timeoutMs);
  }

  async scrollVerifyModulesIsVisibleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.verifyModulesIsVisible));
  }

}
