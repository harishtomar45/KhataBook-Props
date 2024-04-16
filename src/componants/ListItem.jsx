import React from 'react'

const ListItem = ({transaction, deleteTransaction, editTransaction}) => {
  return (
    <>
      <li className={transaction.amount > 0 ? "list-group-item my-2 bg-success rounded-0" : "list-group-item my-2 bg-danger rounded-0"}>
        <h1 className="display-6 text-light">{transaction.text} : {transaction.amount}</h1>
        <span className='float-end'>
            <button className="btn btn-outline-warning rounded-0 mx-2"
            onClick={()=> editTransaction(transaction)}
            >Edit</button>
            <button className="btn btn-outline-light rounded-0 mx-2" 
            onClick={()=>deleteTransaction(transaction.id)}
            >Delete</button>

        </span>
      </li>
    </>
  )
}

export default ListItem
