import { Then, When } from "@cucumber/cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";
import { Locator } from 'protractor/built/locators';

When('I press remove', async () => {
  const removeButtons = element.all(<Locator>by.css(".remove"));
  await removeButtons.first().click()
});

Then("the item should be removed", async () => {
    const allItems = element.all(<Locator>by.css(".item"));
    expect(await allItems.count()).to.equal(0)
});