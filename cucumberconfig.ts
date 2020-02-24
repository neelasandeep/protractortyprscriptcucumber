import {Config} from 'protractor';
export let config:Config={
    //seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
    directConnect:true,
    framework:'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),

 specs:['../features/demo.feature'],
 
 capabilities: {
     'browserName': 'chrome'
     
 
 },
 cucumberOpts:{
     require:[
     './stepDefinations/*.js'
 ]
}
 };