const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home extends Page {
    /**
     * define selectors using getter methods
     */
    
    get locationTextBox() {
        return $('#innershell #keywordsearch-locationsearch')
    }

    isLocationBoxDisplayed() {
        return this.isVisible(this.locationTextBox)
    }

}

module.exports = new Home();
