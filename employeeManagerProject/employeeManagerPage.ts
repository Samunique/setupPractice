import {By, until, WebDriver, } from "selenium-webdriver";

export class employeeManagerPage {
    driver: WebDriver;
    url: string =  "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    header: By = By.css('.titleText');
    addEmployee: By = By.name('addEmployee');
    newEmployee: By = By.name('employee11')
    name: By = By.name('nameEntry');
    phoneNumber: By = By.name('phoneEntry')
    title: By = By.name('titleEntry');
    save: By = By.id('saveBtn');

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.header));
    }

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }
    async sendKeys(elementBy: By, key: any) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(key);
    }
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText()
    }

  }