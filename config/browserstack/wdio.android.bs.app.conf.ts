import { config } from '../wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.js',
];
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities

config.capabilities = [
    {
        // Set your BrowserStack config
        // @ts-ignore
        'browserstack.debug': true,

        // Set URL of the application under test
        app: 'bs://fea0f5a7a8e6a691514134fb62f8a800edf935fc',

        // Specify device and os_version for testing
        device: 'Google Pixel 3',
        os_version: '9.0',
        automationName: 'Flutter',
        // Set other BrowserStack capabilities
        project: 'test-project',
        build: 'support-example',
        name: 'reproduce_error'
    },
];

exports.config = config;
