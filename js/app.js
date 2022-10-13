function getValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const amount = parseInt(inputField.value);
    return amount;
}

function setValueById(elementId, value) {
    const textField = document.getElementById(elementId);
    textField.innerText = value;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const totalIncome = getValueById('income-total');

    //expenses
    const foodExpenses = getValueById('food-expenses');
    const rentExpenses = getValueById('rent-expenses');
    const clothesExpenses = getValueById('clothes-expenses');

    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    const balance = totalIncome - totalExpenses;

    const setTotalExpenses = setValueById('total-expenses', totalExpenses);
    const setBalance = setValueById('balance', balance);
})


document.getElementById('btn-save').addEventListener('click', function () {
    const savingPercentage = getValueById('saving-percentage');
    const totalIncome = getValueById('income-total');
    const balanceElement = document.getElementById('balance');
    const balance = parseInt(balanceElement.innerText);

    const savingAmount = parseInt(totalIncome * savingPercentage * 0.01);
    const remainingBalance = balance - savingAmount;

    const setSavingAmount = setValueById('saving-amount', savingAmount);
    const setRemainingBalance = setValueById('remaining-balance', remainingBalance);
})