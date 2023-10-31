import { browser } from '@wdio/globals';
const Header = require('../pageobjects/pagesElements/header.js');
const Footer = require('../pageobjects/pagesElements/footer.js');

export default class Page {
   
    constructor() {

        let header = new Header();
        let footer = new Footer();
    }

    public open (path: string) {
        return browser.url(`http://134.17.16.177/${path}`)
    }
}
