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
import { webTable, type WebTable } from "../support/web-table";

export class HomePage {
  private static readonly L = {
    accountsReceivable: { strategy: 'text' as const, value: 'Accounts receivable', actionKind: 'link' as const },
    allCustomers: { strategy: 'role' as const, value: 'All customers', role: 'link', actionKind: 'link' as const },
    modules: { strategy: 'css' as const, value: '.workspace-image.GroupedList-symbol', actionKind: 'button' as const },
    new: { strategy: 'css' as const, value: '#custtablelistpage_4_NewCustomer_label', actionKind: 'generic' as const },
    dynamicHeaderAccountNum: { strategy: 'css' as const, value: '[name="DynamicHeader_AccountNum"]', actionKind: 'textbox' as const },
    orgName: { strategy: 'css' as const, value: 'input[name="Org_Name"]', actionKind: 'textbox' as const },
    dynamicDetailCustGroup: { strategy: 'css' as const, value: 'input[name="DynamicDetail_CustGroup"]', actionKind: 'textbox' as const },
    save: { strategy: 'css' as const, value: '#DirPartyQuickCreateForm_5_OKButton_label', actionKind: 'generic' as const },
  } as const;

  readonly table2: WebTable; // 1 rows × 3 cols
  readonly table3: WebTable; // 1 rows × 2 cols
  readonly addressGrid272630Grid: WebTable; // columns: ["Name or description", "Address", "Purpose", "Primary", "Is Residential", "Badge Processing Id", "Grid options"]
  readonly contactInfoGrid273200Grid: WebTable; // columns: ["Description", "Type", "Contact number/address", "Extension", "Primary", "", "Purpose", "UKG Salesforce ID", "Grid options"]

  constructor(private readonly page: Page) {
    this.table2 = webTable(this.page, 'table:nth-of-type(2)');
    this.table3 = webTable(this.page, 'table:nth-of-type(3)');
    this.addressGrid272630Grid = webTable(this.page, this.page.getByRole('grid', { name: 'Party postal address view', exact: true }), 'grid');
    this.contactInfoGrid273200Grid = webTable(this.page, this.page.getByRole('grid', { name: 'Communication details', exact: true }), 'grid');
  }

