import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../Context/Context'
import { Span } from './ExpenseItemStyle'



const ExpenseItem = (props) => {

  const {dispatch} = useContext(AppContext)

  const onDelete = () => {
    dispatch({
      type: 'ONDELETE',
      payload: props.id
    })
  }
  

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'  >
        {props.name}
        <div>
            <Span>
                ${props.cost}
            </Span>
            <TiDelete size='1.5em' onClick={onDelete}/>
            
        </div>
    </li>
  )
}

export default ExpenseItem
