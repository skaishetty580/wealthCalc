function showTool(id) {
    document.querySelectorAll('.tool-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}
function calculateMortgage() {
    const loan = parseFloat(document.getElementById('loan').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;
    const payment = loan * rate / (1 - Math.pow(1 + rate, -years));
    document.getElementById('mortgageResult').innerText = 'Monthly Payment: $' + payment.toFixed(2);
}
function calculateSavings() {
    const initial = parseFloat(document.getElementById('initial').value);
    const monthly = parseFloat(document.getElementById('monthly').value);
    const years = parseFloat(document.getElementById('saveYears').value);
    const rate = parseFloat(document.getElementById('saveRate').value) / 100 / 12;
    const months = years * 12;
    let futureValue = initial * Math.pow(1 + rate, months);
    for (let i = 1; i <= months; i++) {
        futureValue += monthly * Math.pow(1 + rate, months - i);
    }
    document.getElementById('savingsResult').innerText = 'Future Savings Value: $' + futureValue.toFixed(2);
}
function calculateRetirement() {
    const currentAge = parseInt(document.getElementById('retireAge').value);
    const goalAge = parseInt(document.getElementById('goalAge').value);
    const currentSave = parseFloat(document.getElementById('currentSave').value);
    const monthlySave = parseFloat(document.getElementById('monthlySave').value);
    const returnRate = parseFloat(document.getElementById('returnRate').value) / 100 / 12;
    const months = (goalAge - currentAge) * 12;
    let futureValue = currentSave * Math.pow(1 + returnRate, months);
    for (let i = 1; i <= months; i++) {
        futureValue += monthlySave * Math.pow(1 + returnRate, months - i);
    }
    document.getElementById('retirementResult').innerText = 'Estimated Retirement Savings: $' + futureValue.toFixed(2);
}
function calculateDebtPayoff() {
    let balance = parseFloat(document.getElementById('debtAmount').value);
    const payment = parseFloat(document.getElementById('monthlyPayment').value);
    const rate = parseFloat(document.getElementById('debtRate').value) / 100 / 12;
    let months = 0;
    while (balance > 0 && months < 600) {
        balance += balance * rate - payment;
        if (balance < 0) balance = 0;
        months++;
    }
    document.getElementById('debtResult').innerText = 'Payoff Time: ' + Math.floor(months / 12) + ' years and ' + (months % 12) + ' months';
}
function calculateBudget() {
    const income = parseFloat(document.getElementById('budgetIncome').value);
    const expenses = parseFloat(document.getElementById('budgetExpenses').value);
    document.getElementById('budgetResult').innerText = 'Estimated Monthly Savings: $' + (income - expenses).toFixed(2);
}
function calculateInvestment() {
    const initial = parseFloat(document.getElementById('invInitial').value);
    const monthly = parseFloat(document.getElementById('invMonthly').value);
    const years = parseFloat(document.getElementById('invYears').value);
    const rate = parseFloat(document.getElementById('invRate').value) / 100 / 12;
    const months = years * 12;
    let futureValue = initial * Math.pow(1 + rate, months);
    for (let i = 1; i <= months; i++) {
        futureValue += monthly * Math.pow(1 + rate, months - i);
    }
    document.getElementById('investmentResult').innerText = 'Investment Value: $' + futureValue.toFixed(2);
}
function calculateEmergencyFund() {
    const expenses = parseFloat(document.getElementById('emergencyExpenses').value);
    const months = parseFloat(document.getElementById('emergencyMonths').value);
    document.getElementById('emergencyResult').innerText = 'Recommended Emergency Fund: $' + (expenses * months).toFixed(2);
}
function calculateCardPayoff() {
    let balance = parseFloat(document.getElementById('cardBalance').value);
    const payment = parseFloat(document.getElementById('cardPayment').value);
    const rate = parseFloat(document.getElementById('cardRate').value) / 100 / 12;
    let months = 0;
    while (balance > 0 && months < 600) {
        balance += balance * rate - payment;
        if (balance < 0) balance = 0;
        months++;
    }
    document.getElementById('cardResult').innerText = 'Payoff Time: ' + Math.floor(months / 12) + ' years and ' + (months % 12) + ' months';
}
function calculateNetWorth() {
    const assets = parseFloat(document.getElementById('assets').value);
    const liabilities = parseFloat(document.getElementById('liabilities').value);
    document.getElementById('netWorthResult').innerText = 'Net Worth: $' + (assets - liabilities).toFixed(2);
}
