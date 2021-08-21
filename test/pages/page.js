/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
let Utils = require('../utils/utils.js');
let utils = new Utils();

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    get acceptCookiesButton() {
        return $('button.accept-cookies-button')
    }

    acceptCookies() {
        this.elementClick(this.acceptCookiesButton);
    }

    open (path='/') {
        return browser.url(path)
    }

    switchWindowByUrl(url) {
        browser.switchWindow(url)
        this.acceptCookies();
    }

    selector (selectorDesktop, selectorMweb) {
        const selector = driver.isMobile ? selectorMweb : selectorDesktop
        return $(`${selector}`)
    }
    
    wait (element) {      
        element.waitForExist({ timeout: 15000 });
        element.waitForClickable({ timeout: 15000 });
    }

    elementClick(element) {
        this.wait(element);
        element.click();
    }

    isVisible(element) {
        return element.waitForDisplayed({ timeout: 15000 })
    }

    takeScreenshot(element,filePath,imagename) {
        element.saveScreenshot(filePath+imagename+'.png')
    }

    compareScreenshots(filePath,image1,image2) {
        return utils.compareScreenshots(filePath, image1,image2)
    }

}
