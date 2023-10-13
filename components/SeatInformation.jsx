import React from 'react'

const SeatInformation = () => {
  return (
<div className='flex space-x-10 justify-center '>
<div >
    <h2 className='text-white'>Available</h2>
    <div className='bg-white h-3 w-4 rounded-t mx-auto'></div>
</div>
<div>
    <h2 className='text-amber-300'>Selected</h2>
    <div className='bg-amber-300 h-3 w-4 rounded-t mx-auto'></div>
</div>
<div>
    <h2 className='text-red-400'>Taken</h2>
    <div className='bg-red-400 h-3 w-4 rounded-t mx-auto'></div>
</div>
   </div> 
  )
}

export default SeatInformation
