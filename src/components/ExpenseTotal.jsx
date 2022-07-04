import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
const ExpenseTotal = () => {

  const {expenses} = useContext(AppContext)

  const Spent = expenses.reduce((spending, item) =>{
    return  spending +=item.cost
  },0)

  return (
    <div className='alert alert-primary'>
        <span>Spent so far {Spent}</span>
    </div>
  )
}

export default ExpenseTotal
