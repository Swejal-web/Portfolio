import React from 'react';
import {Dialog, } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';

import Modal from './modal';





const Popup = ({openPopup,setOpenPopup, project}) => {

 

    return (
        <Dialog open={openPopup} maxWidth='md' >
            <CssBaseline />
            <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} project={project}/>
        </Dialog>
    )
}

export default Popup;