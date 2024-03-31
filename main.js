#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 4321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Fast Cash", "Cash Withdraw", "Balance Inquiry"]
        }
    ]);
    if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "amount",
                message: "Select fast cash amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= fastCash.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Cash Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Balance Inquiry") {
        console.log(`Your remaining balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
;
