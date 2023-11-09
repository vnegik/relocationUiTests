//import { browser } from '@wdio/globals';
import Header  from '../pageobjects/pagesElements/header.js';
import Footer from '../pageobjects/pagesElements/footer.js';
//import Helpers from '../pageobjects/helpers/helpers.js';
class Page {
   
    constructor() {

        let header = new Header();
        let footer = new Footer();
       // let helpers = new Helpers();
    }

    public open (path: string) {
        return browser.url(`http://134.17.16.177/${path}`)
    }
}
export default Page;
