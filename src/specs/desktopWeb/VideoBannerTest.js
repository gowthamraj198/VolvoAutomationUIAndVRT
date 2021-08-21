const HomePage = require('../../pages/home.page');
let config = require('../../data/test.config.js');
const assert = require('assert');

describe('In Home page', () => {

    before(function() {
        // runs once before the first test in this block
        HomePage.open(config.testUrl);
    });

    it('verify video is playing', () => {
        HomePage.acceptCookies();
        browser.pause(2000);
        HomePage.takeVideoScreenshot(config.screenshotLoc, 'image1');
        browser.pause(5000);
        HomePage.takeVideoScreenshot(config.screenshotLoc, 'image2');
        assert(HomePage.compareScreenshots(config.screenshotLoc, 'image1.png', 'image2.png')>=30);

    });

});


