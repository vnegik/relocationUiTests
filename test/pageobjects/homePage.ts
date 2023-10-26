import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
 
    public get aboutArea () {
        return $("//div[contains(@class,'lE7i3')]");
    }


    public open () {
        return super.open('');
    }
}

export default new HomePage();
