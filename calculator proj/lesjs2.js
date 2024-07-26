function calculateLoan() {
    var name = document.getElementById('name').value;
    var principal = document.getElementById('principal').value;
    var interestRate = document.getElementById('interestRate').value;

    if (!name || !principal || !interestRate) {
        alert('Vul alle velden in!');
        return;
    }

    var principalNumber = parseFloat(principal);
    var interestRateNumber = parseFloat(interestRate);
    var yearlyPayment = principalNumber * (interestRateNumber / 100);

    document.getElementById('outputName').textContent = 'Naam: ' + name;
    document.getElementById('outputPrincipal').textContent = 'Leensom: SRD ' + principalNumber.toFixed(2);
    document.getElementById('outputPayment').textContent = 'Aflossing per jaar: SRD ' + yearlyPayment.toFixed(2);
}
