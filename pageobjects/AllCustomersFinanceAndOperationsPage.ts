import type { Page } from "@playwright/test";
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
    before: { strategy: 'css' as const, value: '#navPaneModuleID > span:nth-of-type(2) > ::before', actionKind: 'generic' as const },
    accountsReceivable: { strategy: 'role' as const, value: 'Accounts receivable', role: 'link', actionKind: 'link' as const },
    allCustomers: { strategy: 'role' as const, value: 'All customers', role: 'link', actionKind: 'link' as const },
    new: { strategy: 'css' as const, value: '#custtablelistpage_2_NewCustomer_label', actionKind: 'generic' as const },
    dynamicHeaderAccountNum: { strategy: 'css' as const, value: '[name="DynamicHeader_AccountNum"]', actionKind: 'textbox' as const },
    orgName: { strategy: 'css' as const, value: '[name="Org_Name"]', actionKind: 'textbox' as const },
    customerAccountTypeName: { strategy: 'text' as const, value: 'Customer account Type Name Customer group Currency Terms of payment', actionKind: 'generic' as const },
    cancelButton: { strategy: 'css' as const, value: '#DirPartyVerification_8_CancelButton[name="CancelButton"]', actionKind: 'button' as const },
    dynamicDetailCustGroup: { strategy: 'css' as const, value: '[name="DynamicDetail_CustGroup"]', actionKind: 'textbox' as const },
    save: { strategy: 'css' as const, value: '#DirPartyQuickCreateForm_9_OKButton_label', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickBefore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before));
  }

  async expectBeforeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), timeoutMs, soft);
  }

  async clickAccountsReceivable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable));
  }

  async expectAccountsReceivableVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), timeoutMs, soft);
  }

  async clickAllCustomers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers));
  }

  async expectAllCustomersVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), timeoutMs, soft);
  }

  async clickNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new));
  }

  async expectNewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), timeoutMs, soft);
  }

  async fillDynamicHeaderAccountNum(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), value);
  }

  async clearDynamicHeaderAccountNum(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum));
  }

  async getDynamicHeaderAccountNumValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum));
  }

  async expectDynamicHeaderAccountNumVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), timeoutMs, soft);
  }

  async fillOrgName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), value);
  }

  async clearOrgName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName));
  }

  async getOrgNameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName));
  }

  async expectOrgNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), timeoutMs, soft);
  }

  async clickCustomerAccountTypeName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName));
  }

  async expectCustomerAccountTypeNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), timeoutMs, soft);
  }

  async clickCancelButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton));
  }

  async doubleClickCancelButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton));
  }

  async expectCancelButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), timeoutMs, soft);
  }

  async fillDynamicDetailCustGroup(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), value);
  }

  async clearDynamicDetailCustGroup(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup));
  }

  async getDynamicDetailCustGroupValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup));
  }

  async expectDynamicDetailCustGroupVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), timeoutMs, soft);
  }

  async clickSave(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save));
  }

  async expectSaveVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), timeoutMs, soft);
  }


  async doubleClickBefore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before));
  }

  async longPressBefore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before));
  }

  async expectBeforeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), timeoutMs);
  }

  async expectBeforeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), expected, timeoutMs);
  }

  async expectBeforeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), substring, timeoutMs);
  }

  async expectBeforeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), value, timeoutMs);
  }

  async expectBeforeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), timeoutMs);
  }

  async expectBeforeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), timeoutMs);
  }

  async expectBeforeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), timeoutMs);
  }

  async expectBeforeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), timeoutMs);
  }

  async expectBeforeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), timeoutMs);
  }

  async expectBeforeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before), count, timeoutMs);
  }

  async scrollBeforeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.before));
  }

  async doubleClickAccountsReceivable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable));
  }

  async longPressAccountsReceivable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable));
  }

  async expectAccountsReceivableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), expected, timeoutMs);
  }

  async expectAccountsReceivableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), substring, timeoutMs);
  }

  async expectAccountsReceivableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), value, timeoutMs);
  }

  async expectAccountsReceivableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable), count, timeoutMs);
  }

  async scrollAccountsReceivableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.accountsReceivable));
  }

  async doubleClickAllCustomers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers));
  }

  async longPressAllCustomers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers));
  }

  async expectAllCustomersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), expected, timeoutMs);
  }

  async expectAllCustomersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), substring, timeoutMs);
  }

  async expectAllCustomersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), value, timeoutMs);
  }

  async expectAllCustomersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers), count, timeoutMs);
  }

  async scrollAllCustomersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.allCustomers));
  }

  async doubleClickNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new));
  }

  async longPressNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new));
  }

  async expectNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), timeoutMs);
  }

  async expectNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), expected, timeoutMs);
  }

  async expectNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), substring, timeoutMs);
  }

  async expectNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), value, timeoutMs);
  }

  async expectNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), timeoutMs);
  }

  async expectNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), timeoutMs);
  }

  async expectNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), timeoutMs);
  }

  async expectNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), timeoutMs);
  }

  async expectNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), timeoutMs);
  }

  async expectNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new), count, timeoutMs);
  }

  async scrollNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.new));
  }

  async typeTextDynamicHeaderAccountNum(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), value);
  }

  async expectDynamicHeaderAccountNumHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), expected, timeoutMs);
  }

  async expectDynamicHeaderAccountNumContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), substring, timeoutMs);
  }

  async expectDynamicHeaderAccountNumValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), value, timeoutMs);
  }

  async expectDynamicHeaderAccountNumEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum), count, timeoutMs);
  }

  async scrollDynamicHeaderAccountNumIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicHeaderAccountNum));
  }

  async typeTextOrgName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), value);
  }

  async expectOrgNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), timeoutMs);
  }

  async expectOrgNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), expected, timeoutMs);
  }

  async expectOrgNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), substring, timeoutMs);
  }

  async expectOrgNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), value, timeoutMs);
  }

  async expectOrgNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), timeoutMs);
  }

  async expectOrgNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), timeoutMs);
  }

  async expectOrgNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), timeoutMs);
  }

  async expectOrgNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), timeoutMs);
  }

  async expectOrgNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), timeoutMs);
  }

  async expectOrgNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName), count, timeoutMs);
  }

  async scrollOrgNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.orgName));
  }

  async doubleClickCustomerAccountTypeName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName));
  }

  async longPressCustomerAccountTypeName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName));
  }

  async expectCustomerAccountTypeNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), timeoutMs);
  }

  async expectCustomerAccountTypeNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), expected, timeoutMs);
  }

  async expectCustomerAccountTypeNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), substring, timeoutMs);
  }

  async expectCustomerAccountTypeNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), value, timeoutMs);
  }

  async expectCustomerAccountTypeNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), timeoutMs);
  }

  async expectCustomerAccountTypeNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), timeoutMs);
  }

  async expectCustomerAccountTypeNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), timeoutMs);
  }

  async expectCustomerAccountTypeNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), timeoutMs);
  }

  async expectCustomerAccountTypeNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), timeoutMs);
  }

  async expectCustomerAccountTypeNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName), count, timeoutMs);
  }

  async scrollCustomerAccountTypeNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.customerAccountTypeName));
  }

  async longPressCancelButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton));
  }

  async expectCancelButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), timeoutMs);
  }

  async expectCancelButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), expected, timeoutMs);
  }

  async expectCancelButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), substring, timeoutMs);
  }

  async expectCancelButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), value, timeoutMs);
  }

  async expectCancelButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), timeoutMs);
  }

  async expectCancelButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), timeoutMs);
  }

  async expectCancelButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), timeoutMs);
  }

  async expectCancelButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), timeoutMs);
  }

  async expectCancelButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), timeoutMs);
  }

  async expectCancelButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton), count, timeoutMs);
  }

  async scrollCancelButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.cancelButton));
  }

  async typeTextDynamicDetailCustGroup(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), value);
  }

  async expectDynamicDetailCustGroupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), expected, timeoutMs);
  }

  async expectDynamicDetailCustGroupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), substring, timeoutMs);
  }

  async expectDynamicDetailCustGroupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), value, timeoutMs);
  }

  async expectDynamicDetailCustGroupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup), count, timeoutMs);
  }

  async scrollDynamicDetailCustGroupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.dynamicDetailCustGroup));
  }

  async doubleClickSave(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save));
  }

  async longPressSave(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save));
  }

  async expectSaveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), timeoutMs);
  }

  async expectSaveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), expected, timeoutMs);
  }

  async expectSaveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), substring, timeoutMs);
  }

  async expectSaveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), value, timeoutMs);
  }

  async expectSaveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), timeoutMs);
  }

  async expectSaveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), timeoutMs);
  }

  async expectSaveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), timeoutMs);
  }

  async expectSaveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), timeoutMs);
  }

  async expectSaveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), timeoutMs);
  }

  async expectSaveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save), count, timeoutMs);
  }

  async scrollSaveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AllCustomersFinanceAndOperationsPage.L.save));
  }

}
