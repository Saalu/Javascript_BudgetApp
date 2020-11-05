
class UI{
    constructor(){
        this.budgetForm = document.getElementById('budget-form')
        this.expenseForm = document.getElementById('expense-form')

        this.budgetFeedback = document.querySelector(".budget-feedback")
        this.expense = document.querySelector(".expense-feedback")
       
        this.budgetInput = document.getElementById('budget')
        this.amountInput = document.getElementById('expense-name')
        this.expenseInput = document.getElementById('amount')

    }
}


function eventListeners(){
    const budgetForm = document.getElementById('budget-form')
    const expenseForm = document.getElementById('expense-form')
    const epenseList = document.getElementById('expense-list')
}

const ui = new UI()

budgetForm.addEventListener('submit', (e)=>{})

expenseForm.addEventListener('submit', (e)=>{})


expenseList.addEventListener('submit', ()=>{})





document.addEventListener('DOMContentLoaded', function(){
    eventListeners()
})