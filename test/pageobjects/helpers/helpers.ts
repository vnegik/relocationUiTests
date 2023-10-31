import  '@wdio/globals';
export default class Helpers {

    public async performLogin(element: any){
        await element.click();
    }

   public async setElementValue(element: any, value: any) {
        return element.setValue(value);
    }

}
