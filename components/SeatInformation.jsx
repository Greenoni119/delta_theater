import React from 'react'

const SeatInformation = () => {
  return (
<div className='flex space-x-10 justify-center '>
<div >
    <h2 >available</h2>
    <div className='bg-gray-300 h-3 w-4 rounded-t mx-auto'></div>
</div>
<div>
    <h2>selected</h2>
    <div className='bg-red-500 h-3 w-4 rounded-t mx-auto'></div>
</div>
<div>
    <h2>taken</h2>
    <div className='bg-gray-700 h-3 w-4 rounded-t mx-auto'></div>
</div>
   </div> 
  )
}

export default SeatInformation