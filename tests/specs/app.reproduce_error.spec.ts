

import {byText, byValueKey} from "appium-flutter-finder";


describe('The problem is due to the fact that methods are not supported by the appium server only in BrowserStack', () => {


    it('Example wait for tappable element', async () => {
        try {
            await driver.execute('flutter:waitForTappable', byValueKey('plus'));
            await driver.elementClick(byValueKey('plus'));
        } catch (e) {
            console.error(e);
        }
    });

    it('Example wait for absent element', async () => {
        try {
            await driver.elementClick(byValueKey('plus'));
            await driver.execute('flutter:waitForAbsent', byText('2'));
        } catch (e) {
            console.log(e);
        }
    });

});
