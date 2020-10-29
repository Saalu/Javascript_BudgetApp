
class UI{
    constructor(){
        this.budgetFeedback = document.querySelector(".result .budget")
        this.budgetFeedback = document.querySelector(".result .expenses")
        this.budgetFeedback = document.querySelector(".result .balance")

        this.budgetInput = document.getElementById('budget')
        this.budgetInput = document.getElementById('expense-name')
        this.budgetInput = document.getElementById('amount')


    }
}

function eventListeners(){
    const budgetForm = document.getElementById('budget-form')
    const expenseForm = document.getElementById('expense-form')
    const epenseList = document.getElementById('expense-list')
}

document.addEventListener('DOMContentLoaded', function(){
    eventListeners()
})