import { join } from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        'platformName': "Android",
        'maxInstances': 1,
        'appium:automationName': "flutter",
        'appium:platformVersion': process.env.OS_VERSION,
        'appium:deviceName': process.env.DEVICE_NAME,
        'appium:app': join(process.cwd(), `./builds/app-counter.apk`),
        'appium:newCommandTimeout': 20000,
        'port': 4723,
        'path': "/wd/hub/",
    },
];

exports.config = config;
