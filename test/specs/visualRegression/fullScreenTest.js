const HomePage = require('../../pages/home.page');
var config = require('../../data/test.config.js');
const { join } = require('path');

describe('Home page, ', () => {

    before(function() {
        // runs once before the first test in this block
        HomePage.open(config.testUrl);
        HomePage.acceptCookies();
    });

   /*  enable this test if we want to save new set of baseline images
    it('should save some screenshots', () => {
        browser.saveFullPageScreen('fullPage', {
            // fullPageScrollTimeout: 3000,
        });
    });*/

    it('should be same as image in baseline folder ', () => {
        // Check a screen
        expect(browser.checkFullPageScreen('homePage', {
            ignoreColors: true,
            returnAllCompareData: true,
            actualFolder: join(process.cwd(), './reports/vrt-report/testActual'),
            baselineFolder: join(process.cwd(), './reports/vrt-report/testBaseline'),
            diffFolder: join(process.cwd(), './reports/vrt-report/testDiff'),
        }).misMatchPercentage).toEqual(0);
    });

});


