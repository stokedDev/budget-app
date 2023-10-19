function budgetResults(yrSalary, monthlyExpenses){
    console.log(`year salary is ${yrSalary}`);
    console.log(`monthlyExpenses is ${monthlyExpenses}`);
    const fundsAfterTaxes66Kto338K = yrSalary > 66296 && yrSalary < 338639? 
                        yrSalary - Math.floor(((yrSalary-66295)*.093)+2918.91):
                        "salaryOutOfRange";
    const fundsAfterTaxes52Kto66K = yrSalary > 52000 && yrSalary < 66000? 
                        yrSalary - Math.floor(((yrSalary-52455)*.08)+1811.71):
                        "salaryOutOfRange";
    const fundsAfterTaxes37Kto52K = yrSalary > 37000 && yrSalary < 52000? 
                        yrSalary - Math.floor(((yrSalary-37788)*.06)+931.69):
                        "salaryOutOfRange";
    function chooseFundsAfterTaxesCalc(){
        return yrSalary > 66296 && yrSalary < 338639? fundsAfterTaxes66Kto338K: yrSalary > 52000 && yrSalary < 66000? fundsAfterTaxes52Kto66K: yrSalary > 37000 && yrSalary < 52000? fundsAfterTaxes37Kto52K: 'update for budgetResults function is needed for this salary tax range';
    }
    function calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes){
        return {
            "needs": monthlyExpenses * 12 <= fundsAfterTaxes * .5? `${fundsAfterTaxes * .5}, which is ${(fundsAfterTaxes * .5)-(monthlyExpenses * 12)} more than monthlyExpenses`: 'monthly expenses exceed budget for needs',
            "wants": (fundsAfterTaxes - (monthlyExpenses * 12)) * .3,
            "savings": (fundsAfterTaxes - (monthlyExpenses * 12)) * .2,
            "NeedsAndWantsMinusMonthlyExpenses": (fundsAfterTaxes * .8) - (monthlyExpenses * 12)
        }
    }
    console.log(`50%needs->${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).needs}`);
    console.log(`30%wants->${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).wants}`);
    console.log(`20%savings->${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).savings}`);
    console.log(`(50% needs and 30% wants) minus (monthly expenses times 12) -> ${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).NeedsAndWantsMinusMonthlyExpenses}`);
    console.log(`monthly funMoney estimated to be about ${(calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).NeedsAndWantsMinusMonthlyExpenses)/12}`);
    /* calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).NeedsAndWantsMinusMonthlyExpenses incorporates monthlyExpenses times 12 */
}