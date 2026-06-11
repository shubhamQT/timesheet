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

export class DashboardPage {
  private static readonly L = {
    employeeSelfService: { strategy: 'role' as const, value: 'Employee Self Service', role: 'link', actionKind: 'link' as const },
    shubhamAnilBhele: { strategy: 'role' as const, value: 'Shubham Anil Bhele', role: 'link', actionKind: 'link' as const },
    dashboard: { strategy: 'css' as const, value: '[title="Dashboard"]', actionKind: 'link' as const },
    employeeDirectory: { strategy: 'css' as const, value: '[title="Employee Directory"]', actionKind: 'link' as const },
    myTeam: { strategy: 'css' as const, value: '[title="My Team"]', actionKind: 'link' as const },
    financeManagement: { strategy: 'css' as const, value: '[title="Finance Management"]', actionKind: 'link' as const },
    performanceReview: { strategy: 'css' as const, value: '[title="Performance Review"]', actionKind: 'link' as const },
    probationFeedback: { strategy: 'css' as const, value: '[title="Probation feedback"]', actionKind: 'link' as const },
    companyPolicy: { strategy: 'css' as const, value: '[title="Company Policy"]', actionKind: 'link' as const },
    helpDirectory: { strategy: 'css' as const, value: '[title="Help Directory"]', actionKind: 'link' as const },
    employeeChangeRequest: { strategy: 'css' as const, value: '[title="Employee Change Request"]', actionKind: 'link' as const },
    manageLeave: { strategy: 'css' as const, value: '[title="Manage Leave"]', actionKind: 'link' as const },
    manageTimesheet: { strategy: 'css' as const, value: '[title="Manage Timesheet"]', actionKind: 'link' as const },
    openPositions: { strategy: 'css' as const, value: '[title="Open Positions"]', actionKind: 'link' as const },
    referrals: { strategy: 'css' as const, value: '[title="Referrals"]', actionKind: 'link' as const },
    holidayCalendar: { strategy: 'css' as const, value: '[title="Holiday Calendar"]', actionKind: 'link' as const },
    logout: { strategy: 'css' as const, value: '#idLogout[title="Logout"]', actionKind: 'link' as const },
    hideNavigation: { strategy: 'css' as const, value: '[title="Hide Navigation"]', actionKind: 'link' as const },
    minifyNavigation: { strategy: 'css' as const, value: '[title="Minify Navigation"]', actionKind: 'link' as const },
    lockNavigation: { strategy: 'css' as const, value: '[title="Lock Navigation"]', actionKind: 'link' as const },
    myApps: { strategy: 'css' as const, value: '[title="My Apps"]', actionKind: 'link' as const },
    myProfile: { strategy: 'css' as const, value: '[title="My Profile"]', actionKind: 'link' as const },
    home: { strategy: 'role' as const, value: 'Home', role: 'link', actionKind: 'link' as const },
    fillTimesheet: { strategy: 'role' as const, value: 'Fill Timesheet', role: 'link', actionKind: 'link' as const },
    leaveBalance: { strategy: 'text' as const, value: 'Leave Balance', actionKind: 'text' as const },
    leaveType: { strategy: 'text' as const, value: 'Leave Type', actionKind: 'text' as const },
    assignedLeave: { strategy: 'text' as const, value: 'Assigned Leave', actionKind: 'text' as const },
    takenLeave: { strategy: 'text' as const, value: 'Taken Leave', actionKind: 'text' as const },
    balanceLeave: { strategy: 'text' as const, value: 'Balance Leave', actionKind: 'text' as const },
    birthdaysWorkAnniversaries: { strategy: 'text' as const, value: 'Birthdays & Work Anniversaries In June', actionKind: 'text' as const },
    BreezingMinds: { strategy: 'text' as const, value: '2026 © BreezingMinds', actionKind: 'text' as const },
    breezingMinds: { strategy: 'css' as const, value: '[title="BreezingMinds"]', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickEmployeeSelfService(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.employeeSelfService));
  }

