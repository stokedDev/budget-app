/* monthlyExpenses = 3000 rent, 
                     1000 food/household products, 
                     600 insurance, 
                     600 bike maintenance,
                     100 phone and internet,
                     +__
                     5300  */
// const yrSalary = 91891 // 47.50/hr part-time
// const monthlyExpenses = 4000;
// console.log(`year salary is ${yrSalary}`);
// console.log(`monthlyExpenses is ${monthlyExpenses}`);
// const fundsAfterTaxes66Kto338K = yrSalary > 66296 && yrSalary < 338639? 
//                         yrSalary - Math.floor(((yrSalary-66295)*.093)+2918.91):
//                         "salaryOutOfRange";
// const fundsAfterTaxes37Kto52K = yrSalary > 37000 && yrSalary < 52000? 
// yrSalary - Math.floor(((yrSalary-37788)*.06)+931.69):
// "salaryOutOfRange";  
// const fundsAfterTaxes52Kto66K = yrSalary > 52000 && yrSalary < 66000? 
// yrSalary - Math.floor(((yrSalary-52455)*.08)+1811.71):
// "salaryOutOfRange";  
// const needs = fundsAfterTaxes37Kto52K * .5;
// const wants = fundsAfterTaxes37Kto52K * .3;
// const savings = fundsAfterTaxes37Kto52K * .2;
// function calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes){
//     return {
//         "needs": monthlyExpenses * 12 <= fundsAfterTaxes * .5? `${fundsAfterTaxes * .5}, which is ${(fundsAfterTaxes * .5)-(monthlyExpenses * 12)} more than monthlyExpenses`: 'monthly expenses exceed budget for needs',
//         "wants": (fundsAfterTaxes - (monthlyExpenses * 12)) * .3,
//         "savings": (fundsAfterTaxes - (monthlyExpenses * 12)) * .2,
//         "NeedsAndWantsMinusMonthlyExpenses": (fundsAfterTaxes * .8) - (monthlyExpenses * 12)
//     }
// }
// console.log(`year salary is ${yrSalary}`);
// console.log(`50%needs->${calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).needs}`);
// console.log(`30%wants->${calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).wants}`);
// console.log(`20%savings->${calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).savings}`);
// console.log(`(50% needs and 30% wants) minus (monthly expenses times 12) -> ${calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).NeedsAndWantsMinusMonthlyExpenses}`);
// console.log(`(fundsAfterTaxes66Kto338K - monthlyExpenses times 12) + wants is ${((fundsAfterTaxes66Kto338K - (monthlyExpenses * 12)) + calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).wants)- (monthlyExpenses * 12)}`);
// console.log(`needs-actualNeeds is ${calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).needs-((monthlyExpenses*12))}`);
// console.log(`needs + wants - actualNeeds is ${(calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).needs+calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).wants)-(monthlyExpenses*12)} yearly`);
// console.log(`needs + wants - actualNeeds is ${(calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).needs+calc_needs_wants_savingsOfFundsAfterTaxes(fundsAfterTaxes66Kto338K).wants-(monthlyExpenses*12))/12} monthly`);
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
/* 156000 job needed to budget 50 30 20 */