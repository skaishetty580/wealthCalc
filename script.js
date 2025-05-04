function showTool(id) {
    document.querySelectorAll('.tool-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Mortgage Calculator with amortization
function calculateMortgage() {
    const loan = parseFloat(document.getElementById('loan').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value);
    const n = years * 12;

    if (loan <= 0 || rate < 0 || years <= 0) {
        document.getElementById('mortgageResult').innerText = 'Please enter valid loan details.';
        return;
    }

    const payment = loan * rate / (1 - Math.pow(1 + rate, -n));
    document.getElementById('mortgageResult').innerText =
        'Monthly Payment: $' + payment.toFixed(2);

    let balance = loan;
    let totalInterest = 0;
    let output = '<table border="1" cellpadding="6" cellspacing="0" style="margin-top:10px;"><tr><th>Payment #</th><th>Principal</th><th>Interest</th><th>Balance</th></tr>';
    for (let i = 1; i <= n; i++) {
        const interest = balance * rate;
        const principal = payment - interest;
        totalInterest += interest;
        balance -= principal;
        if (balance < 0) balance = 0;
        output += `<tr><td>${i}</td><td>$${principal.toFixed(2)}</td><td>$${interest.toFixed(2)}</td><td>$${balance.toFixed(2)}</td></tr>`;
    }
    output += '</table>';
    document.getElementById('mortgageResult').insertAdjacentHTML("afterend",
        '<br>Total Interest: $' + totalInterest.toFixed(2) + '<br>' + output);
}

// Debt Payoff Calculator with breakdown
function calculateDebtPayoff() {
    let balance = parseFloat(document.getElementById('debtAmount').value);
    const payment = parseFloat(document.getElementById('monthlyPayment').value);
    const rate = parseFloat(document.getElementById('debtRate').value) / 100 / 12;
    let months = 0;

    if (balance <= 0 || payment <= 0) {
        document.getElementById('debtResult').innerText = 'Please enter valid debt and payment info.';
        return;
    }

    let totalInterest = 0;
    let output = '<table border="1" cellpadding="6" cellspacing="0" style="margin-top:10px;"><tr><th>Month</th><th>Interest</th><th>Principal</th><th>Balance</th></tr>';

    while (balance > 0 && months < 600) {
        const interest = balance * rate;
        const principal = payment - interest;
        balance -= principal;
        if (balance < 0) balance = 0;
        totalInterest += interest;
        months++;
        output += `<tr><td>${months}</td><td>$${interest.toFixed(2)}</td><td>$${principal.toFixed(2)}</td><td>$${balance.toFixed(2)}</td></tr>`;
    }

    const years = Math.floor(months / 12);
    const remMonths = months % 12;

    document.getElementById('debtResult').innerText = "See breakdown below:";
    document.getElementById('debtResult').insertAdjacentHTML("afterend",
        'Debt paid off in: ' + years + ' years and ' + remMonths + ' months' +
        '<br>Total Interest Paid: $' + totalInterest.toFixed(2) + '<br>' + output + '</table>');
}

// Investment Growth Calculator with breakdown
function calculateInvestment() {
    const initial = parseFloat(document.getElementById('invInitial').value);
    const monthly = parseFloat(document.getElementById('invMonthly').value);
    const years = parseFloat(document.getElementById('invYears').value);
    const rate = parseFloat(document.getElementById('invRate').value) / 100 / 12;
    const months = years * 12;

    if (initial < 0 || monthly < 0 || years <= 0 || rate < 0) {
        document.getElementById('investmentResult').innerText = 'Enter valid investment details.';
        return;
    }

    let balance = initial;
    let totalContributions = initial;
    let output = '<table border="1" cellpadding="6" cellspacing="0" style="margin-top:10px;"><tr><th>Month</th><th>Contributed</th><th>Interest</th><th>Balance</th></tr>';

    for (let i = 1; i <= months; i++) {
        const interest = balance * rate;
        balance += interest + monthly;
        totalContributions += monthly;
        output += `<tr><td>${i}</td><td>$${monthly.toFixed(2)}</td><td>$${interest.toFixed(2)}</td><td>$${balance.toFixed(2)}</td></tr>`;
    }

    const totalInterest = balance - totalContributions;

    document.getElementById('investmentResult').innerText = "See investment growth below:";
    document.getElementById('investmentResult').insertAdjacentHTML("afterend",
        'Estimated Investment Value: $' + balance.toFixed(2) +
        '<br>Total Contributions: $' + totalContributions.toFixed(2) +
        '<br>Total Interest Earned: $' + totalInterest.toFixed(2) +
        '<br>' + output + '</table>');
}
