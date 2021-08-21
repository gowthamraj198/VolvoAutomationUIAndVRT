const HomePage = require('../../pages/home.page');
var config = require('../../data/test.config.js');
const assert = require('assert');

describe('Home page', () => {

    before(function() {
        // runs once before the first test in this block
        HomePage.open(config.testUrl);
        HomePage.acceptCookies();
    });

    
    it('should have all sections are loaded properly', () => {
        assert(HomePage.getTextStatement()!='');
        assert(HomePage.getCallOutText()!='');
        assert(HomePage.getCarSafetyText()!='');
        assert(HomePage.isTestimonialVideoVisible());
        assert(HomePage.isCarouselItemDisplayed());
    });

});


