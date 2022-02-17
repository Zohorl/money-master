//validation for negetive input
function firstValidation() {
    document.getElementById('negetive-message').style.display = 'block';
    alert('Negetive numbers are not allow');
}
//validation for empty input
function secondValidation() {
    document.getElementById('empty-message').style.display = 'block';
    alert('Input can not be empty');
}
//calculate button
const calculateButton = document.getElementById('calculate-button').addEventListener('click', function () {
    // input value
    const incomeField = document.getElementById('income-input').value;
    const foodField = document.getElementById('food-input').value;
    const rentField = document.getElementById('rent-input').value;
    const clothesField = document.getElementById('clothes-input').value;
    // checking if input empty
    if ((incomeField == 0) || (foodField == 0) || (rentField == 0) || (clothesField == 0)) {
        secondValidation();
    }
    else if ((incomeField > 0) || (foodField > 0) || (rentField > 0) || (clothesField > 0)) {
        document.getElementById('empty-message').style.display = 'none';
        // checking if input negetive
        if ((incomeField < 0) || (foodField < 0) || (rentField < 0) || (clothesField < 0)) {
            firstValidation();
        }
        else if ((incomeField >= 0) || (foodField >= 0) || (rentField >= 0) || (clothesField >= 0)) {
            document.getElementById('negetive-message').style.display = 'none';
            // calculating expenses
            const totalExpenses = parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField);
            document.getElementById('total-expenses').innerText = totalExpenses;
            // calculating balance
            const balance = parseFloat(incomeField) - totalExpenses;
            if (balance < 0) {
                document.getElementById('expenses-message').style.display = 'block';
                alert('Income can not be less than total expenses');
                document.getElementById('balance').innerText = 0;
            }
            else if (balance >= 0) {
                document.getElementById('expenses-message').style.display = 'none';
                document.getElementById('balance').innerText = balance;
                document.getElementById('save-button').removeAttribute('disabled');
                document.getElementById('saving-amount').innerText = 0;
                document.getElementById('remaining-balance').innerText = 0;
            }
        }
    }
});
let saveButton = document.getElementById('save-button').addEventListener('click', function () {
    const saveField = document.getElementById('save-input').value;
    if (saveField.length == 0) {
        secondValidation();
    }
    else if (saveField >= 0) {
        document.getElementById('negetive-message').style.display = 'none';
        let incomeField = document.getElementById('income-input').value;
        // percentage calculate
        const percentage = saveField / 100;
        // saving amount
        const savingAmount = incomeField * percentage;
        const balanceText = document.getElementById('balance').innerText;
        const balanceTotal = parseFloat(balanceText);
        if (balanceTotal >= savingAmount) {
            document.getElementById('balance-message').style.display = 'none';
            document.getElementById('saving-amount').innerText = savingAmount;
        }
        else if (balanceTotal < savingAmount) {
            document.getElementById('balance-message').style.display = 'block';
            alert('Balance is not less than saving amount');
        }
        // remaining balance
        document.getElementById('remaining-balance').innerText = balanceTotal - savingAmount;
    }
});