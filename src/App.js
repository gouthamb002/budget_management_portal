import React from 'react'
import MainHeader from './components/MainHeader'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'


const App = () => {
  return (
    // 'w-screen h-screen flex items-center justify-center '
    <div className="w-screen h-auto flex flex-col bg-gradient-to-b from-green-100 to-green-300">
        <MainHeader />
        <div className='w-screen pt-20 mt-10 flex flex-col items-center justify-center gap-'>
          <Header />
          <div className='mt-5 mb-5'>
            <div className='p-5 '>
              <Balance />
            </div>
            <div className='p-5 flex-row'>
              <IncomeExpenses />
            </div>
            <div className='p-5'>
              <TransactionList />
            </div>
            <div className='p-5'>
              <AddTransaction />
            </div>
          </div>
        </div>
    </div>
 )
}

export default App