  async doubleClickEmployeeSelfService(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.employeeSelfService));
  }

  async expectEmployeeSelfServiceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.employeeSelfService), timeoutMs);
  }

  async expectEmployeeSelfServiceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.employeeSelfService), timeoutMs);
  }

  async expectEmployeeSelfServiceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.employeeSelfService), expected, timeoutMs);
  }

  async expectEmployeeSelfServiceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.employeeSelfService), substring, timeoutMs);
  }

  async scrollEmployeeSelfServiceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.employeeSelfService));
  }

  async clickShubhamAnilBhele(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.shubhamAnilBhele));
  }

  async doubleClickShubhamAnilBhele(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.shubhamAnilBhele));
  }

  async expectShubhamAnilBheleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), timeoutMs);
  }

  async expectShubhamAnilBheleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), timeoutMs);
  }

  async expectShubhamAnilBheleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), expected, timeoutMs);
  }

  async expectShubhamAnilBheleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), substring, timeoutMs);
  }

  async scrollShubhamAnilBheleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.shubhamAnilBhele));
  }

  async clickDashboard(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async doubleClickDashboard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async expectDashboardVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.dashboard), expected, timeoutMs);
  }

  async expectDashboardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.dashboard), substring, timeoutMs);
  }

  async scrollDashboardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async clickEmployeeDirectory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.employeeDirectory));
  }

  async doubleClickEmployeeDirectory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.employeeDirectory));
  }

  async expectEmployeeDirectoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.employeeDirectory), timeoutMs);
  }

  async expectEmployeeDirectoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.employeeDirectory), timeoutMs);
  }

  async expectEmployeeDirectoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.employeeDirectory), expected, timeoutMs);
  }

  async expectEmployeeDirectoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.employeeDirectory), substring, timeoutMs);
  }

  async scrollEmployeeDirectoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.employeeDirectory));
  }

  async clickMyTeam(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.myTeam));
  }

  async doubleClickMyTeam(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.myTeam));
  }

  async expectMyTeamVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.myTeam), timeoutMs);
  }

  async expectMyTeamHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.myTeam), timeoutMs);
  }

  async expectMyTeamText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.myTeam), expected, timeoutMs);
  }

  async expectMyTeamContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.myTeam), substring, timeoutMs);
  }

  async scrollMyTeamIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.myTeam));
  }

  async clickFinanceManagement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.financeManagement));
  }

  async doubleClickFinanceManagement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.financeManagement));
  }

  async expectFinanceManagementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.financeManagement), timeoutMs);
  }

  async expectFinanceManagementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.financeManagement), timeoutMs);
  }

  async expectFinanceManagementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.financeManagement), expected, timeoutMs);
  }

  async expectFinanceManagementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.financeManagement), substring, timeoutMs);
  }

  async scrollFinanceManagementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.financeManagement));
  }

  async clickPerformanceReview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.performanceReview));
  }

  async doubleClickPerformanceReview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.performanceReview));
  }

  async expectPerformanceReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.performanceReview), timeoutMs);
  }

  async expectPerformanceReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.performanceReview), timeoutMs);
  }

  async expectPerformanceReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.performanceReview), expected, timeoutMs);
  }

  async expectPerformanceReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.performanceReview), substring, timeoutMs);
  }

  async scrollPerformanceReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.performanceReview));
  }

  async clickProbationFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.probationFeedback));
  }

  async doubleClickProbationFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.probationFeedback));
  }

  async expectProbationFeedbackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.probationFeedback), timeoutMs);
  }

  async expectProbationFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.probationFeedback), timeoutMs);
  }

  async expectProbationFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.probationFeedback), expected, timeoutMs);
  }

  async expectProbationFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.probationFeedback), substring, timeoutMs);
  }

  async scrollProbationFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.probationFeedback));
  }

  async clickCompanyPolicy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.companyPolicy));
  }

  async doubleClickCompanyPolicy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.companyPolicy));
  }

  async expectCompanyPolicyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.companyPolicy), timeoutMs);
  }

  async expectCompanyPolicyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.companyPolicy), timeoutMs);
  }

  async expectCompanyPolicyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.companyPolicy), expected, timeoutMs);
  }

  async expectCompanyPolicyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.companyPolicy), substring, timeoutMs);
  }

  async scrollCompanyPolicyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.companyPolicy));
  }

  async clickHelpDirectory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.helpDirectory));
  }

  async doubleClickHelpDirectory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.helpDirectory));
  }

  async expectHelpDirectoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.helpDirectory), timeoutMs);
  }

  async expectHelpDirectoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.helpDirectory), timeoutMs);
  }

  async expectHelpDirectoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.helpDirectory), expected, timeoutMs);
  }

  async expectHelpDirectoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.helpDirectory), substring, timeoutMs);
  }

  async scrollHelpDirectoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.helpDirectory));
  }

  async clickEmployeeChangeRequest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.employeeChangeRequest));
  }

  async doubleClickEmployeeChangeRequest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.employeeChangeRequest));
  }

  async expectEmployeeChangeRequestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.employeeChangeRequest), timeoutMs);
  }

  async expectEmployeeChangeRequestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.employeeChangeRequest), timeoutMs);
  }

  async expectEmployeeChangeRequestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.employeeChangeRequest), expected, timeoutMs);
  }

  async expectEmployeeChangeRequestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.employeeChangeRequest), substring, timeoutMs);
  }

  async scrollEmployeeChangeRequestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.employeeChangeRequest));
  }

  async clickManageLeave(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.manageLeave));
  }

  async doubleClickManageLeave(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.manageLeave));
  }

  async expectManageLeaveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.manageLeave), timeoutMs);
  }

  async expectManageLeaveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.manageLeave), timeoutMs);
  }

  async expectManageLeaveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.manageLeave), expected, timeoutMs);
  }

  async expectManageLeaveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.manageLeave), substring, timeoutMs);
  }

  async scrollManageLeaveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.manageLeave));
  }

  async clickManageTimesheet(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.manageTimesheet));
  }

  async doubleClickManageTimesheet(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.manageTimesheet));
  }

  async expectManageTimesheetVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.manageTimesheet), timeoutMs);
  }

  async expectManageTimesheetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.manageTimesheet), timeoutMs);
  }

  async expectManageTimesheetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.manageTimesheet), expected, timeoutMs);
  }

  async expectManageTimesheetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.manageTimesheet), substring, timeoutMs);
  }

  async scrollManageTimesheetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.manageTimesheet));
  }

  async clickOpenPositions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.openPositions));
  }

  async doubleClickOpenPositions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.openPositions));
  }

  async expectOpenPositionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.openPositions), timeoutMs);
  }

  async expectOpenPositionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.openPositions), timeoutMs);
  }

  async expectOpenPositionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.openPositions), expected, timeoutMs);
  }

  async expectOpenPositionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.openPositions), substring, timeoutMs);
  }

  async scrollOpenPositionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.openPositions));
  }

  async clickReferrals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.referrals));
  }

  async doubleClickReferrals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.referrals));
  }

  async expectReferralsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.referrals), timeoutMs);
  }

  async expectReferralsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.referrals), timeoutMs);
  }

  async expectReferralsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.referrals), expected, timeoutMs);
  }

  async expectReferralsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.referrals), substring, timeoutMs);
  }

  async scrollReferralsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.referrals));
  }

  async clickHolidayCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.holidayCalendar));
  }

  async doubleClickHolidayCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.holidayCalendar));
  }

  async expectHolidayCalendarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.holidayCalendar), expected, timeoutMs);
  }

  async expectHolidayCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.holidayCalendar), substring, timeoutMs);
  }

  async scrollHolidayCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.holidayCalendar));
  }

  async clickLogout(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.logout));
  }

  async doubleClickLogout(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.logout));
  }

  async expectLogoutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.logout), timeoutMs);
  }

  async expectLogoutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.logout), timeoutMs);
  }

  async expectLogoutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.logout), expected, timeoutMs);
  }

  async expectLogoutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.logout), substring, timeoutMs);
  }

  async scrollLogoutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.logout));
  }

  async clickHideNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.hideNavigation));
  }

  async doubleClickHideNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.hideNavigation));
  }

  async expectHideNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.hideNavigation), timeoutMs);
  }

  async expectHideNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.hideNavigation), timeoutMs);
  }

  async expectHideNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.hideNavigation), expected, timeoutMs);
  }

  async expectHideNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.hideNavigation), substring, timeoutMs);
  }

  async scrollHideNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.hideNavigation));
  }

  async clickMinifyNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.minifyNavigation));
  }

  async doubleClickMinifyNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.minifyNavigation));
  }

  async expectMinifyNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.minifyNavigation), timeoutMs);
  }

  async expectMinifyNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.minifyNavigation), timeoutMs);
  }

  async expectMinifyNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.minifyNavigation), expected, timeoutMs);
  }

  async expectMinifyNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.minifyNavigation), substring, timeoutMs);
  }

  async scrollMinifyNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.minifyNavigation));
  }

  async clickLockNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.lockNavigation));
  }

  async doubleClickLockNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.lockNavigation));
  }

  async expectLockNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.lockNavigation), timeoutMs);
  }

  async expectLockNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.lockNavigation), timeoutMs);
  }

  async expectLockNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.lockNavigation), expected, timeoutMs);
  }

  async expectLockNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.lockNavigation), substring, timeoutMs);
  }

  async scrollLockNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.lockNavigation));
  }

  async clickMyApps(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.myApps));
  }

  async doubleClickMyApps(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.myApps));
  }

  async expectMyAppsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.myApps), timeoutMs);
  }

  async expectMyAppsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.myApps), timeoutMs);
  }

  async expectMyAppsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.myApps), expected, timeoutMs);
  }

  async expectMyAppsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.myApps), substring, timeoutMs);
  }

  async scrollMyAppsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.myApps));
  }

  async clickMyProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.myProfile));
  }

  async doubleClickMyProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.myProfile));
  }

  async expectMyProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.myProfile), expected, timeoutMs);
  }

  async expectMyProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.myProfile), substring, timeoutMs);
  }

  async scrollMyProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.myProfile));
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.home));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.home), substring, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.home));
  }

  async clickFillTimesheet(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.fillTimesheet));
  }

  async doubleClickFillTimesheet(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.fillTimesheet));
  }

  async expectFillTimesheetVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.fillTimesheet), expected, timeoutMs);
  }

  async expectFillTimesheetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.fillTimesheet), substring, timeoutMs);
  }

  async scrollFillTimesheetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.fillTimesheet));
  }

  async getInnerTextLeaveBalance(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.leaveBalance));
  }

  async expectLeaveBalanceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.leaveBalance), timeoutMs);
  }

  async expectLeaveBalanceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.leaveBalance), timeoutMs);
  }

  async expectLeaveBalanceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.leaveBalance), expected, timeoutMs);
  }

  async expectLeaveBalanceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.leaveBalance), substring, timeoutMs);
  }

  async scrollLeaveBalanceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.leaveBalance));
  }

  async getInnerTextLeaveType(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.leaveType));
  }

  async expectLeaveTypeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.leaveType), timeoutMs);
  }

  async expectLeaveTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.leaveType), timeoutMs);
  }

  async expectLeaveTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.leaveType), expected, timeoutMs);
  }

  async expectLeaveTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.leaveType), substring, timeoutMs);
  }

  async scrollLeaveTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.leaveType));
  }

  async getInnerTextAssignedLeave(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.assignedLeave));
  }

  async expectAssignedLeaveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.assignedLeave), timeoutMs);
  }

  async expectAssignedLeaveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.assignedLeave), timeoutMs);
  }

  async expectAssignedLeaveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.assignedLeave), expected, timeoutMs);
  }

  async expectAssignedLeaveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.assignedLeave), substring, timeoutMs);
  }

  async scrollAssignedLeaveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.assignedLeave));
  }

  async getInnerTextTakenLeave(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.takenLeave));
  }

  async expectTakenLeaveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.takenLeave), timeoutMs);
  }

  async expectTakenLeaveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.takenLeave), timeoutMs);
  }

  async expectTakenLeaveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.takenLeave), expected, timeoutMs);
  }

  async expectTakenLeaveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.takenLeave), substring, timeoutMs);
  }

  async scrollTakenLeaveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.takenLeave));
  }

  async getInnerTextBalanceLeave(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.balanceLeave));
  }

  async expectBalanceLeaveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.balanceLeave), timeoutMs);
  }

  async expectBalanceLeaveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.balanceLeave), timeoutMs);
  }

  async expectBalanceLeaveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.balanceLeave), expected, timeoutMs);
  }

  async expectBalanceLeaveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.balanceLeave), substring, timeoutMs);
  }

  async scrollBalanceLeaveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.balanceLeave));
  }

  async getInnerTextBirthdaysWorkAnniversaries(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries));
  }

  async expectBirthdaysWorkAnniversariesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), timeoutMs);
  }

  async expectBirthdaysWorkAnniversariesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), timeoutMs);
  }

  async expectBirthdaysWorkAnniversariesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), expected, timeoutMs);
  }

  async expectBirthdaysWorkAnniversariesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), substring, timeoutMs);
  }

  async scrollBirthdaysWorkAnniversariesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries));
  }

  async getInnerTextBreezingMinds(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.BreezingMinds));
  }

  async expectBreezingMindsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.BreezingMinds), expected, timeoutMs);
  }

  async expectBreezingMindsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.BreezingMinds), substring, timeoutMs);
  }

  async scrollBreezingMindsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.BreezingMinds));
  }

  async clickBreezingMinds(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.breezingMinds));
  }

  async doubleClickBreezingMinds(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.breezingMinds));
  }

  async expectBreezingMindsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.breezingMinds), expected, timeoutMs);
  }

  async expectBreezingMindsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.breezingMinds), substring, timeoutMs);
  }

  async scrollBreezingMindsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.breezingMinds));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }

  async performLogout(): Promise<void> {
    await this.clickLogout();
  }


  async longPressEmployeeSelfService(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.employeeSelfService));
  }

  async expectEmployeeSelfServiceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.employeeSelfService), value, timeoutMs);
  }

  async expectEmployeeSelfServiceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.employeeSelfService), timeoutMs);
  }

  async expectEmployeeSelfServiceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.employeeSelfService), timeoutMs);
  }

  async expectEmployeeSelfServiceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.employeeSelfService), timeoutMs);
  }

  async expectEmployeeSelfServiceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.employeeSelfService), timeoutMs);
  }

  async expectEmployeeSelfServiceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.employeeSelfService), timeoutMs);
  }

  async expectEmployeeSelfServiceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.employeeSelfService), count, timeoutMs);
  }

  async longPressShubhamAnilBhele(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.shubhamAnilBhele));
  }

  async expectShubhamAnilBheleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), value, timeoutMs);
  }

  async expectShubhamAnilBheleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), timeoutMs);
  }

  async expectShubhamAnilBheleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), timeoutMs);
  }

  async expectShubhamAnilBheleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), timeoutMs);
  }

  async expectShubhamAnilBheleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), timeoutMs);
  }

  async expectShubhamAnilBheleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), timeoutMs);
  }

  async expectShubhamAnilBheleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.shubhamAnilBhele), count, timeoutMs);
  }

  async longPressDashboard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async expectDashboardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.dashboard), value, timeoutMs);
  }

  async expectDashboardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.dashboard), count, timeoutMs);
  }

  async longPressEmployeeDirectory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.employeeDirectory));
  }

  async expectEmployeeDirectoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.employeeDirectory), value, timeoutMs);
  }

  async expectEmployeeDirectoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.employeeDirectory), timeoutMs);
  }

  async expectEmployeeDirectoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.employeeDirectory), timeoutMs);
  }

  async expectEmployeeDirectoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.employeeDirectory), timeoutMs);
  }

  async expectEmployeeDirectoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.employeeDirectory), timeoutMs);
  }

  async expectEmployeeDirectoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.employeeDirectory), timeoutMs);
  }

  async expectEmployeeDirectoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.employeeDirectory), count, timeoutMs);
  }

  async longPressMyTeam(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.myTeam));
  }

  async expectMyTeamValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.myTeam), value, timeoutMs);
  }

  async expectMyTeamEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.myTeam), timeoutMs);
  }

  async expectMyTeamDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.myTeam), timeoutMs);
  }

  async expectMyTeamChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.myTeam), timeoutMs);
  }

  async expectMyTeamUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.myTeam), timeoutMs);
  }

  async expectMyTeamFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.myTeam), timeoutMs);
  }

  async expectMyTeamCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.myTeam), count, timeoutMs);
  }

  async longPressFinanceManagement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.financeManagement));
  }

  async expectFinanceManagementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.financeManagement), value, timeoutMs);
  }

  async expectFinanceManagementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.financeManagement), timeoutMs);
  }

  async expectFinanceManagementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.financeManagement), timeoutMs);
  }

  async expectFinanceManagementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.financeManagement), timeoutMs);
  }

  async expectFinanceManagementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.financeManagement), timeoutMs);
  }

  async expectFinanceManagementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.financeManagement), timeoutMs);
  }

  async expectFinanceManagementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.financeManagement), count, timeoutMs);
  }

  async longPressPerformanceReview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.performanceReview));
  }

  async expectPerformanceReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.performanceReview), value, timeoutMs);
  }

  async expectPerformanceReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.performanceReview), timeoutMs);
  }

  async expectPerformanceReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.performanceReview), timeoutMs);
  }

  async expectPerformanceReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.performanceReview), timeoutMs);
  }

  async expectPerformanceReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.performanceReview), timeoutMs);
  }

  async expectPerformanceReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.performanceReview), timeoutMs);
  }

  async expectPerformanceReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.performanceReview), count, timeoutMs);
  }

  async longPressProbationFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.probationFeedback));
  }

  async expectProbationFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.probationFeedback), value, timeoutMs);
  }

  async expectProbationFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.probationFeedback), timeoutMs);
  }

  async expectProbationFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.probationFeedback), timeoutMs);
  }

  async expectProbationFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.probationFeedback), timeoutMs);
  }

  async expectProbationFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.probationFeedback), timeoutMs);
  }

  async expectProbationFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.probationFeedback), timeoutMs);
  }

  async expectProbationFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.probationFeedback), count, timeoutMs);
  }

  async longPressCompanyPolicy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.companyPolicy));
  }

  async expectCompanyPolicyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.companyPolicy), value, timeoutMs);
  }

  async expectCompanyPolicyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.companyPolicy), timeoutMs);
  }

  async expectCompanyPolicyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.companyPolicy), timeoutMs);
  }

  async expectCompanyPolicyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.companyPolicy), timeoutMs);
  }

  async expectCompanyPolicyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.companyPolicy), timeoutMs);
  }

  async expectCompanyPolicyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.companyPolicy), timeoutMs);
  }

  async expectCompanyPolicyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.companyPolicy), count, timeoutMs);
  }

  async longPressHelpDirectory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.helpDirectory));
  }

  async expectHelpDirectoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.helpDirectory), value, timeoutMs);
  }

  async expectHelpDirectoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.helpDirectory), timeoutMs);
  }

  async expectHelpDirectoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.helpDirectory), timeoutMs);
  }

  async expectHelpDirectoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.helpDirectory), timeoutMs);
  }

  async expectHelpDirectoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.helpDirectory), timeoutMs);
  }

  async expectHelpDirectoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.helpDirectory), timeoutMs);
  }

  async expectHelpDirectoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.helpDirectory), count, timeoutMs);
  }

  async longPressEmployeeChangeRequest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.employeeChangeRequest));
  }

  async expectEmployeeChangeRequestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.employeeChangeRequest), value, timeoutMs);
  }

  async expectEmployeeChangeRequestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.employeeChangeRequest), timeoutMs);
  }

  async expectEmployeeChangeRequestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.employeeChangeRequest), timeoutMs);
  }

  async expectEmployeeChangeRequestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.employeeChangeRequest), timeoutMs);
  }

  async expectEmployeeChangeRequestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.employeeChangeRequest), timeoutMs);
  }

  async expectEmployeeChangeRequestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.employeeChangeRequest), timeoutMs);
  }

  async expectEmployeeChangeRequestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.employeeChangeRequest), count, timeoutMs);
  }

  async longPressManageLeave(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.manageLeave));
  }

  async expectManageLeaveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.manageLeave), value, timeoutMs);
  }

  async expectManageLeaveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.manageLeave), timeoutMs);
  }

  async expectManageLeaveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.manageLeave), timeoutMs);
  }

  async expectManageLeaveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.manageLeave), timeoutMs);
  }

  async expectManageLeaveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.manageLeave), timeoutMs);
  }

  async expectManageLeaveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.manageLeave), timeoutMs);
  }

  async expectManageLeaveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.manageLeave), count, timeoutMs);
  }

  async longPressManageTimesheet(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.manageTimesheet));
  }

  async expectManageTimesheetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.manageTimesheet), value, timeoutMs);
  }

  async expectManageTimesheetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.manageTimesheet), timeoutMs);
  }

  async expectManageTimesheetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.manageTimesheet), timeoutMs);
  }

  async expectManageTimesheetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.manageTimesheet), timeoutMs);
  }

  async expectManageTimesheetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.manageTimesheet), timeoutMs);
  }

  async expectManageTimesheetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.manageTimesheet), timeoutMs);
  }

  async expectManageTimesheetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.manageTimesheet), count, timeoutMs);
  }

  async longPressOpenPositions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.openPositions));
  }

  async expectOpenPositionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.openPositions), value, timeoutMs);
  }

  async expectOpenPositionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.openPositions), timeoutMs);
  }

  async expectOpenPositionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.openPositions), timeoutMs);
  }

  async expectOpenPositionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.openPositions), timeoutMs);
  }

  async expectOpenPositionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.openPositions), timeoutMs);
  }

  async expectOpenPositionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.openPositions), timeoutMs);
  }

  async expectOpenPositionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.openPositions), count, timeoutMs);
  }

  async longPressReferrals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.referrals));
  }

  async expectReferralsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.referrals), value, timeoutMs);
  }

  async expectReferralsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.referrals), timeoutMs);
  }

  async expectReferralsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.referrals), timeoutMs);
  }

  async expectReferralsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.referrals), timeoutMs);
  }

  async expectReferralsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.referrals), timeoutMs);
  }

  async expectReferralsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.referrals), timeoutMs);
  }

  async expectReferralsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.referrals), count, timeoutMs);
  }

  async longPressHolidayCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.holidayCalendar));
  }

  async expectHolidayCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.holidayCalendar), value, timeoutMs);
  }

  async expectHolidayCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.holidayCalendar), count, timeoutMs);
  }

  async longPressLogout(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.logout));
  }

  async expectLogoutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.logout), value, timeoutMs);
  }

  async expectLogoutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.logout), timeoutMs);
  }

  async expectLogoutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.logout), timeoutMs);
  }

  async expectLogoutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.logout), timeoutMs);
  }

  async expectLogoutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.logout), timeoutMs);
  }

  async expectLogoutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.logout), timeoutMs);
  }

  async expectLogoutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.logout), count, timeoutMs);
  }

  async longPressHideNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.hideNavigation));
  }

  async expectHideNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.hideNavigation), value, timeoutMs);
  }

  async expectHideNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.hideNavigation), timeoutMs);
  }

  async expectHideNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.hideNavigation), timeoutMs);
  }

  async expectHideNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.hideNavigation), timeoutMs);
  }

  async expectHideNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.hideNavigation), timeoutMs);
  }

  async expectHideNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.hideNavigation), timeoutMs);
  }

  async expectHideNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.hideNavigation), count, timeoutMs);
  }

  async longPressMinifyNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.minifyNavigation));
  }

  async expectMinifyNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.minifyNavigation), value, timeoutMs);
  }

  async expectMinifyNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.minifyNavigation), timeoutMs);
  }

  async expectMinifyNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.minifyNavigation), timeoutMs);
  }

  async expectMinifyNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.minifyNavigation), timeoutMs);
  }

  async expectMinifyNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.minifyNavigation), timeoutMs);
  }

  async expectMinifyNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.minifyNavigation), timeoutMs);
  }

  async expectMinifyNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.minifyNavigation), count, timeoutMs);
  }

  async longPressLockNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.lockNavigation));
  }

  async expectLockNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.lockNavigation), value, timeoutMs);
  }

  async expectLockNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.lockNavigation), timeoutMs);
  }

  async expectLockNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.lockNavigation), timeoutMs);
  }

  async expectLockNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.lockNavigation), timeoutMs);
  }

  async expectLockNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.lockNavigation), timeoutMs);
  }

  async expectLockNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.lockNavigation), timeoutMs);
  }

  async expectLockNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.lockNavigation), count, timeoutMs);
  }

  async longPressMyApps(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.myApps));
  }

  async expectMyAppsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.myApps), value, timeoutMs);
  }

  async expectMyAppsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.myApps), timeoutMs);
  }

  async expectMyAppsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.myApps), timeoutMs);
  }

  async expectMyAppsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.myApps), timeoutMs);
  }

  async expectMyAppsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.myApps), timeoutMs);
  }

  async expectMyAppsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.myApps), timeoutMs);
  }

  async expectMyAppsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.myApps), count, timeoutMs);
  }

  async longPressMyProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.myProfile));
  }

  async expectMyProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.myProfile), value, timeoutMs);
  }

  async expectMyProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.myProfile), count, timeoutMs);
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.home), count, timeoutMs);
  }

  async longPressFillTimesheet(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.fillTimesheet));
  }

  async expectFillTimesheetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.fillTimesheet), value, timeoutMs);
  }

  async expectFillTimesheetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.fillTimesheet), timeoutMs);
  }

  async expectFillTimesheetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.fillTimesheet), count, timeoutMs);
  }

  async clickLeaveBalance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.leaveBalance));
  }

  async doubleClickLeaveBalance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.leaveBalance));
  }

  async longPressLeaveBalance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.leaveBalance));
  }

  async expectLeaveBalanceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.leaveBalance), value, timeoutMs);
  }

  async expectLeaveBalanceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.leaveBalance), timeoutMs);
  }

  async expectLeaveBalanceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.leaveBalance), timeoutMs);
  }

  async expectLeaveBalanceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.leaveBalance), timeoutMs);
  }

  async expectLeaveBalanceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.leaveBalance), timeoutMs);
  }

  async expectLeaveBalanceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.leaveBalance), timeoutMs);
  }

  async expectLeaveBalanceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.leaveBalance), count, timeoutMs);
  }

  async clickLeaveType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.leaveType));
  }

  async doubleClickLeaveType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.leaveType));
  }

  async longPressLeaveType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.leaveType));
  }

  async expectLeaveTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.leaveType), value, timeoutMs);
  }

  async expectLeaveTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.leaveType), timeoutMs);
  }

  async expectLeaveTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.leaveType), timeoutMs);
  }

  async expectLeaveTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.leaveType), timeoutMs);
  }

  async expectLeaveTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.leaveType), timeoutMs);
  }

  async expectLeaveTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.leaveType), timeoutMs);
  }

  async expectLeaveTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.leaveType), count, timeoutMs);
  }

  async clickAssignedLeave(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.assignedLeave));
  }

  async doubleClickAssignedLeave(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.assignedLeave));
  }

  async longPressAssignedLeave(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.assignedLeave));
  }

  async expectAssignedLeaveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.assignedLeave), value, timeoutMs);
  }

  async expectAssignedLeaveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.assignedLeave), timeoutMs);
  }

  async expectAssignedLeaveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.assignedLeave), timeoutMs);
  }

  async expectAssignedLeaveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.assignedLeave), timeoutMs);
  }

  async expectAssignedLeaveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.assignedLeave), timeoutMs);
  }

  async expectAssignedLeaveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.assignedLeave), timeoutMs);
  }

  async expectAssignedLeaveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.assignedLeave), count, timeoutMs);
  }

  async clickTakenLeave(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.takenLeave));
  }

  async doubleClickTakenLeave(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.takenLeave));
  }

  async longPressTakenLeave(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.takenLeave));
  }

  async expectTakenLeaveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.takenLeave), value, timeoutMs);
  }

  async expectTakenLeaveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.takenLeave), timeoutMs);
  }

  async expectTakenLeaveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.takenLeave), timeoutMs);
  }

  async expectTakenLeaveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.takenLeave), timeoutMs);
  }

  async expectTakenLeaveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.takenLeave), timeoutMs);
  }

  async expectTakenLeaveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.takenLeave), timeoutMs);
  }

  async expectTakenLeaveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.takenLeave), count, timeoutMs);
  }

  async clickBalanceLeave(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.balanceLeave));
  }

  async doubleClickBalanceLeave(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.balanceLeave));
  }

  async longPressBalanceLeave(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.balanceLeave));
  }

  async expectBalanceLeaveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.balanceLeave), value, timeoutMs);
  }

  async expectBalanceLeaveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.balanceLeave), timeoutMs);
  }

  async expectBalanceLeaveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.balanceLeave), timeoutMs);
  }

  async expectBalanceLeaveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.balanceLeave), timeoutMs);
  }

  async expectBalanceLeaveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.balanceLeave), timeoutMs);
  }

  async expectBalanceLeaveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.balanceLeave), timeoutMs);
  }

  async expectBalanceLeaveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.balanceLeave), count, timeoutMs);
  }

  async clickBirthdaysWorkAnniversaries(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries));
  }

  async doubleClickBirthdaysWorkAnniversaries(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries));
  }

  async longPressBirthdaysWorkAnniversaries(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries));
  }

  async expectBirthdaysWorkAnniversariesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), value, timeoutMs);
  }

  async expectBirthdaysWorkAnniversariesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), timeoutMs);
  }

  async expectBirthdaysWorkAnniversariesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), timeoutMs);
  }

  async expectBirthdaysWorkAnniversariesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), timeoutMs);
  }

  async expectBirthdaysWorkAnniversariesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), timeoutMs);
  }

  async expectBirthdaysWorkAnniversariesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), timeoutMs);
  }

  async expectBirthdaysWorkAnniversariesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.birthdaysWorkAnniversaries), count, timeoutMs);
  }

  async longPressBreezingMinds(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.BreezingMinds));
  }

  async expectBreezingMindsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.BreezingMinds), value, timeoutMs);
  }

  async expectBreezingMindsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.BreezingMinds), timeoutMs);
  }

  async expectBreezingMindsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.BreezingMinds), count, timeoutMs);
  }

}
