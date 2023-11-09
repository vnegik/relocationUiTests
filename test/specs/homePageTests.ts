import HomePage from '../pageobjects/homePage.js';
import { browser } from '@wdio/globals';
import { expect } from '@wdio/globals';


describe('Home page UI tests.', () => {

   before(async () => {
        await HomePage.open();
        await browser.maximizeWindow();
    });

    it('Check that About area is displayed.', async () => {
        await HomePage.aboutArea.waitForDisplayed({timeout: 10000, timeoutMsg: 'Home page is not displayed.'});
        await expect(HomePage.aboutArea).toBeDisplayed();
    })
})

