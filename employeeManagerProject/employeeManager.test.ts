import {Builder, Capabilities, until, WebDriver, } from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import { employeeManagerPage } from './employeeManagerPage';
const en = new employeeManagerPage(driver)

describe('Employee Manager Test', () => {
  beforeEach(async () => {
    await en.navigate()
  });
  afterAll(async () => {
    await driver.quit()
  });

test("Adding and Editing An Employee", async () => {
  
  await en.click(en.addEmployee);
  await en.click(en.newEmployee);
  await en.sendKeys(en.name, 'Sam Samson');
  await en.sendKeys(en.phoneNumber,"9568675309")
  await en.sendKeys(en.title, "The Man")
  await en.click(en.save);
  });
});
