import React, { useEffect, useState } from 'react'

const Form = ({addAmount, edit, updateTransaction}) => {

    const [ text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if(edit.isEdit){
            updateTransaction({
                id: edit.transaction.id,
                text: text,
                amount: parseInt(amount),
            })
        }else{
            addAmount(text, amount);

        }

      
      setText("")
      setAmount("");
    }


    useEffect(()=> {
        setText(edit.transaction.text)
        setAmount(edit.transaction.amount);
    }, [edit])
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" className="form-control p-1 my-2 rounded-0" 
        required
        placeholder='Enter text here'
         onChange={(e) => setText(e.target.value)}
         value={text}
        />
        <input type="number" className="form-control p-1 my-2 rounded-0" 
        required
        placeholder='Enter amount here'
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        />

        <button className="btn btn-success w-100 my-2 rounded-0">Save</button>

      </form>
    </>
  )
}

export default Form
''