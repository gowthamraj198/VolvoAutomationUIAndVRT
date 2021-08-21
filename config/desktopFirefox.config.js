const {config} = require('./wdio.conf');

config.specs = [
    // './src/specs/desktopWeb/**/*.js'
    './src/specs/desktopWeb/videoBannerTest.js'
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
                    firefox: { version: 'latest' }
                }
            },
            installArgs: {
                version: '3.141.59',
                baseURL: 'https://selenium-release.storage.googleapis.com',
                drivers: {
                    firefox: {
                        version: 'latest'
                    }
                }
            },
        }
    ],
    ['firefox-profile']
]

config.capabilities = [
    {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
            //args: ["--headless", "--no-sandbox", '-memory', '1024mb', '-shm-size', '2g', '-marionette', 'true','-shm-size="2g"']
            args: ['--headless', '--disable-gpu', '--disable-sandbox', '--no-remote', '--shm-size=4g', '-shm-size','4g', '-memory','4444mb', 'memory=4444mb' ],
        }
    }
]

firefoxProfile: {
        legacy: false
}
exports.config = config;
