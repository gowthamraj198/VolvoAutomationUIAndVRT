const {config} = require('./wdio.conf');
const { join } = require('path');

config.specs = [
    './test/specs/visualRegression/**/*.js'
    // './src/specs/visualRegression/compareElementTest.js'
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
                },
                firefox: {
                    version: '0.29.1'
                }
            }
        },
    }
    ],
    [
        'image-comparison',
        // The options
        {
            // Some options, see the docs for more
            baselineFolder: join(process.cwd(), './reports/vrt-report/testBaseline'),
            formatImageName: '{tag}-{logName}-{width}x{height}',
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            // Options for the tabbing image
            tabbableOptions: {
                circle: {
                    size: 18,
                    fontSize: 18,
                    // ...
                },
                line: {
                    color: '#ff221a', // hex-code or for example words like `red|black|green`
                    width: 3,
                },
            }
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
