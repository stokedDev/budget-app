function budgetResults(yrIncome, monthlyExpenses){
    console.log(`year income is ${yrIncome}`);
    console.log(`monthlyExpenses is ${monthlyExpenses}`);
    const fundsAfterTaxes68Kto349K = yrIncome > 68351 && yrIncome < 349137? 
                        yrIncome - Math.floor(((yrIncome-68350)*.093)+3009.40):
                        "salaryOutOfRange"; /* 54,082 to $68,350 */
    const fundsAfterTaxes54Kto68K = yrIncome > 54082 && yrIncome < 68350? 
                        yrIncome - Math.floor(((yrIncome-54081)*.08)+1867.88):
                        "salaryOutOfRange"; /*  38,960 to $54,081 */
    const fundsAfterTaxes38Kto54K = yrIncome > 38960 && yrIncome < 54081? 
                        yrIncome - Math.floor(((yrIncome-38959)*.06)+960.56):
                        "salaryOutOfRange";
    function chooseFundsAfterTaxesCalc(){
        return yrIncome > 68351 && yrIncome < 349137? fundsAfterTaxes68Kto349K: yrIncome > 54082 && yrIncome < 68350? fundsAfterTaxes54Kto68K: yrIncome > 38960 && yrIncome < 54081? fundsAfterTaxes38Kto54K: 'update for budgetResults function is needed for this salary tax range';
    }
    function calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes){
        return {
            "needs": monthlyExpenses * 12 <= fundsAfterTaxes * .5? `${fundsAfterTaxes * .5}, which is ${(fundsAfterTaxes * .5)-(monthlyExpenses * 12)} more than monthlyExpenses`: 'monthly expenses exceed budget for needs',
            "wants": (fundsAfterTaxes - (monthlyExpenses * 12)) * .3,
            "savings": (fundsAfterTaxes - (monthlyExpenses * 12)) * .2,
            "NeedsAndWantsMinusMonthlyExpenses": (fundsAfterTaxes * .8) - (monthlyExpenses * 12)
        }
    }
    console.log(`50%needs is ${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).needs}`);
    console.log(`30%wants is ${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).wants}`);
    console.log(`20%savings is ${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).savings}`);
    console.log(`(50% needs and 30% wants) minus (monthly expenses times 12) is ${calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).NeedsAndWantsMinusMonthlyExpenses}`);
    console.log(`(50% needs and 30% wants) minus monthly expenses is ${(calc_needs_wants_savingsOfFundsAfterTaxes(chooseFundsAfterTaxesCalc()).NeedsAndWantsMinusMonthlyExpenses)/12}`);
}