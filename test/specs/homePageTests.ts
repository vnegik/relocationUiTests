import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/homePage.js'


describe('Home page UI tests.', () => {

    before(async () => {
        await browser.maximizeWindow();
        await HomePage.open();
    });

    it('Check that About area is displayed.', async () => {

        await expect(HomePage.aboutArea).toBeDisplayed();
    })
})

