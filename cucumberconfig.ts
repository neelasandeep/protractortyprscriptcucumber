import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";
export let config:Config={
    //seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
    directConnect:true,
    framework:'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),

 specs:['../features/demo.feature'],
 
 capabilities: {
     'browserName': 'chrome'
     
 
 },
 onComplete:()=>{
    const options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);
 },

 cucumberOpts:{
    //tags:"@Calculatortest",
     format:"json:./cucumberreport.json",
     require:[
     './stepDefinations/*.js'
 ]
}
 };