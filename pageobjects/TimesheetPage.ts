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

export class TimesheetPage {
  private static readonly L = {
    export: { strategy: 'role' as const, value: 'Export', role: 'button', actionKind: 'button' as const },
    searchFilter: { strategy: 'text' as const, value: 'Search & Filter', actionKind: 'text' as const },
    projectId: { strategy: 'css' as const, value: '#projectId[name="projectId"]', actionKind: 'combobox' as const },
    selectProject: { strategy: 'text' as const, value: 'Select Project', actionKind: 'generic' as const },
    selectProject2: { strategy: 'css' as const, value: '#select2-projectId-container', actionKind: 'generic' as const },
    fromDate: { strategy: 'css' as const, value: '#from_date[name="from_date"]', actionKind: 'textbox' as const },
    toDate: { strategy: 'css' as const, value: '#to_date[name="to_date"]', actionKind: 'textbox' as const },
    status: { strategy: 'css' as const, value: '#status[name="status"]', actionKind: 'combobox' as const },
    selectStatus: { strategy: 'text' as const, value: 'Select Status', actionKind: 'generic' as const },
    selectStatus2: { strategy: 'css' as const, value: '#select2-status-container', actionKind: 'generic' as const },
    search: { strategy: 'css' as const, value: '#search-button', actionKind: 'button' as const },
    reset: { strategy: 'css' as const, value: '#reset-button', actionKind: 'button' as const },
    project: { strategy: 'text' as const, value: 'Project', actionKind: 'text' as const },
    date: { strategy: 'text' as const, value: 'Date', actionKind: 'text' as const },
    category: { strategy: 'text' as const, value: 'Category', actionKind: 'text' as const },
    taskDetail: { strategy: 'text' as const, value: 'Task Detail', actionKind: 'text' as const },
    totalHour: { strategy: 'text' as const, value: 'Total Hour', actionKind: 'text' as const },
    status2: { strategy: 'text' as const, value: 'Status', actionKind: 'text' as const },
    action: { strategy: 'text' as const, value: 'Action', actionKind: 'text' as const },
    buttonButton2: { strategy: 'role' as const, value: '2', role: 'button', actionKind: 'button' as const },
    buttonButton3: { strategy: 'role' as const, value: '3', role: 'button', actionKind: 'button' as const },
    buttonButton4: { strategy: 'role' as const, value: '4', role: 'button', actionKind: 'button' as const },
    buttonButton5: { strategy: 'role' as const, value: '5', role: 'button', actionKind: 'button' as const },
    buttonButton6: { strategy: 'role' as const, value: '6', role: 'button', actionKind: 'button' as const },
    element: { strategy: 'text' as const, value: '...', actionKind: 'text' as const },
    buttonButton7: { strategy: 'role' as const, value: '59', role: 'button', actionKind: 'button' as const },
    buttonButton8: { strategy: 'role' as const, value: '60', role: 'button', actionKind: 'button' as const },
    next: { strategy: 'label' as const, value: 'Next »', actionKind: 'button' as const },
    BreezingMinds: { strategy: 'text' as const, value: '2026 © BreezingMinds', actionKind: 'text' as const },
    breezingMinds: { strategy: 'css' as const, value: '[title="BreezingMinds"]', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickExport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.export));
  }

  async doubleClickExport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.export));
  }

  async expectExportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.export), timeoutMs);
  }

  async expectExportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.export), timeoutMs);
  }

  async expectExportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.export), timeoutMs);
  }

  async expectExportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.export), timeoutMs);
  }

  async expectExportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.export), expected, timeoutMs);
  }

  async expectExportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.export), substring, timeoutMs);
  }

  async scrollExportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.export));
  }

  async getInnerTextSearchFilter(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.searchFilter));
  }

  async expectSearchFilterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.searchFilter), timeoutMs);
  }

  async expectSearchFilterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.searchFilter), timeoutMs);
  }

  async expectSearchFilterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.searchFilter), expected, timeoutMs);
  }

  async expectSearchFilterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.searchFilter), substring, timeoutMs);
  }

  async scrollSearchFilterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.searchFilter));
  }

  async selectProjectId(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, TimesheetPage.L.projectId), value);
  }

  async expectProjectIdVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.projectId), timeoutMs);
  }

  async expectProjectIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.projectId), timeoutMs);
  }

  async expectProjectIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.projectId), timeoutMs);
  }

  async expectProjectIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.projectId), timeoutMs);
  }

  async expectProjectIdValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.projectId), expected, timeoutMs);
  }

  async expectProjectIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.projectId), timeoutMs);
  }

  async scrollProjectIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.projectId));
  }

  async clickSelectProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.selectProject));
  }

  async doubleClickSelectProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.selectProject));
  }

  async expectSelectProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.selectProject), expected, timeoutMs);
  }

  async expectSelectProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.selectProject), substring, timeoutMs);
  }

  async scrollSelectProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.selectProject));
  }

  async clickSelectProject2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.selectProject2));
  }

  async doubleClickSelectProject2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.selectProject2));
  }

  async expectSelectProject2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.selectProject2), expected, timeoutMs);
  }

  async expectSelectProject2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.selectProject2), substring, timeoutMs);
  }

  async scrollSelectProject2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.selectProject2));
  }

  async fillFromDate(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, TimesheetPage.L.fromDate), value);
  }

  async clearFromDate(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, TimesheetPage.L.fromDate));
  }

  async typeTextFromDate(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, TimesheetPage.L.fromDate), value);
  }

  async expectFromDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.fromDate), timeoutMs);
  }

  async expectFromDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.fromDate), timeoutMs);
  }

  async expectFromDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.fromDate), timeoutMs);
  }

  async expectFromDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.fromDate), timeoutMs);
  }

  async expectFromDateValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.fromDate), expected, timeoutMs);
  }

  async expectFromDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.fromDate), timeoutMs);
  }

  async scrollFromDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.fromDate));
  }

  async fillToDate(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, TimesheetPage.L.toDate), value);
  }

  async clearToDate(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, TimesheetPage.L.toDate));
  }

  async typeTextToDate(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, TimesheetPage.L.toDate), value);
  }

  async expectToDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.toDate), timeoutMs);
  }

  async expectToDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.toDate), timeoutMs);
  }

  async expectToDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.toDate), timeoutMs);
  }

  async expectToDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.toDate), timeoutMs);
  }

  async expectToDateValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.toDate), expected, timeoutMs);
  }

  async expectToDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.toDate), timeoutMs);
  }

  async scrollToDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.toDate));
  }

  async selectStatus(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, TimesheetPage.L.status), value);
  }

  async expectStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.status), timeoutMs);
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.status), timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.status), timeoutMs);
  }

  async expectStatusValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.status), expected, timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.status), timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.status));
  }

  async clickSelectStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.selectStatus));
  }

  async doubleClickSelectStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.selectStatus));
  }

  async expectSelectStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.selectStatus), timeoutMs);
  }

  async expectSelectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.selectStatus), timeoutMs);
  }

  async expectSelectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.selectStatus), timeoutMs);
  }

  async expectSelectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.selectStatus), timeoutMs);
  }

  async expectSelectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.selectStatus), expected, timeoutMs);
  }

  async expectSelectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.selectStatus), substring, timeoutMs);
  }

  async scrollSelectStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.selectStatus));
  }

  async clickSelectStatus2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.selectStatus2));
  }

  async doubleClickSelectStatus2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.selectStatus2));
  }

  async expectSelectStatus2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.selectStatus2), timeoutMs);
  }

  async expectSelectStatus2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.selectStatus2), timeoutMs);
  }

  async expectSelectStatus2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.selectStatus2), timeoutMs);
  }

  async expectSelectStatus2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.selectStatus2), timeoutMs);
  }

  async expectSelectStatus2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.selectStatus2), expected, timeoutMs);
  }

  async expectSelectStatus2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.selectStatus2), substring, timeoutMs);
  }

  async scrollSelectStatus2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.selectStatus2));
  }

  async clickSearch(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.search));
  }

  async doubleClickSearch(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.search), timeoutMs);
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.search), timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.search), substring, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.search));
  }

  async clickReset(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.reset));
  }

  async doubleClickReset(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.reset));
  }

  async expectResetVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.reset), timeoutMs);
  }

  async expectResetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.reset), timeoutMs);
  }

  async expectResetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.reset), timeoutMs);
  }

  async expectResetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.reset), timeoutMs);
  }

  async expectResetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.reset), expected, timeoutMs);
  }

  async expectResetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.reset), substring, timeoutMs);
  }

  async scrollResetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.reset));
  }

  async getInnerTextProject(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.project));
  }

  async expectProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.project), timeoutMs);
  }

  async expectProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.project), timeoutMs);
  }

  async expectProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.project), expected, timeoutMs);
  }

  async expectProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.project), substring, timeoutMs);
  }

  async scrollProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.project));
  }

  async getInnerTextDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.date));
  }

  async expectDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.date), timeoutMs);
  }

  async expectDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.date), timeoutMs);
  }

  async expectDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.date), expected, timeoutMs);
  }

  async expectDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.date), substring, timeoutMs);
  }

  async scrollDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.date));
  }

  async getInnerTextCategory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.category));
  }

  async expectCategoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.category), timeoutMs);
  }

  async expectCategoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.category), timeoutMs);
  }

  async expectCategoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.category), expected, timeoutMs);
  }

  async expectCategoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.category), substring, timeoutMs);
  }

  async scrollCategoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.category));
  }

  async getInnerTextTaskDetail(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.taskDetail));
  }

  async expectTaskDetailVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.taskDetail), timeoutMs);
  }

  async expectTaskDetailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.taskDetail), timeoutMs);
  }

  async expectTaskDetailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.taskDetail), expected, timeoutMs);
  }

  async expectTaskDetailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.taskDetail), substring, timeoutMs);
  }

  async scrollTaskDetailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.taskDetail));
  }

  async getInnerTextTotalHour(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.totalHour));
  }

  async expectTotalHourVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.totalHour), timeoutMs);
  }

  async expectTotalHourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.totalHour), timeoutMs);
  }

  async expectTotalHourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.totalHour), expected, timeoutMs);
  }

  async expectTotalHourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.totalHour), substring, timeoutMs);
  }

  async scrollTotalHourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.totalHour));
  }

  async getInnerTextStatus2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.status2));
  }

  async expectStatus2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.status2), timeoutMs);
  }

  async expectStatus2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.status2), timeoutMs);
  }

  async expectStatus2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.status2), expected, timeoutMs);
  }

  async expectStatus2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.status2), substring, timeoutMs);
  }

  async scrollStatus2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.status2));
  }

  async getInnerTextAction(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.action));
  }

  async expectActionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.action), timeoutMs);
  }

  async expectActionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.action), timeoutMs);
  }

  async expectActionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.action), expected, timeoutMs);
  }

  async expectActionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.action), substring, timeoutMs);
  }

  async scrollActionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.action));
  }

  async clickButtonButton2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton2));
  }

  async doubleClickButtonButton2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton2));
  }

  async expectButtonButton2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.buttonButton2), timeoutMs);
  }

  async expectButtonButton2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.buttonButton2), timeoutMs);
  }

  async expectButtonButton2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.buttonButton2), timeoutMs);
  }

  async expectButtonButton2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.buttonButton2), timeoutMs);
  }

  async expectButtonButton2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.buttonButton2), expected, timeoutMs);
  }

  async expectButtonButton2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.buttonButton2), substring, timeoutMs);
  }

  async scrollButtonButton2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton2));
  }

  async clickButtonButton3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton3));
  }

  async doubleClickButtonButton3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton3));
  }

  async expectButtonButton3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.buttonButton3), timeoutMs);
  }

  async expectButtonButton3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.buttonButton3), timeoutMs);
  }

  async expectButtonButton3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.buttonButton3), timeoutMs);
  }

  async expectButtonButton3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.buttonButton3), timeoutMs);
  }

  async expectButtonButton3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.buttonButton3), expected, timeoutMs);
  }

  async expectButtonButton3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.buttonButton3), substring, timeoutMs);
  }

  async scrollButtonButton3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton3));
  }

  async clickButtonButton4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton4));
  }

  async doubleClickButtonButton4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton4));
  }

  async expectButtonButton4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.buttonButton4), timeoutMs);
  }

  async expectButtonButton4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.buttonButton4), timeoutMs);
  }

  async expectButtonButton4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.buttonButton4), timeoutMs);
  }

  async expectButtonButton4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.buttonButton4), timeoutMs);
  }

  async expectButtonButton4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.buttonButton4), expected, timeoutMs);
  }

  async expectButtonButton4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.buttonButton4), substring, timeoutMs);
  }

  async scrollButtonButton4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton4));
  }

  async clickButtonButton5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton5));
  }

  async doubleClickButtonButton5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton5));
  }

  async expectButtonButton5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.buttonButton5), timeoutMs);
  }

  async expectButtonButton5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.buttonButton5), timeoutMs);
  }

  async expectButtonButton5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.buttonButton5), timeoutMs);
  }

  async expectButtonButton5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.buttonButton5), timeoutMs);
  }

  async expectButtonButton5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.buttonButton5), expected, timeoutMs);
  }

  async expectButtonButton5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.buttonButton5), substring, timeoutMs);
  }

  async scrollButtonButton5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton5));
  }

  async clickButtonButton6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton6));
  }

  async doubleClickButtonButton6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton6));
  }

  async expectButtonButton6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.buttonButton6), timeoutMs);
  }

  async expectButtonButton6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.buttonButton6), timeoutMs);
  }

  async expectButtonButton6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.buttonButton6), timeoutMs);
  }

  async expectButtonButton6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.buttonButton6), timeoutMs);
  }

  async expectButtonButton6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.buttonButton6), expected, timeoutMs);
  }

  async expectButtonButton6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.buttonButton6), substring, timeoutMs);
  }

  async scrollButtonButton6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton6));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.element));
  }

  async clickButtonButton7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton7));
  }

  async doubleClickButtonButton7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton7));
  }

  async expectButtonButton7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.buttonButton7), timeoutMs);
  }

  async expectButtonButton7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.buttonButton7), timeoutMs);
  }

  async expectButtonButton7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.buttonButton7), timeoutMs);
  }

  async expectButtonButton7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.buttonButton7), timeoutMs);
  }

  async expectButtonButton7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.buttonButton7), expected, timeoutMs);
  }

  async expectButtonButton7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.buttonButton7), substring, timeoutMs);
  }

  async scrollButtonButton7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton7));
  }

  async clickButtonButton8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton8));
  }

  async doubleClickButtonButton8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton8));
  }

  async expectButtonButton8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.buttonButton8), timeoutMs);
  }

  async expectButtonButton8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.buttonButton8), timeoutMs);
  }

  async expectButtonButton8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.buttonButton8), timeoutMs);
  }

  async expectButtonButton8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.buttonButton8), timeoutMs);
  }

  async expectButtonButton8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.buttonButton8), expected, timeoutMs);
  }

  async expectButtonButton8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.buttonButton8), substring, timeoutMs);
  }

  async scrollButtonButton8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton8));
  }

  async clickNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.next));
  }

  async doubleClickNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.next));
  }

  async expectNextVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.next), timeoutMs);
  }

  async expectNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.next), timeoutMs);
  }

  async expectNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.next), timeoutMs);
  }

  async expectNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.next), timeoutMs);
  }

  async expectNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.next), expected, timeoutMs);
  }

  async expectNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.next), substring, timeoutMs);
  }

  async scrollNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.next));
  }

  async getInnerTextBreezingMinds(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetPage.L.BreezingMinds));
  }

  async expectBreezingMindsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.BreezingMinds), expected, timeoutMs);
  }

  async expectBreezingMindsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.BreezingMinds), substring, timeoutMs);
  }

  async scrollBreezingMindsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.BreezingMinds));
  }

  async clickBreezingMinds(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.breezingMinds));
  }

  async doubleClickBreezingMinds(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.breezingMinds));
  }

  async expectBreezingMindsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.breezingMinds), expected, timeoutMs);
  }

  async expectBreezingMindsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.breezingMinds), substring, timeoutMs);
  }

  async scrollBreezingMindsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetPage.L.breezingMinds));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async longPressExport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.export));
  }

  async expectExportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.export), value, timeoutMs);
  }

  async expectExportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.export), timeoutMs);
  }

  async expectExportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.export), timeoutMs);
  }

  async expectExportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.export), timeoutMs);
  }

  async expectExportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.export), count, timeoutMs);
  }

  async clickSearchFilter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.searchFilter));
  }

  async doubleClickSearchFilter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.searchFilter));
  }

  async longPressSearchFilter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.searchFilter));
  }

  async expectSearchFilterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.searchFilter), value, timeoutMs);
  }

  async expectSearchFilterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.searchFilter), timeoutMs);
  }

  async expectSearchFilterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.searchFilter), timeoutMs);
  }

  async expectSearchFilterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.searchFilter), timeoutMs);
  }

  async expectSearchFilterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.searchFilter), timeoutMs);
  }

  async expectSearchFilterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.searchFilter), timeoutMs);
  }

  async expectSearchFilterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.searchFilter), count, timeoutMs);
  }

  async expectProjectIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.projectId), expected, timeoutMs);
  }

  async expectProjectIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.projectId), substring, timeoutMs);
  }

  async expectProjectIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.projectId), timeoutMs);
  }

  async expectProjectIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.projectId), timeoutMs);
  }

  async expectProjectIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.projectId), count, timeoutMs);
  }

  async longPressSelectProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.selectProject));
  }

  async expectSelectProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.selectProject), value, timeoutMs);
  }

  async expectSelectProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.selectProject), count, timeoutMs);
  }

  async longPressSelectProject2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.selectProject2));
  }

  async expectSelectProject2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.selectProject2), value, timeoutMs);
  }

  async expectSelectProject2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.selectProject2), count, timeoutMs);
  }

  async expectFromDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.fromDate), expected, timeoutMs);
  }

  async expectFromDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.fromDate), substring, timeoutMs);
  }

  async expectFromDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.fromDate), timeoutMs);
  }

  async expectFromDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.fromDate), timeoutMs);
  }

  async expectFromDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.fromDate), count, timeoutMs);
  }

  async expectToDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.toDate), expected, timeoutMs);
  }

  async expectToDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.toDate), substring, timeoutMs);
  }

  async expectToDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.toDate), timeoutMs);
  }

  async expectToDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.toDate), timeoutMs);
  }

  async expectToDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.toDate), count, timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetPage.L.status), substring, timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.status), count, timeoutMs);
  }

  async longPressSelectStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.selectStatus));
  }

  async expectSelectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.selectStatus), value, timeoutMs);
  }

  async expectSelectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.selectStatus), timeoutMs);
  }

  async expectSelectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.selectStatus), timeoutMs);
  }

  async expectSelectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.selectStatus), timeoutMs);
  }

  async expectSelectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.selectStatus), count, timeoutMs);
  }

  async longPressSelectStatus2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.selectStatus2));
  }

  async expectSelectStatus2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.selectStatus2), value, timeoutMs);
  }

  async expectSelectStatus2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.selectStatus2), timeoutMs);
  }

  async expectSelectStatus2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.selectStatus2), timeoutMs);
  }

  async expectSelectStatus2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.selectStatus2), timeoutMs);
  }

  async expectSelectStatus2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.selectStatus2), count, timeoutMs);
  }

  async longPressSearch(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.search));
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.search), value, timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.search), count, timeoutMs);
  }

  async longPressReset(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.reset));
  }

  async expectResetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.reset), value, timeoutMs);
  }

  async expectResetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.reset), timeoutMs);
  }

  async expectResetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.reset), timeoutMs);
  }

  async expectResetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.reset), timeoutMs);
  }

  async expectResetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.reset), count, timeoutMs);
  }

  async clickProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.project));
  }

  async doubleClickProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.project));
  }

  async longPressProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.project));
  }

  async expectProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.project), value, timeoutMs);
  }

  async expectProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.project), timeoutMs);
  }

  async expectProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.project), timeoutMs);
  }

  async expectProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.project), timeoutMs);
  }

  async expectProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.project), timeoutMs);
  }

  async expectProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.project), timeoutMs);
  }

  async expectProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.project), count, timeoutMs);
  }

  async clickDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.date));
  }

  async doubleClickDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.date));
  }

  async longPressDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.date));
  }

  async expectDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.date), value, timeoutMs);
  }

  async expectDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.date), timeoutMs);
  }

  async expectDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.date), timeoutMs);
  }

  async expectDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.date), timeoutMs);
  }

  async expectDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.date), timeoutMs);
  }

  async expectDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.date), timeoutMs);
  }

  async expectDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.date), count, timeoutMs);
  }

  async clickCategory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.category));
  }

  async doubleClickCategory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.category));
  }

  async longPressCategory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.category));
  }

  async expectCategoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.category), value, timeoutMs);
  }

  async expectCategoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.category), timeoutMs);
  }

  async expectCategoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.category), timeoutMs);
  }

  async expectCategoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.category), timeoutMs);
  }

  async expectCategoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.category), timeoutMs);
  }

  async expectCategoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.category), timeoutMs);
  }

  async expectCategoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.category), count, timeoutMs);
  }

  async clickTaskDetail(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.taskDetail));
  }

  async doubleClickTaskDetail(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.taskDetail));
  }

  async longPressTaskDetail(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.taskDetail));
  }

  async expectTaskDetailValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.taskDetail), value, timeoutMs);
  }

  async expectTaskDetailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.taskDetail), timeoutMs);
  }

  async expectTaskDetailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.taskDetail), timeoutMs);
  }

  async expectTaskDetailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.taskDetail), timeoutMs);
  }

  async expectTaskDetailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.taskDetail), timeoutMs);
  }

  async expectTaskDetailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.taskDetail), timeoutMs);
  }

  async expectTaskDetailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.taskDetail), count, timeoutMs);
  }

  async clickTotalHour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.totalHour));
  }

  async doubleClickTotalHour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.totalHour));
  }

  async longPressTotalHour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.totalHour));
  }

  async expectTotalHourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.totalHour), value, timeoutMs);
  }

  async expectTotalHourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.totalHour), timeoutMs);
  }

  async expectTotalHourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.totalHour), timeoutMs);
  }

  async expectTotalHourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.totalHour), timeoutMs);
  }

  async expectTotalHourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.totalHour), timeoutMs);
  }

  async expectTotalHourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.totalHour), timeoutMs);
  }

  async expectTotalHourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.totalHour), count, timeoutMs);
  }

  async clickStatus2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.status2));
  }

  async doubleClickStatus2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.status2));
  }

  async longPressStatus2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.status2));
  }

  async expectStatus2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.status2), value, timeoutMs);
  }

  async expectStatus2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.status2), timeoutMs);
  }

  async expectStatus2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.status2), timeoutMs);
  }

  async expectStatus2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.status2), timeoutMs);
  }

  async expectStatus2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.status2), timeoutMs);
  }

  async expectStatus2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.status2), timeoutMs);
  }

  async expectStatus2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.status2), count, timeoutMs);
  }

  async clickAction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.action));
  }

  async doubleClickAction(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.action));
  }

  async longPressAction(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.action));
  }

  async expectActionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.action), value, timeoutMs);
  }

  async expectActionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.action), timeoutMs);
  }

  async expectActionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.action), timeoutMs);
  }

  async expectActionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.action), timeoutMs);
  }

  async expectActionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.action), timeoutMs);
  }

  async expectActionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.action), timeoutMs);
  }

  async expectActionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.action), count, timeoutMs);
  }

  async longPressButtonButton2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton2));
  }

  async expectButtonButton2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.buttonButton2), value, timeoutMs);
  }

  async expectButtonButton2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.buttonButton2), timeoutMs);
  }

  async expectButtonButton2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.buttonButton2), timeoutMs);
  }

  async expectButtonButton2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.buttonButton2), timeoutMs);
  }

  async expectButtonButton2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.buttonButton2), count, timeoutMs);
  }

  async longPressButtonButton3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton3));
  }

  async expectButtonButton3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.buttonButton3), value, timeoutMs);
  }

  async expectButtonButton3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.buttonButton3), timeoutMs);
  }

  async expectButtonButton3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.buttonButton3), timeoutMs);
  }

  async expectButtonButton3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.buttonButton3), timeoutMs);
  }

  async expectButtonButton3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.buttonButton3), count, timeoutMs);
  }

  async longPressButtonButton4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton4));
  }

  async expectButtonButton4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.buttonButton4), value, timeoutMs);
  }

  async expectButtonButton4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.buttonButton4), timeoutMs);
  }

  async expectButtonButton4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.buttonButton4), timeoutMs);
  }

  async expectButtonButton4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.buttonButton4), timeoutMs);
  }

  async expectButtonButton4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.buttonButton4), count, timeoutMs);
  }

  async longPressButtonButton5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton5));
  }

  async expectButtonButton5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.buttonButton5), value, timeoutMs);
  }

  async expectButtonButton5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.buttonButton5), timeoutMs);
  }

  async expectButtonButton5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.buttonButton5), timeoutMs);
  }

  async expectButtonButton5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.buttonButton5), timeoutMs);
  }

  async expectButtonButton5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.buttonButton5), count, timeoutMs);
  }

  async longPressButtonButton6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton6));
  }

  async expectButtonButton6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.buttonButton6), value, timeoutMs);
  }

  async expectButtonButton6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.buttonButton6), timeoutMs);
  }

  async expectButtonButton6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.buttonButton6), timeoutMs);
  }

  async expectButtonButton6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.buttonButton6), timeoutMs);
  }

  async expectButtonButton6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.buttonButton6), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.element), count, timeoutMs);
  }

  async longPressButtonButton7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton7));
  }

  async expectButtonButton7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.buttonButton7), value, timeoutMs);
  }

  async expectButtonButton7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.buttonButton7), timeoutMs);
  }

  async expectButtonButton7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.buttonButton7), timeoutMs);
  }

  async expectButtonButton7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.buttonButton7), timeoutMs);
  }

  async expectButtonButton7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.buttonButton7), count, timeoutMs);
  }

  async longPressButtonButton8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.buttonButton8));
  }

  async expectButtonButton8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.buttonButton8), value, timeoutMs);
  }

  async expectButtonButton8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.buttonButton8), timeoutMs);
  }

  async expectButtonButton8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.buttonButton8), timeoutMs);
  }

  async expectButtonButton8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.buttonButton8), timeoutMs);
  }

  async expectButtonButton8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.buttonButton8), count, timeoutMs);
  }

  async longPressNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.next));
  }

  async expectNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.next), value, timeoutMs);
  }

  async expectNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.next), timeoutMs);
  }

  async expectNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.next), timeoutMs);
  }

  async expectNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.next), timeoutMs);
  }

  async expectNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.next), count, timeoutMs);
  }

  async longPressBreezingMinds(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetPage.L.BreezingMinds));
  }

  async expectBreezingMindsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetPage.L.BreezingMinds), value, timeoutMs);
  }

  async expectBreezingMindsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetPage.L.BreezingMinds), count, timeoutMs);
  }

}
