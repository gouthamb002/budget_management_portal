import React, {useState} from 'react'
import MainHeader from './components/MainHeader'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import LandingPage from './components/LandingPage'


const App = () => {
  const [user, setuser] = useState(false)

  return (
    // 'w-screen h-screen flex items-center justify-center '
    <div className="w-screen h-auto flex flex-col ">
        <MainHeader user={user} setuser={setuser}  />
        {user ? (
          <div className='w-screen pt-20 mt-10 flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-300'>
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
        )
        : <LandingPage user={user} setuser={setuser} />}
    </div>
 )
}

export default App