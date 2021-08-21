const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home extends Page {
    /**
     * define selectors using getter methods
     */
    
    get jobsLink () {
        return $('.ccs-richText span a')
    }

    clickjobsLink() {
        this.elementClick(this.jobsLink)
    }

}

module.exports = new Home();
