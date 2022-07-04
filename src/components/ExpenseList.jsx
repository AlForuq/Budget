import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import ExpenseItem from './ExpenseItem'

const ExpenseList= () => {

  const {expenses} = useContext(AppContext)

  return (
    <ul className='list-group'>
      {expenses.map(expense =>(
        <div key={expense.id}>
          <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
        </div>
      ) )}
    </ul>
  )
}

export default ExpenseList

