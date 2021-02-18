// Initial balance, small number for testing
//  let accountBalance = 300;
//The user should have a deposit cap of $50,000./
let accountBalance = 50000;

let bankOpen = true;

alert('Welcome to GalBank');
alert('We are glad to help you!\n\nPlease, select the transaction you want to make.');

// Object
// let mainMenu = {
//     withdraw: 'W',
//     deposit: 'D',
//     balance: 'B',
//     quit: 'Q'
// };

while (bankOpen) {
    let key = prompt("Please enter:\n\n - W for Withdraw \n - D for Deposit \n - B for Balance  \n - Q for Quit \n\nYou can use upper or lower case to select your transaction \nThank you ");

switch(key) {

    // Quit
    case 'Q': 
    case 'q':
        alert('Thank you for using our services. See you soon');
        bankOpen = false;
        break;

    // Balance
    case 'B':
    case 'b':
        alert(`Your bank account is up to date\nYour balance today is: $${accountBalance}`);
        if (accountBalance === 50000) break;
        break;   
              
    // Withdraw 
    case 'W':
    case 'w':    
        const cashRemoval = prompt('How much fund do you want to withdraw?');
        // alert('Remember, your balance today is: $' + accountBalance);
        // alert(`Remember, your balance today is: $${accountBalance}`);

        // Extra special charges
        const comission = 3; 
        const percentage = 100;

        alert(`This operation will apply a comission of $${cashRemoval * comission / percentage}`);
        alert(`Remember, your balance today is: $${accountBalance}`);
        
        let keyTwo = prompt('Do you want to continue this operation?\n "Y" for yes\n "N" for no\nYou can use upper or lower case to select your transaction');

        // Second switch (nested in the main)
        switch (keyTwo) {
            // Yes
            case 'Y':
            case 'y':
                let extraCharge = cashRemoval * 3 / 100;
                alert(`The total transaction will apply a 3% fee of $${extraCharge}`);
                let totalCharge = Number(cashRemoval) + extraCharge;
                // alert(totalCharge);
                if (totalCharge > accountBalance) {
                        alert('Sorry, you do not have sufficient funds to process the withdrawal, please make a deposit or choose another transaction.'); 
                    } else { (totalCharge < accountBalance);
                        alert(`Your remaining balance is: $${accountBalance = Number(accountBalance) - (Number(cashRemoval) + Number(extraCharge))}`);
                }
                break;
            // No
            case 'N':
            case 'n':
                alert('Transaction cancelled');  
                bankOpen = true;
            break;
        }
        break;

    // Deposit
    case 'D':
    case 'd':
        const depositAmount = prompt('How much fund do you want to deposit?');
        let limitAmount = accountBalance;

        if (depositAmount < 20000) {         
            limitAmount = function () {
                alert(`Your balance is $${accountBalance = Number(depositAmount) + accountBalance}`);
                };
            } else { (depositAmount > 10000);
                limitAmount = function () {
                alert('Your deposit transaction has reached the maximum fund limit allowed for today.\n\nFor more information, please contact our customer service');
            };
        }
        limitAmount(50000);
        break;                
    }
}
console.log('bank closed');