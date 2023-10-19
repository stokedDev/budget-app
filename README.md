# budget-app

This console log budget app informs of 50% needs, 30% wants, and 20% savings. <br>
Currently, it is just for residents of California who are single or married filing separately.<br>
For now, it just returns results for income funds of 37K to 52K, 52K to 66K, and 66K to 338K.<br>

## Information Returned

Information returned in console is: <br>
year salary, <br>
monthly expenses,<br> 
50% for needs, <br>
30% for wants, <br>
20% for savings, <br>
sum of 50% needs and 30% wants minus monthly expenses(and the same sum minus monthly expenses not times 12(described as "monthly funMoney estimated to be about")).

## How To Use

1. Open the index.html file in a web browser.<br>
2. Navigate to the web browser developer tools. <br>
3. Find the JavaScript console. <br>
3. In the console of the opened index.html file, call the budgetResults function by writing budgetResults(yrSalary, monthlyExpenses) <br>
4. Replace the function parameters yrSalary and monthlyExpenses with year income number and monthly expenses number respectively.<br>
5. Press the enter key on your keyboard.<br>
After following the above steps, income-taxed budget results should print in the console.

## Changes Coming Soon

* inconsistency corrections
* other corrections
* Graphical interface web page
* code to return results for other income numbers