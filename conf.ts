import {Config} from 'protractor';
export let config:Config={
    //seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
    directConnect:true,
 specs:['spec.js'],
 
 capabilities: {
     'browserName': 'chrome'
     
 
 }
 };