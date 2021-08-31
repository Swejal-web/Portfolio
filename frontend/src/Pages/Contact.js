import React from 'react';
import {CssBaseline} from '@material-ui/core';

import Header from '../components/Header';
import InfoContact from '../components/InfoContact';
import SendMessage from '../components/SendMessage';

import '../Contact.css';


const Contact = () => {

  

    return (
        <>
        
            <Header/>
            
        <div className='contactSection'>
           
            <InfoContact/>
            <SendMessage/>
            
       </div>
     
     
       </>
    )
}

export default Contact;