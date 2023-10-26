import { browser } from '@wdio/globals'

export default class Page {
    public open (path: string) {
        return browser.url(`http://134.17.16.177/${path}`)
    }
}
