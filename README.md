<style>
    body{
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    margin-top: 0;
}

p{
    text-align: center;
}

.full-instructions-link{
    font-size: 2rem;
}

ol{
    max-width: 600px;
}

.github-repo-link{
    margin-bottom: 1rem;
}

a{
    font-size: 1.2rem;
}
 @media(max-width: 768px){
    .direction-to-how-to-use{
        display: none;
    }
    .full-instructions-link{
        display: block;
    }
 }
 @media(min-width: 769px){
    .direction-to-how-to-use{
        display: block;
    }
    .full-instructions-link{
        display: none;
    }
 }
</style>
<h1>Budget</h1>
<h2>Quick-start Instruction</h2>
<p class="quick-start-instruction">Call budgetResults(yrIncome, monthlyExpenses) in console.</p>
<a class="full-instructions-link" href="#how-to-use">Click me to go to "How To Use" for full instructions.</a> <!-- for mobile and shorter screens -->
<h2>About</h2>
<p>This console log budget app informs of 50% needs, 30% wants, and 20% savings. <br>
Currently, it is just for residents of California who are single or married filing separately.<br>
For now, it just returns results for income funds of 37K to 52K, 52K to 66K, and 66K to 338K.</p>
<h2>Information Returned In Console</h2>
<ol>
    <li>year salary</li>
    <li>monthly expenses</li>
    <li>50% for needs</li>
    <li>30% for wants</li>
    <li>20% for savings</li>
    <li>sum of 50% needs and 30% wants minus monthly expenses(and the same sum minus monthly expenses not times 12(described as "monthly funMoney estimated to be about")).</li>
</ol>
<h2 id="how-to-use">How To Use</h2>
    <ol>
        <li>Open the index.html file in a web browser.</li>
        <li>Navigate to the web browser developer tools.</li>
        <li>Find the JavaScript console.</li>
        <li>In the console of the opened index.html file, call the budgetResults function by writing budgetResults(yrIncome, monthlyExpenses)</li>
        <li>Replace the function parameters yrIncome and monthlyExpenses with year income number and monthly expenses number respectively.</li>
        <li>Press the enter key on your keyboard to print taxed income budget results in the console.</li>
    </ol>
    
    
<h2>Changes Coming Soon</h2>

* improvements
* Graphical interface web page
* code to return results for other income numbers
