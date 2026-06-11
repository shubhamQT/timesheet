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

export class TimesheetAddPage {
  private static readonly L = {
    home: { strategy: 'role' as const, value: 'Home', role: 'link', actionKind: 'link' as const },
    timesheetLink: { strategy: 'role' as const, value: 'Timesheet', role: 'link', actionKind: 'link' as const },
    fillTimesheet: { strategy: 'text' as const, value: 'Fill Timesheet', actionKind: 'text' as const },
    requestToUnlock: { strategy: 'css' as const, value: '#openTimesheetUnlockRequest', actionKind: 'button' as const },
    projectId: { strategy: 'css' as const, value: '#projectId[name="projectId"]', actionKind: 'combobox' as const },
    selectProject: { strategy: 'text' as const, value: 'Select Project', actionKind: 'generic' as const },
    selectProject2: { strategy: 'css' as const, value: '#select2-projectId-container', actionKind: 'generic' as const },
    date: { strategy: 'css' as const, value: '#date[name="date"]', actionKind: 'textbox' as const },
    timesheet1CategoryId: { strategy: 'css' as const, value: '#categoryId[name="timesheet[1][categoryId]"]', actionKind: 'combobox' as const },
    selectCategory: { strategy: 'text' as const, value: 'Select Category', actionKind: 'generic' as const },
    selectCategory2: { strategy: 'css' as const, value: '#select2-categoryId-container', actionKind: 'generic' as const },
    timesheet1TotalHours: { strategy: 'css' as const, value: '#total_hours[name="timesheet[1][total_hours]"]', actionKind: 'textbox' as const },
    timesheet1TaskDetail: { strategy: 'css' as const, value: '#task_detail[name="timesheet[1][task_detail]"]', actionKind: 'textbox' as const },
    addmoretimesheet: { strategy: 'css' as const, value: '#addMoreTimesheetBtn', actionKind: 'button' as const },
    submit: { strategy: 'css' as const, value: '#bntSaveOfficialInfo', actionKind: 'button' as const },
    BreezingMinds: { strategy: 'text' as const, value: '2026 © BreezingMinds', actionKind: 'text' as const },
    breezingMinds: { strategy: 'css' as const, value: '[title="BreezingMinds"]', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.home));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.home), timeoutMs);
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.home), substring, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.home));
  }

  async clickTimesheetLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheetLink));
  }

  async doubleClickTimesheetLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheetLink));
  }

  async expectTimesheetLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.timesheetLink), timeoutMs);
  }

  async expectTimesheetLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.timesheetLink), timeoutMs);
  }

  async expectTimesheetLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.timesheetLink), expected, timeoutMs);
  }

  async expectTimesheetLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.timesheetLink), substring, timeoutMs);
  }

  async scrollTimesheetLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheetLink));
  }

  async getInnerTextFillTimesheet(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetAddPage.L.fillTimesheet));
  }

  async expectFillTimesheetVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), expected, timeoutMs);
  }

  async expectFillTimesheetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), substring, timeoutMs);
  }

  async scrollFillTimesheetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.fillTimesheet));
  }

  async clickRequestToUnlock(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.requestToUnlock));
  }

  async doubleClickRequestToUnlock(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.requestToUnlock));
  }

  async expectRequestToUnlockVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), timeoutMs);
  }

  async expectRequestToUnlockHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), timeoutMs);
  }

  async expectRequestToUnlockEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), timeoutMs);
  }

  async expectRequestToUnlockDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), timeoutMs);
  }

  async expectRequestToUnlockText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), expected, timeoutMs);
  }

  async expectRequestToUnlockContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), substring, timeoutMs);
  }

  async scrollRequestToUnlockIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.requestToUnlock));
  }

  async selectProjectId(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, TimesheetAddPage.L.projectId), value);
  }

  async expectProjectIdVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.projectId), timeoutMs);
  }

  async expectProjectIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.projectId), timeoutMs);
  }

  async expectProjectIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.projectId), timeoutMs);
  }

  async expectProjectIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.projectId), timeoutMs);
  }

  async expectProjectIdValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.projectId), expected, timeoutMs);
  }

  async expectProjectIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.projectId), timeoutMs);
  }

  async scrollProjectIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.projectId));
  }

  async clickSelectProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectProject));
  }

  async doubleClickSelectProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectProject));
  }

  async expectSelectProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.selectProject), expected, timeoutMs);
  }

  async expectSelectProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.selectProject), substring, timeoutMs);
  }

  async scrollSelectProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectProject));
  }

  async clickSelectProject2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectProject2));
  }

  async doubleClickSelectProject2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectProject2));
  }

  async expectSelectProject2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.selectProject2), expected, timeoutMs);
  }

  async expectSelectProject2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.selectProject2), substring, timeoutMs);
  }

  async scrollSelectProject2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectProject2));
  }

  async fillDate(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, TimesheetAddPage.L.date), value);
  }

  async clearDate(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, TimesheetAddPage.L.date));
  }

  async typeTextDate(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, TimesheetAddPage.L.date), value);
  }

  async expectDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.date), timeoutMs);
  }

  async expectDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.date), timeoutMs);
  }

  async expectDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.date), timeoutMs);
  }

  async expectDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.date), timeoutMs);
  }

  async expectDateValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.date), expected, timeoutMs);
  }

  async expectDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.date), timeoutMs);
  }

  async scrollDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.date));
  }

  async selectTimesheet1CategoryId(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), value);
  }

  async expectTimesheet1CategoryIdVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), timeoutMs);
  }

  async expectTimesheet1CategoryIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), timeoutMs);
  }

  async expectTimesheet1CategoryIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), timeoutMs);
  }

  async expectTimesheet1CategoryIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), timeoutMs);
  }

  async expectTimesheet1CategoryIdValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), expected, timeoutMs);
  }

  async expectTimesheet1CategoryIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), timeoutMs);
  }

  async scrollTimesheet1CategoryIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId));
  }

  async clickSelectCategory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory));
  }

  async doubleClickSelectCategory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory));
  }

  async expectSelectCategoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory), timeoutMs);
  }

  async expectSelectCategoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.selectCategory), timeoutMs);
  }

  async expectSelectCategoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.selectCategory), timeoutMs);
  }

  async expectSelectCategoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.selectCategory), timeoutMs);
  }

  async expectSelectCategoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.selectCategory), expected, timeoutMs);
  }

  async expectSelectCategoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.selectCategory), substring, timeoutMs);
  }

  async scrollSelectCategoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory));
  }

  async clickSelectCategory2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory2));
  }

  async doubleClickSelectCategory2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory2));
  }

  async expectSelectCategory2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory2), timeoutMs);
  }

  async expectSelectCategory2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.selectCategory2), timeoutMs);
  }

  async expectSelectCategory2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.selectCategory2), timeoutMs);
  }

  async expectSelectCategory2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.selectCategory2), timeoutMs);
  }

  async expectSelectCategory2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.selectCategory2), expected, timeoutMs);
  }

  async expectSelectCategory2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.selectCategory2), substring, timeoutMs);
  }

  async scrollSelectCategory2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory2));
  }

  async fillTimesheet1TotalHours(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), value);
  }

  async clearTimesheet1TotalHours(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours));
  }

  async typeTextTimesheet1TotalHours(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), value);
  }

  async expectTimesheet1TotalHoursVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), timeoutMs);
  }

  async expectTimesheet1TotalHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), timeoutMs);
  }

  async expectTimesheet1TotalHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), timeoutMs);
  }

  async expectTimesheet1TotalHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), timeoutMs);
  }

  async expectTimesheet1TotalHoursValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), expected, timeoutMs);
  }

  async expectTimesheet1TotalHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), timeoutMs);
  }

  async scrollTimesheet1TotalHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours));
  }

  async fillTimesheet1TaskDetail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), value);
  }

  async clearTimesheet1TaskDetail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail));
  }

  async typeTextTimesheet1TaskDetail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), value);
  }

  async expectTimesheet1TaskDetailVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), timeoutMs);
  }

  async expectTimesheet1TaskDetailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), timeoutMs);
  }

  async expectTimesheet1TaskDetailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), timeoutMs);
  }

  async expectTimesheet1TaskDetailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), timeoutMs);
  }

  async expectTimesheet1TaskDetailValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), expected, timeoutMs);
  }

  async expectTimesheet1TaskDetailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), timeoutMs);
  }

  async scrollTimesheet1TaskDetailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail));
  }

  async clickAddmoretimesheet(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet));
  }

  async doubleClickAddmoretimesheet(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet));
  }

  async expectAddmoretimesheetVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), timeoutMs);
  }

  async expectAddmoretimesheetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), timeoutMs);
  }

  async expectAddmoretimesheetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), timeoutMs);
  }

  async expectAddmoretimesheetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), timeoutMs);
  }

  async expectAddmoretimesheetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), expected, timeoutMs);
  }

  async expectAddmoretimesheetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), substring, timeoutMs);
  }

  async scrollAddmoretimesheetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet));
  }

  async clickSubmit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.submit));
  }

  async doubleClickSubmit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.submit));
  }

  async expectSubmitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.submit), timeoutMs);
  }

  async expectSubmitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.submit), timeoutMs);
  }

  async expectSubmitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.submit), timeoutMs);
  }

  async expectSubmitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.submit), timeoutMs);
  }

  async expectSubmitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.submit), expected, timeoutMs);
  }

  async expectSubmitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.submit), substring, timeoutMs);
  }

  async scrollSubmitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.submit));
  }

  async getInnerTextBreezingMinds(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TimesheetAddPage.L.BreezingMinds));
  }

  async expectBreezingMindsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), expected, timeoutMs);
  }

  async expectBreezingMindsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), substring, timeoutMs);
  }

  async scrollBreezingMindsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.BreezingMinds));
  }

  async clickBreezingMinds(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.breezingMinds));
  }

  async doubleClickBreezingMinds(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.breezingMinds));
  }

  async expectBreezingMindsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TimesheetAddPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TimesheetAddPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.breezingMinds), expected, timeoutMs);
  }

  async expectBreezingMindsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.breezingMinds), substring, timeoutMs);
  }

  async scrollBreezingMindsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TimesheetAddPage.L.breezingMinds));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.home), count, timeoutMs);
  }

  async longPressTimesheetLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.timesheetLink));
  }

  async expectTimesheetLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.timesheetLink), value, timeoutMs);
  }

  async expectTimesheetLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.timesheetLink), timeoutMs);
  }

  async expectTimesheetLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.timesheetLink), timeoutMs);
  }

  async expectTimesheetLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.timesheetLink), timeoutMs);
  }

  async expectTimesheetLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.timesheetLink), timeoutMs);
  }

  async expectTimesheetLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.timesheetLink), timeoutMs);
  }

  async expectTimesheetLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.timesheetLink), count, timeoutMs);
  }

  async clickFillTimesheet(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TimesheetAddPage.L.fillTimesheet));
  }

  async doubleClickFillTimesheet(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TimesheetAddPage.L.fillTimesheet));
  }

  async longPressFillTimesheet(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.fillTimesheet));
  }

  async expectFillTimesheetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), value, timeoutMs);
  }

  async expectFillTimesheetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.fillTimesheet), count, timeoutMs);
  }

  async longPressRequestToUnlock(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.requestToUnlock));
  }

  async expectRequestToUnlockValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), value, timeoutMs);
  }

  async expectRequestToUnlockChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), timeoutMs);
  }

  async expectRequestToUnlockUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), timeoutMs);
  }

  async expectRequestToUnlockFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), timeoutMs);
  }

  async expectRequestToUnlockCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.requestToUnlock), count, timeoutMs);
  }

  async expectProjectIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.projectId), expected, timeoutMs);
  }

  async expectProjectIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.projectId), substring, timeoutMs);
  }

  async expectProjectIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.projectId), timeoutMs);
  }

  async expectProjectIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.projectId), timeoutMs);
  }

  async expectProjectIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.projectId), count, timeoutMs);
  }

  async longPressSelectProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectProject));
  }

  async expectSelectProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.selectProject), value, timeoutMs);
  }

  async expectSelectProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.selectProject), timeoutMs);
  }

  async expectSelectProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.selectProject), count, timeoutMs);
  }

  async longPressSelectProject2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectProject2));
  }

  async expectSelectProject2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.selectProject2), value, timeoutMs);
  }

  async expectSelectProject2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.selectProject2), timeoutMs);
  }

  async expectSelectProject2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.selectProject2), count, timeoutMs);
  }

  async expectDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.date), expected, timeoutMs);
  }

  async expectDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.date), substring, timeoutMs);
  }

  async expectDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.date), timeoutMs);
  }

  async expectDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.date), timeoutMs);
  }

  async expectDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.date), count, timeoutMs);
  }

  async expectTimesheet1CategoryIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), expected, timeoutMs);
  }

  async expectTimesheet1CategoryIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), substring, timeoutMs);
  }

  async expectTimesheet1CategoryIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), timeoutMs);
  }

  async expectTimesheet1CategoryIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), timeoutMs);
  }

  async expectTimesheet1CategoryIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.timesheet1CategoryId), count, timeoutMs);
  }

  async longPressSelectCategory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory));
  }

  async expectSelectCategoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.selectCategory), value, timeoutMs);
  }

  async expectSelectCategoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.selectCategory), timeoutMs);
  }

  async expectSelectCategoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.selectCategory), timeoutMs);
  }

  async expectSelectCategoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.selectCategory), timeoutMs);
  }

  async expectSelectCategoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.selectCategory), count, timeoutMs);
  }

  async longPressSelectCategory2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.selectCategory2));
  }

  async expectSelectCategory2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.selectCategory2), value, timeoutMs);
  }

  async expectSelectCategory2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.selectCategory2), timeoutMs);
  }

  async expectSelectCategory2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.selectCategory2), timeoutMs);
  }

  async expectSelectCategory2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.selectCategory2), timeoutMs);
  }

  async expectSelectCategory2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.selectCategory2), count, timeoutMs);
  }

  async expectTimesheet1TotalHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), expected, timeoutMs);
  }

  async expectTimesheet1TotalHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), substring, timeoutMs);
  }

  async expectTimesheet1TotalHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), timeoutMs);
  }

  async expectTimesheet1TotalHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), timeoutMs);
  }

  async expectTimesheet1TotalHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.timesheet1TotalHours), count, timeoutMs);
  }

  async expectTimesheet1TaskDetailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), expected, timeoutMs);
  }

  async expectTimesheet1TaskDetailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), substring, timeoutMs);
  }

  async expectTimesheet1TaskDetailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), timeoutMs);
  }

  async expectTimesheet1TaskDetailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), timeoutMs);
  }

  async expectTimesheet1TaskDetailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.timesheet1TaskDetail), count, timeoutMs);
  }

  async longPressAddmoretimesheet(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet));
  }

  async expectAddmoretimesheetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), value, timeoutMs);
  }

  async expectAddmoretimesheetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), timeoutMs);
  }

  async expectAddmoretimesheetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), timeoutMs);
  }

  async expectAddmoretimesheetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), timeoutMs);
  }

  async expectAddmoretimesheetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.addmoretimesheet), count, timeoutMs);
  }

  async longPressSubmit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.submit));
  }

  async expectSubmitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.submit), value, timeoutMs);
  }

  async expectSubmitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.submit), timeoutMs);
  }

  async expectSubmitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.submit), timeoutMs);
  }

  async expectSubmitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.submit), timeoutMs);
  }

  async expectSubmitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.submit), count, timeoutMs);
  }

  async longPressBreezingMinds(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TimesheetAddPage.L.BreezingMinds));
  }

  async expectBreezingMindsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), value, timeoutMs);
  }

  async expectBreezingMindsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TimesheetAddPage.L.BreezingMinds), count, timeoutMs);
  }

}
