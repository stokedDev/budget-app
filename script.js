function budgetResults(yrIncome, monthlyExpenses){
    console.log(`year income is ${yrIncome}`);
    console.log(`monthlyExpenses is ${monthlyExpenses}`);
    const fundsAfterTaxes66Kto338K = yrIncome > 66296 && yrIncome < 338639? 
                        yrIncome - Math.floor(((yrIncome-66295)*.093)+2918.91):
                        "salaryOutOfRange";
    const fundsAfterTaxes52Kto66K = yrIncome > 52000 && yrIncome < 66000? 
                        yrIncome - Math.floor(((yrIncome-52455)*.08)+1811.71):
                        "salaryOutOfRange";
    const fundsAfterTaxes37Kto52K = yrIncome > 37000 && yrIncome < 52000? 
                        yrIncome - Math.floor(((yrIncome-37788)*.06)+931.69):
                        "salaryOutOfRange";
    function chooseFundsAfterTaxesCalc(){
        return yrIncome > 66296 && yrIncome < 338639? fundsAfterTaxes66Kto338K: yrIncome > 52000 && yrIncome < 66000? fundsAfterTaxes52Kto66K: yrIncome > 37000 && yrIncome < 52000? fundsAfterTaxes37Kto52K: 'update for budgetResults function is needed for this salary tax range';
    }
    function calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes){
        return {
            "needs": monthlyExpenses * 12 <= fundsAfterTaxes * .5? `${fundsAfterTaxes * .5}, which is ${(fundsAfterTaxes * .5)-(monthlyExpenses * 12)} more than monthlyExpenses`: 'monthly expenses exceed budget for needs',
            "wants": (fundsAfterTaxes - (monthlyExpenses * 12)) * .3,
            "savings": (fundsAfterTaxes - (monthlyExpenses * 12)) * .2,
            "NeedsAndWantsMinusMonthlyExpenses": (fundsAfterTaxes * .8) - (monthlyExpenses * 12)
        }
    }
    console.log(`50%needs -> ${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).needs}`);
    console.log(`30%wants -> ${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).wants}`);
    console.log(`20%savings -> ${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).savings}`);
    console.log(`(50% needs and 30% wants) minus (monthly expenses times 12) -> ${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).NeedsAndWantsMinusMonthlyExpenses}`);
    console.log(`(50% needs and 30% wants) minus monthly expenses -> ${(calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).NeedsAndWantsMinusMonthlyExpenses)/12}`);
}