  async clickAccountsReceivable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.accountsReceivable));
  }

  async expectAccountsReceivableVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.accountsReceivable), timeoutMs, soft);
  }

  async clickAllCustomers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.allCustomers));
  }

  async expectAllCustomersVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.allCustomers), timeoutMs, soft);
  }

  async clickModules(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.modules));
  }

  async doubleClickModules(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.modules));
  }

  async expectModulesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.modules), timeoutMs, soft);
  }

  async clickNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.new));
  }

  async expectNewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.new), timeoutMs, soft);
  }

  async fillDynamicHeaderAccountNum(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), value);
  }

  async clearDynamicHeaderAccountNum(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum));
  }

  async getDynamicHeaderAccountNumValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum));
  }

  async expectDynamicHeaderAccountNumVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), timeoutMs, soft);
  }

  async fillOrgName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.orgName), value);
  }

  async clearOrgName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.orgName));
  }

  async getOrgNameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.orgName));
  }

  async expectOrgNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.orgName), timeoutMs, soft);
  }

  async fillDynamicDetailCustGroup(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), value);
  }

  async clearDynamicDetailCustGroup(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.dynamicDetailCustGroup));
  }

  async getDynamicDetailCustGroupValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.dynamicDetailCustGroup));
  }

  async expectDynamicDetailCustGroupVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), timeoutMs, soft);
  }

  async clickSave(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.save));
  }

  async expectSaveVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.save), timeoutMs, soft);
  }

  // ── table:nth-of-type(2) ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getTable2TableText(row: number, col: number | string): Promise<string> {
    return this.table2.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getTable2TableColumn(col: number | string): Promise<string[]> {
    return this.table2.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getTable2TableRowData(row: number): Promise<Record<string, string>> {
    return this.table2.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findTable2TableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.table2.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findTable2TableRowByText(text: string): Promise<number> {
    return this.table2.findRowByText(text);
  }

  /** Total number of body rows. */
  async getTable2TableRowCount(): Promise<number> {
    return this.table2.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickTable2TableLink(row: number, col: number | string): Promise<void> {
    return this.table2.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getTable2TableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.table2.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkTable2TableRow(row: number): Promise<void> {
    const cb = this.table2.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckTable2TableRow(row: number): Promise<void> {
    const cb = this.table2.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isTable2TableRowChecked(row: number): Promise<boolean> {
    return this.table2.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getTable2TableSwitchState(row: number): Promise<boolean> {
    return this.table2.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleTable2TableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.table2.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickTable2TableButton(row: number, label?: string): Promise<void> {
    return this.table2.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickTable2TableMenuOption(label: string): Promise<void> {
    return this.table2.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortTable2TableBy(col: string): Promise<void> {
    return this.table2.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getTable2TableInRow(row: number, selector: string): Locator {
    return this.table2.getInRow(row, selector);
  }

  // ── table:nth-of-type(3) ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getTable3TableText(row: number, col: number | string): Promise<string> {
    return this.table3.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getTable3TableColumn(col: number | string): Promise<string[]> {
    return this.table3.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getTable3TableRowData(row: number): Promise<Record<string, string>> {
    return this.table3.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findTable3TableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.table3.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findTable3TableRowByText(text: string): Promise<number> {
    return this.table3.findRowByText(text);
  }

  /** Total number of body rows. */
  async getTable3TableRowCount(): Promise<number> {
    return this.table3.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickTable3TableLink(row: number, col: number | string): Promise<void> {
    return this.table3.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getTable3TableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.table3.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkTable3TableRow(row: number): Promise<void> {
    const cb = this.table3.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckTable3TableRow(row: number): Promise<void> {
    const cb = this.table3.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isTable3TableRowChecked(row: number): Promise<boolean> {
    return this.table3.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getTable3TableSwitchState(row: number): Promise<boolean> {
    return this.table3.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleTable3TableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.table3.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickTable3TableButton(row: number, label?: string): Promise<void> {
    return this.table3.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickTable3TableMenuOption(label: string): Promise<void> {
    return this.table3.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortTable3TableBy(col: string): Promise<void> {
    return this.table3.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getTable3TableInRow(row: number, selector: string): Locator {
    return this.table3.getInRow(row, selector);
  }

  // ── #AddressGrid_27263_0_grid ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getAddressGrid272630GridTableText(row: number, col: number | string): Promise<string> {
    return this.addressGrid272630Grid.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getAddressGrid272630GridTableColumn(col: number | string): Promise<string[]> {
    return this.addressGrid272630Grid.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getAddressGrid272630GridTableRowData(row: number): Promise<Record<string, string>> {
    return this.addressGrid272630Grid.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findAddressGrid272630GridTableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.addressGrid272630Grid.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findAddressGrid272630GridTableRowByText(text: string): Promise<number> {
    return this.addressGrid272630Grid.findRowByText(text);
  }

  /** Total number of body rows. */
  async getAddressGrid272630GridTableRowCount(): Promise<number> {
    return this.addressGrid272630Grid.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickAddressGrid272630GridTableLink(row: number, col: number | string): Promise<void> {
    return this.addressGrid272630Grid.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getAddressGrid272630GridTableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.addressGrid272630Grid.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkAddressGrid272630GridTableRow(row: number): Promise<void> {
    const cb = this.addressGrid272630Grid.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckAddressGrid272630GridTableRow(row: number): Promise<void> {
    const cb = this.addressGrid272630Grid.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isAddressGrid272630GridTableRowChecked(row: number): Promise<boolean> {
    return this.addressGrid272630Grid.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getAddressGrid272630GridTableSwitchState(row: number): Promise<boolean> {
    return this.addressGrid272630Grid.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleAddressGrid272630GridTableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.addressGrid272630Grid.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickAddressGrid272630GridTableButton(row: number, label?: string): Promise<void> {
    return this.addressGrid272630Grid.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickAddressGrid272630GridTableMenuOption(label: string): Promise<void> {
    return this.addressGrid272630Grid.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortAddressGrid272630GridTableBy(col: string): Promise<void> {
    return this.addressGrid272630Grid.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getAddressGrid272630GridTableInRow(row: number, selector: string): Locator {
    return this.addressGrid272630Grid.getInRow(row, selector);
  }

  // ── #ContactInfoGrid_27320_0_grid ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getContactInfoGrid273200GridTableText(row: number, col: number | string): Promise<string> {
    return this.contactInfoGrid273200Grid.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getContactInfoGrid273200GridTableColumn(col: number | string): Promise<string[]> {
    return this.contactInfoGrid273200Grid.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getContactInfoGrid273200GridTableRowData(row: number): Promise<Record<string, string>> {
    return this.contactInfoGrid273200Grid.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findContactInfoGrid273200GridTableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.contactInfoGrid273200Grid.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findContactInfoGrid273200GridTableRowByText(text: string): Promise<number> {
    return this.contactInfoGrid273200Grid.findRowByText(text);
  }

  /** Total number of body rows. */
  async getContactInfoGrid273200GridTableRowCount(): Promise<number> {
    return this.contactInfoGrid273200Grid.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickContactInfoGrid273200GridTableLink(row: number, col: number | string): Promise<void> {
    return this.contactInfoGrid273200Grid.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getContactInfoGrid273200GridTableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.contactInfoGrid273200Grid.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkContactInfoGrid273200GridTableRow(row: number): Promise<void> {
    const cb = this.contactInfoGrid273200Grid.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckContactInfoGrid273200GridTableRow(row: number): Promise<void> {
    const cb = this.contactInfoGrid273200Grid.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isContactInfoGrid273200GridTableRowChecked(row: number): Promise<boolean> {
    return this.contactInfoGrid273200Grid.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getContactInfoGrid273200GridTableSwitchState(row: number): Promise<boolean> {
    return this.contactInfoGrid273200Grid.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleContactInfoGrid273200GridTableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.contactInfoGrid273200Grid.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickContactInfoGrid273200GridTableButton(row: number, label?: string): Promise<void> {
    return this.contactInfoGrid273200Grid.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickContactInfoGrid273200GridTableMenuOption(label: string): Promise<void> {
    return this.contactInfoGrid273200Grid.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortContactInfoGrid273200GridTableBy(col: string): Promise<void> {
    return this.contactInfoGrid273200Grid.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getContactInfoGrid273200GridTableInRow(row: number, selector: string): Locator {
    return this.contactInfoGrid273200Grid.getInRow(row, selector);
  }


  async doubleClickAccountsReceivable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.accountsReceivable));
  }

  async longPressAccountsReceivable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.accountsReceivable));
  }

  async expectAccountsReceivableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.accountsReceivable), expected, timeoutMs);
  }

  async expectAccountsReceivableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.accountsReceivable), substring, timeoutMs);
  }

  async expectAccountsReceivableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.accountsReceivable), value, timeoutMs);
  }

  async expectAccountsReceivableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.accountsReceivable), timeoutMs);
  }

  async expectAccountsReceivableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.accountsReceivable), count, timeoutMs);
  }

  async scrollAccountsReceivableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.accountsReceivable));
  }

  async doubleClickAllCustomers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.allCustomers));
  }

  async longPressAllCustomers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.allCustomers));
  }

  async expectAllCustomersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.allCustomers), expected, timeoutMs);
  }

  async expectAllCustomersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.allCustomers), substring, timeoutMs);
  }

  async expectAllCustomersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.allCustomers), value, timeoutMs);
  }

  async expectAllCustomersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.allCustomers), timeoutMs);
  }

  async expectAllCustomersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.allCustomers), count, timeoutMs);
  }

  async scrollAllCustomersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.allCustomers));
  }

  async longPressModules(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.modules));
  }

  async expectModulesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.modules), timeoutMs);
  }

  async expectModulesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.modules), expected, timeoutMs);
  }

  async expectModulesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.modules), substring, timeoutMs);
  }

  async expectModulesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.modules), value, timeoutMs);
  }

  async expectModulesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.modules), timeoutMs);
  }

  async expectModulesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.modules), timeoutMs);
  }

  async expectModulesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.modules), timeoutMs);
  }

  async expectModulesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.modules), timeoutMs);
  }

  async expectModulesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.modules), timeoutMs);
  }

  async expectModulesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.modules), count, timeoutMs);
  }

  async scrollModulesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.modules));
  }

  async doubleClickNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.new));
  }

  async longPressNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.new));
  }

  async expectNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.new), timeoutMs);
  }

  async expectNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.new), expected, timeoutMs);
  }

  async expectNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.new), substring, timeoutMs);
  }

  async expectNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.new), value, timeoutMs);
  }

  async expectNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.new), timeoutMs);
  }

  async expectNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.new), timeoutMs);
  }

  async expectNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.new), timeoutMs);
  }

  async expectNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.new), timeoutMs);
  }

  async expectNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.new), timeoutMs);
  }

  async expectNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.new), count, timeoutMs);
  }

  async scrollNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.new));
  }

  async typeTextDynamicHeaderAccountNum(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), value);
  }

  async expectDynamicHeaderAccountNumHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), expected, timeoutMs);
  }

  async expectDynamicHeaderAccountNumContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), substring, timeoutMs);
  }

  async expectDynamicHeaderAccountNumValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), value, timeoutMs);
  }

  async expectDynamicHeaderAccountNumEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), timeoutMs);
  }

  async expectDynamicHeaderAccountNumCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum), count, timeoutMs);
  }

  async scrollDynamicHeaderAccountNumIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.dynamicHeaderAccountNum));
  }

  async typeTextOrgName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.orgName), value);
  }

  async expectOrgNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.orgName), timeoutMs);
  }

  async expectOrgNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.orgName), expected, timeoutMs);
  }

  async expectOrgNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.orgName), substring, timeoutMs);
  }

  async expectOrgNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.orgName), value, timeoutMs);
  }

  async expectOrgNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.orgName), timeoutMs);
  }

  async expectOrgNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.orgName), timeoutMs);
  }

  async expectOrgNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.orgName), timeoutMs);
  }

  async expectOrgNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.orgName), timeoutMs);
  }

  async expectOrgNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.orgName), timeoutMs);
  }

  async expectOrgNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.orgName), count, timeoutMs);
  }

  async scrollOrgNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.orgName));
  }

  async typeTextDynamicDetailCustGroup(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), value);
  }

  async expectDynamicDetailCustGroupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), expected, timeoutMs);
  }

  async expectDynamicDetailCustGroupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), substring, timeoutMs);
  }

  async expectDynamicDetailCustGroupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), value, timeoutMs);
  }

  async expectDynamicDetailCustGroupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), timeoutMs);
  }

  async expectDynamicDetailCustGroupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.dynamicDetailCustGroup), count, timeoutMs);
  }

  async scrollDynamicDetailCustGroupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.dynamicDetailCustGroup));
  }

  async doubleClickSave(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.save));
  }

  async longPressSave(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.save));
  }

  async expectSaveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.save), timeoutMs);
  }

  async expectSaveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.save), expected, timeoutMs);
  }

  async expectSaveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.save), substring, timeoutMs);
  }

  async expectSaveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.save), value, timeoutMs);
  }

  async expectSaveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.save), timeoutMs);
  }

  async expectSaveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.save), timeoutMs);
  }

  async expectSaveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.save), timeoutMs);
  }

  async expectSaveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.save), timeoutMs);
  }

  async expectSaveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.save), timeoutMs);
  }

  async expectSaveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.save), count, timeoutMs);
  }

  async scrollSaveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.save));
  }

}
