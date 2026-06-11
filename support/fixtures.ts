import { test as base, expect } from "@playwright/test";
import { DashboardPage } from "../pageobjects/DashboardPage";
import { LoginPage } from "../pageobjects/LoginPage";
import { TimesheetAddPage } from "../pageobjects/TimesheetAddPage";
import { TimesheetPage } from "../pageobjects/TimesheetPage";

type AppFixtures = {
  dashboardPage: DashboardPage;
  loginPage: LoginPage;
  timesheetAddPage: TimesheetAddPage;
  timesheetPage: TimesheetPage;
};

export const test = base.extend<AppFixtures>({
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  timesheetAddPage: async ({ page }, use) => {
    await use(new TimesheetAddPage(page));
  },
  timesheetPage: async ({ page }, use) => {
    await use(new TimesheetPage(page));
  },
});

export { expect };
