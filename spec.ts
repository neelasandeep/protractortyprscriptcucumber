import { browser, element, by,protractor } from 'protractor';
import { calculator } from './pageObjects/calculator';
import {angularHomePage} from './pageObjects/angularhomepage';
let result = element(by.css("h2[class='ng-binding']"));
describe('protractor start', () => {
    it('open angular website', async () => {
        let calc = new calculator();
        await browser.get('https://juliemr.github.io/protractor-demo/');
        // browser.driver.manage().window().maximize();
        await calc.firstbox.sendKeys('2');

        await calc.secondbox.sendKeys('3');
        await calc.go.click();

        await expect(result.getText()).toBe('5');
        calc.results.getText().then((text) => {
                console.log(text);
            });
        calc.operator.click().then(() => {
                console.log("hi");

            });




    });

    it('angular homepage', async () => {
        let ahp=new angularHomePage();
        await browser.get('https://angularjs.org/');
        await ahp.angularpage.click();
        let Ec=protractor.ExpectedConditions;
      browser.wait(Ec.visibilityOf(ahp.searchbox),8000)
        await ahp.searchbox.sendKeys('sandeep');


    });
});