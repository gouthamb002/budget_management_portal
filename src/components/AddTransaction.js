import React, { useState }  from 'react'

const AddTransaction = () => {

  const [Type, setType] = useState('')
  const [Payee, setPayee] = useState('')
  const [Amount, setAmount] = useState(0)
  const [Date, setDate] = useState('')
  const [ShowModalTrans, setShowModalTrans] = useState(false)

  return (
    <div className='flex flex-row items-center justify-center'>
        <button 
            className='bg-gradient-to-br from-blue-200 to-blue-500 hover:shadow-md rounded-lg w-auto p-2'
            onClick={() => setShowModalTrans(true)}
            >
            <div className='flex flex-row gap-2'>
                <h3>Add new transaction</h3>
                <p>+</p>
            </div>
        </button>
            {ShowModalTrans ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-96 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Add Transaction
                        </h3>
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" onClick={() => setShowModalTrans(false)}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        <form className="space-y-6" action="#">
                            <div>
                                <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Income/Expense</label>
                                <input type="text" value = {Type} onChange={(e) => setType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" required />
                            </div>
                            <div>
                                <label for="payee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Payee</label>
                                <input type="text" value = {Payee} onChange={(e) => setPayee(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" required />
                            </div>
                            <div>
                                <label for="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Amount</label>
                                <input type="number" value = {Amount} onChange={(e) => setAmount(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" required />
                            </div>
                            <div>
                                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Date</label>
                                <input type="date" value = {Date} onChange={(e) => setDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" required />
                            </div>
                        </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModalTrans(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModalTrans(false)}
                        >
                            Save Changes
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
    </div>
    
  )
}

export default AddTransaction