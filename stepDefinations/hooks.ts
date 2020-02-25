import {Before,After, Status} from "cucumber";
import { browser } from "protractor";
Before({tags: "@Calculatortest"}, async () =>{
   browser.manage().window().maximize();
  });
  
  Before({tags: "@Angulartest"}, function () {
    console.log('i need to execute first');
  });

  After(  async function(scenario){
   
  console.log('test completed');
  if(scenario.result.status=== Status.FAILED){
 const screenshot=await browser.takeScreenshot();
this.attach(screenshot,"image/png");
} 

  });
  