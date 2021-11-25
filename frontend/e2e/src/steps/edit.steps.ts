import { Before, Given, Then, When } from "@cucumber/cucumber";
import { element, by, ElementArrayFinder } from "protractor";
import { expect } from "chai";
import { Locator } from 'protractor/built/locators';

let allItems: ElementArrayFinder

Given("I have at least one item in my list", async () => {
    allItems = element.all(<Locator>by.css(".item"));
    expect(await allItems.count()).to.be.greaterThan(0)
});

When("I press edit", async () => {
    const editButtons = element.all(<Locator>by.css(".edit"));
    await editButtons.first().click()
});

When('I populate the edit form', async () => {
    const nameInput = element(<Locator>by.id("name"));
    const descriptionInput = element(<Locator>by.id("description"));
    const valueInput = element(<Locator>by.id("value"));
  
    await nameInput.sendKeys(' edited')
    await descriptionInput.sendKeys(' edited')
    await valueInput.sendKeys(333)
  });

When('I click to edit', async () => {
    const editButton = element(<Locator>by.id("submit"));
    await editButton.click()
});

Then("the list should have my edited item", async () => {
    const descriptionItemns = element.all(<Locator>by.css(".description"));
    expect(await descriptionItemns.first().getText()).to.equal('description of the item edited')
});