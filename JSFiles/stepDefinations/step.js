"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const angularhomepage_1 = require("../pageObjects/angularhomepage");
let result = protractor_1.element(protractor_1.by.css("h2[class='ng-binding']"));
let calc = new calculator_1.calculator();
let expect = chai_1.default.expect;
cucumber_1.Given('I will Navigate to the {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string === 'calc') {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if (string === 'angularjs') {
        yield protractor_1.browser.get('https://angularjs.org/');
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstbox.sendKeys(string);
    yield calc.secondbox.sendKeys(string2);
    yield calc.go.click();
}));
cucumber_1.Then('the ouptput displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    let Ec = protractor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(Ec.visibilityOf(calc.results), 8000);
    yield calc.results.getText().then((text) => {
        expect(text).to.equal(string);
    });
}));
let ahp = new angularhomepage_1.angularHomePage();
cucumber_1.When('I clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ahp.angularpage.click();
}));
cucumber_1.When('you will navigate to angular page', function () {
    let Ec = protractor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(Ec.visibilityOf(ahp.searchbox), 8000);
});
cucumber_1.Then('you will enter {string} in the search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield ahp.searchbox.sendKeys(string).then(() => {
        console.log(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDBEQUF1RDtBQUN2RCwyQ0FBOEQ7QUFHOUQsZ0RBQXdCO0FBRXhCLG9FQUFpRTtBQUNqRSxJQUFJLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsZ0JBQUssQ0FBQyxzQ0FBc0MsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzFELElBQUcsTUFBTSxLQUFHLE1BQU0sRUFBQztRQUNmLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztLQUVuRTtTQUFLLElBQUcsTUFBTSxLQUFHLFdBQVcsRUFBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDL0M7QUFFSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3RFLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFckMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzlELElBQUksRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDdkMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbEQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUksR0FBRyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBRWhDLGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7SUFFeEMsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7SUFFdEMsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUN2QyxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV2RCxDQUFDLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywyQ0FBMkMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQy9ELE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRTtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9