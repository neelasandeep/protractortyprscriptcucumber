import { Given, When, Then } from "cucumber";
import { calculator } from '../pageObjects/calculator';
import { browser, element, by, protractor } from 'protractor';


import chai from "chai";

import { angularHomePage } from '../pageObjects/angularhomepage';
let result = element(by.css("h2[class='ng-binding']"));
let calc = new calculator();
let expect = chai.expect;
Given('I will Navigate to the {string} site', async (string)=> {
    if(string==='calc'){
        await browser.get('https://juliemr.github.io/protractor-demo/');
        
    }else if(string==='angularjs'){
        await browser.get('https://angularjs.org/');
    }
    
  });

When('I add two numbers {string} and {string}', async (string, string2) => {
    await calc.firstbox.sendKeys(string);

    await calc.secondbox.sendKeys(string2);
    await calc.go.click();
});


Then('the ouptput displayed should be {string}', async (string) => {
    let Ec = protractor.ExpectedConditions;
    browser.wait(Ec.visibilityOf(calc.results), 8000);

    await calc.results.getText().then((text) => {
      expect(text).to.equal(string);
    });
});

let ahp = new angularHomePage();

When('I clicked on header link', async () => {

    await ahp.angularpage.click();
});
When('you will navigate to angular page', function () {

    let Ec = protractor.ExpectedConditions;
    browser.wait(Ec.visibilityOf(ahp.searchbox), 8000);

});
Then('you will enter {string} in the search box', async (string) => {
    await ahp.searchbox.sendKeys(string).then(()=>{
        console.log(string);
    });
});


