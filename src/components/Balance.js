import React, { useState } from 'react'


const Balance = () => {
  const [Balance, setBalance] = useState(2150)
  
  return (
    <div className='text-center bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg'>
        <h4>
            Your Balance
        </h4>
        <h1 className='flex flex-row items-center justify-center p-2'>
          $ {Balance}
        </h1>
    </div>
  )
}

export default Balance