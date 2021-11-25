import { Before, Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";
import { Locator } from 'protractor/built/locators';


let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given("I am on the home page", async () => {
  await page.navigateTo();
});

When("I populate the form", async () => {
  const nameInput = element(<Locator>by.id("name"));
  const descriptionInput = element(<Locator>by.id("description"));
  const valueInput = element(<Locator>by.id("value"));

  await nameInput.sendKeys('name of the item')
  await descriptionInput.sendKeys('description of the item')
  await valueInput.sendKeys('666')
});

When('I click to add', async () => {
  const addbutton = element(<Locator>by.id("submit"));
  await addbutton.click()
});

Then("The list should have a new item", async () => {
    const allItems = element.all(<Locator>by.css(".item"));
    expect(await allItems.count()).to.equal(1)
});