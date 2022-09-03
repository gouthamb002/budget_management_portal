import React, { useState }  from 'react'

const AddTransaction = () => {

  const [Text, setText] = useState('')
  const [Amount, setAmount] = useState(0)

  return (
    <div>
        <h3>Add new transaction</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value = {Text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
                <div className="form-control">
                <label htmlFor="amount"> Amount <br />
                    <p>NOTE: Add expenses with negative sign!</p>
                </label>
                <input type="number" value = {Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction