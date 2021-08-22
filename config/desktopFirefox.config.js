const {config} = require('./wdio.conf');

config.specs = [
    './test/specs/desktopWeb/**/*.js'
    // './src/specs/desktopWeb/videoBannerTest.js'
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
            args: ["--headless", "--no-sandbox", '-memory', '1024mb', '-shm-size', '4g', '-marionette', 'true','-shm-size="4g"','-shm-size=4g']
        }
    }
]

firefoxProfile: {
        legacy: false
}
exports.config = config;
