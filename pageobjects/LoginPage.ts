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

export class LoginPage {
  private static readonly L = {
    welcomeText: { strategy: 'text' as const, value: 'WELCOME TO THE EMPLOYEE SELF SERVICE PORTAL', actionKind: 'text' as const },
    loginWithBreezingMinds: { strategy: 'role' as const, value: 'Login with BreezingMinds', role: 'button', actionKind: 'link' as const },
    breezingMinds: { strategy: 'css' as const, value: '[title="BreezingMinds"]', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextWelcomeText(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.welcomeText));
  }

  async expectWelcomeTextVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.welcomeText), timeoutMs);
  }

  async expectWelcomeTextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.welcomeText), timeoutMs);
  }

  async expectWelcomeTextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.welcomeText), expected, timeoutMs);
  }

  async expectWelcomeTextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.welcomeText), substring, timeoutMs);
  }

  async scrollWelcomeTextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.welcomeText));
  }

  async clickLoginWithBreezingMinds(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginWithBreezingMinds));
  }

  async doubleClickLoginWithBreezingMinds(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginWithBreezingMinds));
  }

  async expectLoginWithBreezingMindsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), timeoutMs);
  }

  async expectLoginWithBreezingMindsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), timeoutMs);
  }

  async expectLoginWithBreezingMindsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), expected, timeoutMs);
  }

  async expectLoginWithBreezingMindsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), substring, timeoutMs);
  }

  async scrollLoginWithBreezingMindsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginWithBreezingMinds));
  }

  async clickBreezingMinds(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.breezingMinds));
  }

  async doubleClickBreezingMinds(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.breezingMinds));
  }

  async expectBreezingMindsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.breezingMinds), expected, timeoutMs);
  }

  async expectBreezingMindsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.breezingMinds), substring, timeoutMs);
  }

  async scrollBreezingMindsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.breezingMinds));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickWelcomeText(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.welcomeText));
  }

  async doubleClickWelcomeText(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.welcomeText));
  }

  async longPressWelcomeText(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.welcomeText));
  }

  async expectWelcomeTextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.welcomeText), value, timeoutMs);
  }

  async expectWelcomeTextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.welcomeText), timeoutMs);
  }

  async expectWelcomeTextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.welcomeText), timeoutMs);
  }

  async expectWelcomeTextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.welcomeText), timeoutMs);
  }

  async expectWelcomeTextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.welcomeText), timeoutMs);
  }

  async expectWelcomeTextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.welcomeText), timeoutMs);
  }

  async expectWelcomeTextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.welcomeText), count, timeoutMs);
  }

  async longPressLoginWithBreezingMinds(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginWithBreezingMinds));
  }

  async expectLoginWithBreezingMindsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), value, timeoutMs);
  }

  async expectLoginWithBreezingMindsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), timeoutMs);
  }

  async expectLoginWithBreezingMindsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), timeoutMs);
  }

  async expectLoginWithBreezingMindsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), timeoutMs);
  }

  async expectLoginWithBreezingMindsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), timeoutMs);
  }

  async expectLoginWithBreezingMindsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), timeoutMs);
  }

  async expectLoginWithBreezingMindsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginWithBreezingMinds), count, timeoutMs);
  }

  async longPressBreezingMinds(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.breezingMinds));
  }

  async expectBreezingMindsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.breezingMinds), value, timeoutMs);
  }

  async expectBreezingMindsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.breezingMinds), timeoutMs);
  }

  async expectBreezingMindsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.breezingMinds), count, timeoutMs);
  }

}
