import { ElementFinder,element,by } from "protractor";

export class angularHomePage{
    angularpage:ElementFinder;
    searchbox:ElementFinder;
    constructor(){
        this.angularpage=element(by.linkText('angular.io'));
        this.searchbox=element(by.css("input[type='search']"));
    }
}