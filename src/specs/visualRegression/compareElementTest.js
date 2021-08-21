const HomePage = require('../../pages/home.page');
var config = require('../../data/test.config.js');
const { join } = require('path');

describe('Home page', () => {

     before(function () {
        // runs once before the first test in this block
         HomePage.open(config.testUrl);
         HomePage.acceptCookies();
     });


    it('should be same as image in baseline folder ', () => {
        HomePage.goTovideoTestimonials();
        expect(browser.checkElement((HomePage.testimonialVideos), 'videos', {
            ignoreAntialiasing: true,
            returnAllCompareData: false,
            actualFolder: join(process.cwd(), './reports/vrt-report/testActual'),
            baselineFolder: join(process.cwd(), './reports/vrt-report/testBaseline'),
            diffFolder: join(process.cwd(), './reports/vrt-report/testDiff'),

        })).toEqual(0);

    });

});


