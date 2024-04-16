import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transactions, deleteTransaction, editTransaction}) => {
  return (
    <>

        <h3>All Transaction : </h3>
      <ul className="list-group my-2">
       {
        transactions.map((transaction)=> (
        <ListItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} editTransaction={editTransaction} />
    ))
       }
      </ul>
      
    </>
  )
}

export default ListGroup
