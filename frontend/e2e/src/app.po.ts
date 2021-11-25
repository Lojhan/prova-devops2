import { browser, by, element } from 'protractor';
import { Locator } from 'protractor/built/locators';


export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as unknown as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(<Locator>by.css('app-root .content span')).getText() as unknown as Promise<string>;
  }
}
