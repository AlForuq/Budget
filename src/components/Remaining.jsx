import React, { useContext } from 'react'
import {AppContext} from '../Context/Context'

const Remaining = () => {

  const {expenses, budget} = useContext(AppContext)

  const Total = expenses.reduce((sum, item) =>{
    return sum+= item.cost 
  }, 0)

  const alertType = ()=>{

    if(budget >= Total){
      return 'alert-success'
    }
    else if(budget < Total){
      return 'alert-danger'
    }
  } 

  const other=()=>{
    if(budget < Total){
     return alert('not enough')
    }
  }
  other()

  
  return (
    <div className={`alert ${alertType()}`}>
        <span>Remaining: ${budget - Total}</span>
    </div>
  )
}

export default Remaining
