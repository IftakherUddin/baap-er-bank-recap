/*
1. add event listener to the deposit button 
2. Addition of the total deposit 
3. Add total deposit with the total balance 
4. clear the  Deposit input field 

*/

document.getElementById('btn-deposit').addEventListener('click', function() {
 
const depositFieldElement = document.getElementById('deposit-field');
const depositFieldAmountString = depositFieldElement.value;
const depositFieldAmount = parseFloat(depositFieldAmountString);

// Step 2 : Add & set total deposit amount

const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalAmountString = depositTotalElement.innerText;
const previousDepositTotalAmount = parseFloat(previousDepositTotalAmountString);
const finalDepositTotalAmount = depositFieldAmount  + previousDepositTotalAmount;
depositTotalElement.innerText = finalDepositTotalAmount;


// step 3 : Add total deposit amount with the total balance 

const totalBalanceElement = document.getElementById('balance-total');
const previousBalanceTotalString = totalBalanceElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
const currentTotalBalance = finalDepositTotalAmount + previousBalanceTotal;
totalBalanceElement.innerText = currentTotalBalance;

// step : 4 : clear input field
depositFieldElement.value = '';

} );