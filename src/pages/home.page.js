const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */


    get hamburgerIcon () {
        return this.selector('span[data-testid="burger"]')
    }

    get hamburgerMenus() {
        return $$('.SiteNav_LinksMenu button')
    }

    get hamburgerMenuItems() {
        return $$('a[data-autoid="nav:sideNavLinksMenuItem"]')
    }

    get videoBanner() {
        return $('#Video-1 video')
    }

    get textStatement () {
        return $('#TextStatement-1 p')
    }

    get callOuts() {
        return $$('div[data-autoid="IconTextItem:text"]')
    }

    get carSafetyText() {
        return $('a[data-autoid="iconCallouts:cta"]')
    }

    get testimonialVideo() {
        return $$('div[data-autoid="videoTestimonials:container"]')
    }

    get carouselItem() {
        return $('a[data-autoid="productListCarouselItem-0"]')
    }

    clickHamburgerIcon() {
        this.elementClick(this.hamburgerIcon);
    }

    clickMoreMenu() {
        this.elementClick(this.hamburgerMenus[4])
    }

    clickCareersMenus() {
        this.elementClick(this.hamburgerMenuItems[2])
    }

    getTextStatement() {
        console.log(this.textStatement.getText())
        return this.textStatement.getText();
    }

    getCallOutText() {
        console.log(this.callOuts[0].getText())
        return this.callOuts[0].getText();
    }

    getCarSafetyText() {
        console.log(this.carSafetyText.getText())
        return this.carSafetyText.getText();
    }

    isTestimonialVideoVisible() {
        return this.isVisible(this.testimonialVideo[0]);
    }

    isCarouselItemDisplayed() {
        return this.isVisible(this.carouselItem);
    }

    takeVideoScreenshot(path,image) {
        this.videoBanner.scrollIntoView();
        this.takeScreenshot(this.videoBanner,path,image)
    }
}

module.exports = new HomePage();
