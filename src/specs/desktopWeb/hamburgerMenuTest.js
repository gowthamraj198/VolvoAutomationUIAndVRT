const HomePage = require('../../pages/home.page');
const CareersPage = require('../../pages/careers.page');
const JobsPage = require('../../pages/jobs.page');
var config = require('../../data/test.config.js');
const assert = require('assert');

describe('In careers page', () => {

    before(function() {
        // runs once before the first test in this block
        HomePage.open(config.testUrl);
        HomePage.acceptCookies();
    });

    
    it('see avialable jobs', () => {
        HomePage.clickHamburgerIcon();
        HomePage.clickMoreMenu();
        HomePage.clickCareersMenus();
        HomePage.switchWindowByUrl(config.careersPageUrl);
        CareersPage.acceptCookies();
        CareersPage.clickjobsLink();
        assert(JobsPage.isLocationBoxDisplayed());
    });

});


