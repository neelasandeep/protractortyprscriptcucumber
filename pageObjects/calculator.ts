import { ElementFinder, element,by } from "protractor";

export class calculator{
firstbox:ElementFinder;
secondbox:ElementFinder;
go:ElementFinder;
results:ElementFinder;
operator:ElementFinder;
constructor(){
    this.firstbox=element(by.css("input[ng-model='first']"));
   this.secondbox= element(by.css("input[ng-model='second']"));
   this.go=element(by.css("button[id='gobutton']"));
   this.results=element(by.repeater('result in memory'))
   .element(by.css("td:nth-child(3)"));
   this.operator=element(by.model('operator'))
   .element(by.css('option:nth-child(4)'));
}
}