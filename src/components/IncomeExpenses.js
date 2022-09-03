import React, {useState} from 'react'


const IncomeExpenses = () => {
  const [Income, setIncome] = useState(2999.00)
  const [Expense, setExpense] = useState(849.00)

  return (
    <div className='text-center flex flex-row items-center justify-center'>
        <div className='w-full bg-gradient-to-bl from-green-300 to-green-500 rounded-l-lg p-2'>
            <h4>Income</h4>
            <p>$ {Income}</p>
        </div>
        <div className='w-full bg-gradient-to-br from-red-300 to-red-500 rounded-r-lg p-2'>
            <h4>Expense</h4>
            <p>$ {Expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses