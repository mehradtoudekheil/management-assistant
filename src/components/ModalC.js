import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import DelModal from './modals/DelModal';
import ItemInfoModal from './modals/ItemInfoModal';
import SortOptions from './modals/SortOptions';
import ResetModal from './modals/ResetModal';

function ModalC() {

    const info = useContext(MyContext);

    let data = info.modalData;

    let ShowComponent;

    switch (data.modalType){
        case "DELETE" : 
        ShowComponent = <DelModal/>
        break;
        case "INFO" : 
        ShowComponent = <ItemInfoModal/>
        break;
        case "SORT" : 
        ShowComponent = <SortOptions/>
        break;
        case "RESET" : 
        ShowComponent = <ResetModal/>
    }


    return (
        <>
            {ShowComponent}
        </>


    )
}

export default ModalC;