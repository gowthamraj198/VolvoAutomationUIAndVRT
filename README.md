# WebdriverIO-appium-mocha

UI Automation and Visual Regression Testing using WebDriverIO and mocha

## Based on

- WebdriverIO v6
- Selenium 3.141.59
- Mocha v6
- Node version 10.16 or higher

## Supports
- [X] Page Object Model
- [X] Test scenarios in mocha
- [X] Chrome and firefox (latest versions) with various window sizes
- [X] Parallel execution
- [X] HTML reporting with screenshots

## Running tests in local machine
Follow the below commands:

- Make sure `node_modules and reports` folders are deleted

- Install dependencies using `npm i` in the terminal.

- Execute `npm run mobileWeb` to run in chrome headless (window size - 375 X 812)

- Execute `npm run desktopChrome` to run chrome headless  (window size - 1200 X 800)

- Execute `npm run desktopFirefox` to run firefox [make sure you run in non-headless mode]

- Execute `npm run vrt` to run visual regression testing in chrome headless


## Running tests inside docker containter (preferred method)
 
- Build docker image using `docker build -t volvo-wdio .` from the project root folder
- To Run a container using the newly built docker container, run the command `docker run --name volvo -it volvo-wdio bash`

- ### Inside the container, 

  - Make sure `node_modules and reports` folders are deleted
  - Install dependencies using `npm i` in the terminal.
  - Execute `npm run mobileWeb` to run in chrome headless (window size - 375 X 812)
  - Execute `npm run desktopChrome` to run chrome headless  (window size - 1200 X 800)
  - Execute `npm run desktopFirefox` to run firefox headless
  - Execute `npm run vrt` to run visual regression testing in chrome headless


## About the project

### project structure
````
.
|-- config
|-- driver
|-- reports
|-- test
    |-- data
    |-- pages
    |-- utils
    |-- specs
         |-- desktopWeb
         |-- mobileBrowser
         |-- visualRegression
````

### directories and files detail

main dir | use
------------ | -------------
config | contains config files
driver | contains drivers
test   | tests and data
reports   | contains HTML report using html-nice-reporter, screenshots and screens taken during vrt

test dir     | use
------------ | -------------
data | contains data for tests like urls, account numbers etc. 
pages | contains page objects (POM)
specs   | tests 
utils   | contains common functions like screenshots, screencompare etc. 

specs dir | use
------------ | -------------
desktopWeb | tests that run in normal web browser
mobileBrowser | tests that run in chrome (window size - 1200 X 800)
visualRegression   | vrt tests

