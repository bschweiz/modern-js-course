let myAcct = {
    name: "Ben Schweizer",
    expenses: 0,
    income: 0
}

let addExpense = (account, amount) => {
    account.expenses = account.expenses + amount
    console.log(`Account for ${account.name}, ${account.income} in income. Expenses of ${myAcct.expenses}`)
}

addExpense(myAcct, 3.03)