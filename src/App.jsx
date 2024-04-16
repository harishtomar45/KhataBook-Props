import React, { useState } from 'react'
import Navbar from './componants/Navbar'
import Form from './componants/Form'

import ListGroup from './componants/ListGroup'
import BalanceSection from './componants/BalanceSection'

const App = () => {



  const [transactions, setTransactions] = useState([
    {
      id: 1, 
      text: "salary",
      amount: 1000000,
    },
    {
      id: 2, 
      text: "rent",
      amount: -10000,
    }
  ])

  const [edit, setEdit] = useState({
    transaction:{},
    isEdit: false,
  })

  const addAmount = (text, amount) => {

    const newAmount = {
      id: crypto.randomUUID(),
      text: text,
      amount : parseInt(amount),
    }


    setTransactions([newAmount, ...transactions]);

  }

  const deleteTransaction = (id) => {
     setTransactions(transactions.filter((transaction) => transaction.id !== id ))
  }
 
   const editTransaction = (oldTransaction) => {

    setEdit({
      transaction: oldTransaction,
      isEdit: true,
    })

   }


   const updateTransaction = (updateTransaction) => {
          setTransactions(
            transactions.map((transaction) => (
            transaction.id === updateTransaction.id ? updateTransaction : transaction
          )))
   }




  return (
    <>
      <Navbar/>
      <div className="container p-5 ">
        <Form addAmount={addAmount} edit={edit} updateTransaction={updateTransaction} />
        <BalanceSection transactions={transactions}/>
        <ListGroup transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={editTransaction}/>
      </div>
    </>
  )
}

export default App
