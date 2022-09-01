import {byText, byValueKey} from "appium-flutter-finder";


describe('Example successful tests with another waiting element', () => {


    it('Example wait for element', async () => {
        try {
            await driver.execute('flutter:waitFor', byValueKey('plus'));
            await driver.elementClick(byValueKey('plus'));
        } catch (e) {
            console.error(e);
        }
    });

    it('Second example wait for element', async () => {
        try {
            await driver.elementClick(byValueKey('plus'));
            await driver.execute('flutter:waitFor', byText('2'));
        } catch (e) {
            console.log(e);
        }
    });

});
