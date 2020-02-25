Feature: I am going to validate my website functionalities

@Calculatortest
Scenario Outline:  calculator Add Functionality
Given  I will Navigate to the "calc" site
When  I add two numbers "<number1>" and "<number2>"
Then the ouptput displayed should be "<number3>"
Examples:
| number1 | number2 | number3  |
| 2  | 3  | 5 |
|4|5|7|

@Angulartest
Scenario: check angular functionality
Given I will Navigate to the "angularjs" site
When  I clicked on header link
And you will navigate to angular page
Then you will enter "sandeep" in the search box