    // step 1 add event  handler 

document.getElementById('btn-withdraw').addEventListener('click', function() {

    // step 2: Get the input value 
    const  withdrawInputFieldElement = document.getElementById('withdraw-field');
    const withdrawInputFieldAmountString = withdrawInputFieldElement.value;
    const withdrawInputFieldAmount = parseFloat(withdrawInputFieldAmountString);


    // step 3 : Add withdraw total amount with the previous withdraw amount 
    const previousTotalWithdrawAmountElement = document.getElementById('withdraw-total');
    const previousTotalWithdrawAmountString = previousTotalWithdrawAmountElement.innerText;
    const previousTotalWithdrawAmount = parseFloat(previousTotalWithdrawAmountString);
    

   const currentWithdrawTotalAmount = withdrawInputFieldAmount + previousTotalWithdrawAmount;

   previousTotalWithdrawAmountElement.innerText = currentWithdrawTotalAmount;
 
   // step 4 : Subtraction withdraw amount from main balance 

   const balanceTotalElement = document.getElementById('balance-total');
   const previousTotalBalanceString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousTotalBalanceString);

   const currentBalance  = previousBalanceTotal - currentWithdrawTotalAmount;
   balanceTotalElement.innerText =currentBalance;
});
