import React from 'react'
import AddItemContainer from './AddItemContainer';
import ListsContainer from './ListsContainer';
function Content() {
  return (
    <div className='w-full'>
        <div className='grid grid-cols-11 h-screen w-full'>

          <AddItemContainer/>
          <ListsContainer/>


        </div>
    </div>
  )
}

export default Content;