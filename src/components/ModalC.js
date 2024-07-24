import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import DelModal from './modals/DelModal';
import ItemInfoModal from './modals/ItemInfoModal';

function ModalC() {

    const info = useContext(MyContext);

    let data = info.modalData;

    let ShowComponent;

    if(data.modalType == "DELETE"){
        ShowComponent = <DelModal/>
    }else if(data.modalType == "INFO"){
        <ItemInfoModal/>
    }
   

    return (
        <>
            {ShowComponent}
        </>


    )
}

export default ModalC