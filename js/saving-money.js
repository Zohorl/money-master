document.getElementById('calculate-button').addEventListener('click', function () {
    // income input
    const incomeInput = document.getElementById('income-input');
    const newIncomeInput = parseFloat(incomeInput.value);
    // food input
    const foodInput = document.getElementById('food-input');
    const newFoodInput = parseFloat(foodInput.value);
    // rent input
    const rentInput = document.getElementById('rent-input');
    const newRentInput = parseFloat(rentInput.value);
    // clothes input
    const clothesInput = document.getElementById('clothes-input');
    const newClothesInput = parseFloat(clothesInput.value);
    // total expenses inner tex
    const totalExpenses = document.getElementById('total-expenses');
    const previousTotalExpenses = parseFloat(totalExpenses.innerText);
    // total expenses amount
    const totalExpensesAmount = previousTotalExpenses + newFoodInput + newRentInput + newClothesInput;
    totalExpenses.innerText = totalExpensesAmount;
    // Balance
    const balanceText = document.getElementById('balance');
    const previousBalance = parseFloat(balanceText.innerText);
    const balanceAmount = newIncomeInput - totalExpensesAmount;
    balanceText.innerText = balanceAmount;
});
document.getElementById('save-button').addEventListener('click', function () {
    const savePercent = document.getElementById('save-input');
    const save = parseFloat(savePercent.value) / 100;
    // income input
    const incomeInput = document.getElementById('income-input');
    const newIncomeInput = parseFloat(incomeInput.value);

    const savingParcentAmount = newIncomeInput * save;
    // saving amount
    const savingAmountText = document.getElementById('saving-amount');
    const savingAmount = parseFloat(savingAmountText.innerText);
    savingAmountText.innerText = savingParcentAmount;
    // remaining balance
    // food input
    const foodInput = document.getElementById('food-input');
    const newFoodInput = parseFloat(foodInput.value);
    // rent input
    const rentInput = document.getElementById('rent-input');
    const newRentInput = parseFloat(rentInput.value);
    // clothes input
    const clothesInput = document.getElementById('clothes-input');
    const newClothesInput = parseFloat(clothesInput.value);
    // total expenses inner tex
    const totalExpenses = document.getElementById('total-expenses');
    const previousTotalExpenses = parseFloat(totalExpenses.innerText);
    // total expenses amount
    const totalExpensesAmount = previousTotalExpenses + newFoodInput + newRentInput + newClothesInput;
    // Balance
    const balanceText = document.getElementById('balance');
    const previousBalance = parseFloat(balanceText.innerText);
    const balanceAmount = newIncomeInput - totalExpensesAmount;
    // remaining balance
    const remainingBalanceTex = document.getElementById('remaining-balance');
    const remainingBalance = parseFloat(remainingBalanceTex.innerText);
    remainingBalanceTex.innerText = balanceAmount - savingParcentAmount;
});