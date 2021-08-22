const {config} = require('./wdio.conf');

// appium capabilities


config.maxInstances = 2


config.specs = [
    './test/specs/mobileBrowser/**/*.js'
];


config.services = [
    [
        'selenium-standalone', {
        logPath: 'logs',
        args: {
            version : '3.141.59',
            seleniumArgs: [
                '-host', 'localhost', '-port', '4444'
            ],
            drivers: {
                chrome: {
                    version: '92.0.4515.43',
                    arch: process.arch
                }
            }
        },
        installArgs: {
            version: '3.141.59',
            baseURL: 'https://selenium-release.storage.googleapis.com',
            drivers: {
                chrome: {
                    version: '92.0.4515.43',
                    arch: process.arch,
                    baseURL: 'https://chromedriver.storage.googleapis.com'
                }
            }
        },
    }
    ]
]
config.capabilities = [
    {
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
        //eslint-disable-next-line max-len
            args: ['--headless', '--disable-gpu', "--no-sandbox", '--window-size=1280,800', '--disable-dev-shm-usage', '--disable-web-security']
          }
        // 'goog:chromeOptions': {
        //     args: [
        //         '--disable-web-security', '--window-size=375,812'
        //     ]
        // }
    }
]
exports.config = config;
