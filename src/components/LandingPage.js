import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10 p-40 bg-gradient-to-b from-green-50 to-green-300'>
        <h1 className='text-8xl'>Hello There!</h1>
        <p className='text-2xl'>Are you someone who carelessly spends Money?</p>
        <p className='text-2xl'>Do you wanna keep track of all your transactions?</p>
        <p className='text-2xl'>Well....worry not! Signup to BuddyBudget and start tracking your expenses today.</p>
        <div className='mt-5'>
          <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              // onClick={() => setShowModal(true)}
          >
              Sign Up
          </button>
        </div>
        
    </div>
  )
}

export default LandingPage