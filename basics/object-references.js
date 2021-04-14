let myAcct = {
    name: "Ben Schweizer",
    expenses: 0,
    income: 0
}

let addExpense = (account, amount) => {
    account.expenses = account.expenses + amount
}
let addIncome = (income, amount) => {
    income.expenses = income.expenses + amount
}

let resetAccount = (account) => {
    account.expenses = 0
    account.income = 0
}

let getAcctSummary = (account) => {
    let balance = account.income - account.expenses
    return `Account for ${account.name}, balance of ${balance}, ${account.income} in income. Expenses of ${myAcct.expenses}`
} 
addExpense(myAcct, 3.03)
console.log(getAcctSummary(myAcct))
