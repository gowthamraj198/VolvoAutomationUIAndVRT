const {config} = require('./wdio.conf');

config.specs = [
    './test/specs/desktopWeb/**/*.js'
    // './src/specs/desktopWeb/verifyVideoIsPlaying*.js'
];

config.maxInstances = 3

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
            args: ['--headless', '--disable-gpu', "--no-sandbox", '--window-size=1280,800', '--disable-dev-shm-usage', '--disable-web-security']
          }
        // 'goog:chromeOptions': {
        //     args: [
        //         '--disable-web-security'
        //     ]
        // }
    }
]
exports.config = config;
