// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('https://www.google.com/')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

// This test will require you to change some values in order to get your tests up and running
// You'll want to change each of the commented out pieces below
test('I can search Google', async () => {
    let searchTerms = ['Avengers: Endgame', 'Spiderman: into the spiderverse', 'What if']
    for (let i = 0; i < searchTerms.length; i++) {
        let searchbar = await driver.findElement(By.name('q'));
        await searchbar.clear() 
        await searchbar.sendKeys(`${searchTerms[i]}\n`);
        await driver.sleep(2000)
    }    
});
