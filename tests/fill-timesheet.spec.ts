import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('E2E: User completes timesheet entry and submits successfully', { tag: ["@e2e","@regression","@P0","@e2e-fill-timesheet-complete-journey"] }, async ({ page, dashboardPage, timesheetAddPage }) => {
  await test.step('Open — Navigate to ESS dashboard', async () => {
    await page.goto('/dashboard');
  });

  await test.step('Click — Fill Timesheet button', async () => {
    await dashboardPage.clickFillTimesheet();
  });

  await test.step('Click — Project dropdown', async () => {
    await timesheetAddPage.clickProjectDropdown();
  });

  await test.step('Fill — Search and select project', async () => {
    await timesheetAddPage.fillProjectSearchInput('Quarks Internal');
  });

  await test.step('Click — Date picker', async () => {
    await timesheetAddPage.clickDatePicker();
  });

  await test.step('Select — Select date', async () => {
    await timesheetAddPage.selectDatePickerOption('11-06-2026');
  });

  await test.step('Click — Category dropdown', async () => {
    await timesheetAddPage.clickCategoryDropdown();
  });

  await test.step('Fill — Search and select category', async () => {
    await timesheetAddPage.fillCategorySearchInput('Coding');
  });

  await test.step('Fill — Fill Total Hours', async () => {
    await timesheetAddPage.fillTotalHoursInput('8');
  });

  await test.step('Fill — Fill Task Detail/Ticket URL', async () => {
    await timesheetAddPage.fillTaskDetailInput('working on ess');
  });

  await test.step('Click — Submit button', async () => {
    await timesheetAddPage.clickSubmitBtn();
  });

  await test.step('Assert visible — Success message is visible', async () => {
    await timesheetAddPage.expectSuccessMsgVisible();
  });
});
