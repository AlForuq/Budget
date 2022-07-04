import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AppContext } from '../Context/Context'
const AddExpenseForm = () => {

  const {dispatch} = useContext(AppContext)

  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const boss = (e) =>{
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    }
    
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense, 
    })
    setName('')
    setCost('')
  }

  return (
    <form onSubmit={boss}>
          <div className='row'>
            <div className='col-sm'>
                <label for='name'>Name of Bill</label>
                <input onChange={ (e)=> setName(e.target.value)} required='required' type='text' className='form-control' id='name' value={name} />
            </div>
            <div className='col-sm'>
                <label for='cost'>Cost</label>
                <input onChange={(e)=> setCost(e.target.value)} required='required' type='text' className='form-control' id='cost' value={cost} />
            </div>
            <div className='col-sm mt-3'>
              <button type='submit' className='btn btn-primary'>Save</button>
            </div>
          </div>
      
    </form>
    
  )
}

export default AddExpenseForm
