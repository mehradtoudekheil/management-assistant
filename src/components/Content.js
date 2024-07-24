import React from 'react'
import AddItemContainer from './AddItemContainer';
import ListsContainer from './ListsContainer';
import ModalC from './ModalC';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import FormAlert from './FormAlert';

function Content() {

  const info = useContext(MyContext);

  return (
    <div className='w-full'>
        <div className='grid grid-cols-11 h-screen w-full'>
          
          <AddItemContainer/>
          <ListsContainer/>

          {
            info.showModal && <ModalC data={info.modalData}/>
          }
          
          {
            info.showFormAlert && <FormAlert />
          }

        </div>
    </div>
  )
}

export default Content;