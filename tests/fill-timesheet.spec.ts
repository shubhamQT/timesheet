import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';


test('E2E: User completes timesheet entry and submits successfully', { tag: ["@e2e","@regression","@P0","@e2e-fill-timesheet-complete-journey"] }, async ({ page, dashboardPage, timesheetAddPage }) => {
  await test.step('Open — Navigate to ESS dashboard', async () => {
    await page.goto('/dashboard');
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });

  await test.step('Click — Fill Timesheet button', async () => {
    await dashboardPage.clickFillTimesheet();
  });

  await test.step('Click — Project dropdown', async () => {
    await timesheetAddPage.clickSelectProject();
  });

  await test.step('Fill — Search and select project', async () => {
    await timesheetAddPage.selectProjectId(testData.e2eUserCompletesTimesheetEntryAndSubmitsSuccessfully.searchAndSelectProject);
  });

  await test.step('Click — Date picker', async () => {
    await timesheetAddPage.clickDate();
  });

  await test.step('Select — Select date', async () => {
    await timesheetAddPage.fillDate(testData.e2eUserCompletesTimesheetEntryAndSubmitsSuccessfully.selectDate);
  });

  await test.step('Click — Category dropdown', async () => {
    await timesheetAddPage.clickSelectCategory();
  });

  await test.step('Fill — Search and select category', async () => {
    await timesheetAddPage.selectTimesheet1CategoryId(testData.e2eUserCompletesTimesheetEntryAndSubmitsSuccessfully.searchAndSelectCategory);
  });

  await test.step('Fill — Fill Total Hours', async () => {
    await timesheetAddPage.fillTimesheet1TotalHours(testData.e2eUserCompletesTimesheetEntryAndSubmitsSuccessfully.fillTotalHours);
  });

  await test.step('Fill — Fill Task Detail/Ticket URL', async () => {
    await timesheetAddPage.fillTimesheet1TaskDetail(testData.e2eUserCompletesTimesheetEntryAndSubmitsSuccessfully.fillTaskDetailTicketUrl);
  });

  await test.step('Click — Submit button', async () => {
    await timesheetAddPage.clickSubmit();
  });

  await test.step('Assert visible — Success message is visible', async () => {
    await timesheetAddPage.expectBreezingMindsVisible();
  });
});


test('E2E: User fills timesheet for multiple days in sequence', { tag: ["@e2e","@regression","@P1","@e2e-fill-timesheet-multiple-days"] }, async ({ page, dashboardPage, timesheetAddPage }) => {
  await test.step('Open — Navigate to ESS dashboard', async () => {
    await page.goto('/dashboard');
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });

  await test.step('Click — Fill Timesheet button', async () => {
    await dashboardPage.clickFillTimesheet();
  });

  await test.step('Click — Project dropdown', async () => {
    await timesheetAddPage.clickSelectProject();
  });

  await test.step('Fill — Search and select project', async () => {
    await timesheetAddPage.selectProjectId(testData.e2eUserFillsTimesheetForMultipleDaysInSequence.searchAndSelectProject);
  });

  await test.step('Click — Date picker', async () => {
    await timesheetAddPage.clickDate();
  });

  await test.step('Select — Select date', async () => {
    await timesheetAddPage.fillDate(testData.e2eUserFillsTimesheetForMultipleDaysInSequence.selectDate);
  });

  await test.step('Click — Category dropdown', async () => {
    await timesheetAddPage.clickSelectCategory();
  });

  await test.step('Fill — Search and select category', async () => {
    await timesheetAddPage.selectTimesheet1CategoryId(testData.e2eUserFillsTimesheetForMultipleDaysInSequence.searchAndSelectCategory);
  });

  await test.step('Fill — Fill Total Hours', async () => {
    await timesheetAddPage.fillTimesheet1TotalHours(testData.e2eUserFillsTimesheetForMultipleDaysInSequence.fillTotalHours);
  });

  await test.step('Fill — Fill Task Detail/Ticket URL', async () => {
    await timesheetAddPage.fillTimesheet1TaskDetail(testData.e2eUserFillsTimesheetForMultipleDaysInSequence.fillTaskDetailTicketUrl);
  });

  await test.step('Click — Submit button', async () => {
    await timesheetAddPage.clickSubmit();
  });

  await test.step('Assert visible — Success message is visible', async () => {
    await timesheetAddPage.expectSubmitText('Submit');
  });

  await test.step('Click — Fill Timesheet button again', async () => {
    await dashboardPage.clickFillTimesheet();
  });

  await test.step('Click — Date picker', async () => {
    await timesheetAddPage.clickDate();
  });

  await test.step('Select — Select next date', async () => {
    await timesheetAddPage.fillDate(testData.e2eUserFillsTimesheetForMultipleDaysInSequence.selectNextDate);
  });

  await test.step('Click — Submit button', async () => {
    await timesheetAddPage.clickSubmit();
  });

  await test.step('Assert visible — Success message is visible', async () => {
    await timesheetAddPage.expectSubmitText('Submit');
  });
});
