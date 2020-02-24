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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
let result = protractor_1.element(protractor_1.by.css("h2[class='ng-binding']"));
let calc = new calculator_1.calculator();
const angularhomepage_1 = require("../pageObjects/angularhomepage");
cucumber_1.Given('I will Navigate to the Calc site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstbox.sendKeys(string);
    yield calc.secondbox.sendKeys(string2);
    yield calc.go.click();
}));
cucumber_1.Then('the ouptput displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    let Ec = protractor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(Ec.visibilityOf(calc.results), 8000);
    calc.results.getText().then((text) => {
        console.log(text);
    });
}));
let ahp = new angularhomepage_1.angularHomePage();
cucumber_1.Given('I will navigate to Anguklar Js page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://angularjs.org/');
}));
cucumber_1.When('I clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ahp.angularpage.click();
}));
cucumber_1.When('you will navigate to angular page', function () {
    let Ec = protractor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(Ec.visibilityOf(ahp.searchbox), 8000);
});
cucumber_1.Then('you will enter {string} in the search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield ahp.searchbox.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDBEQUFxRDtBQUNyRCwyQ0FBeUQ7QUFDekQsSUFBSSxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztBQUN2RCxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixvRUFBK0Q7QUFDL0QsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxHQUFRLEVBQUU7SUFFL0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDdkUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0osZUFBSSxDQUFDLDBDQUEwQyxFQUFFLENBQVEsTUFBTSxFQUFFLEVBQUU7SUFDaEUsSUFBSSxFQUFFLEdBQUMsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUNyQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUU5QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBSSxHQUFHLEdBQUMsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDOUIsZ0JBQUssQ0FBQyxxQ0FBcUMsRUFBRSxHQUFRLEVBQUU7SUFHckQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBSzlDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsMEJBQTBCLEVBQUUsR0FBUyxFQUFFO0lBRTFDLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLG1DQUFtQyxFQUFFO0lBRXhDLElBQUksRUFBRSxHQUFDLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDckMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFFcEQsQ0FBQyxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsMkNBQTJDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUNoRSxNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==