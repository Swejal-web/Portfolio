import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';



const useStyles = makeStyles({
    button: {
        backgroundColor:'grey',
        color:'black',
        fontWeight:'bold',
        fontSize:'1rem',
        display:'inline-block',
        outline:'none',
        border:'none',
        borderRadius:'8px',
        cursor:'pointer',
        '&:hover': {
            background:'#222',
            color:'white'
        }

    },
    label: {
        color:'white',
        fontSize:'1.2rem'
    },
    form: {
        padding:'0.5rem',
        margin: '20px 20px'
    },
   
    input: {
        width:'100%',
        padding:'0.5rem',
        
        backgroundColor:'#222',
        color: 'white',
        margin: '1rem 0',
        borderRadius:'8px',
       
        outline:'none',
        border:'none'
    },
    textarea: {
        width:'100%',
        padding:'0.5rem',
        backgroundColor:'#222',
        color: 'white',
        margin: '1rem 0',
        borderRadius:'8px',
        outline:'none',
        border:'none',
        minHeight: '100px'
    },
    alertBox: {
        marginTop:'20px',
        
        
        color:'white',
        borderRadius:'10px'
    }
})

const Result = () => {

    const classes = useStyles();
    return (
        <div className={classes.alertBox}>
            <p>Your message has been successfully sent.</p>
        </div>
    )
}

const SendMessage =() => {

    const classes = useStyles();

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message, setMessage] = useState('');
    const [result, showResult] =  useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_q3k2zki", "template_21a4v5m", e.target,"user_zFDJF8rI5ehPsAFmCFP1E")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      }

      setTimeout(() => {
          showResult(false)
      },5000)

    return (
        <div>
         <form className={classes.form} action='' onSubmit={sendEmail}>
             <div className={classes.textGroup}>
                 <label htmlFor='name' className={classes.label}>Your Name</label>
                 <input className={classes.input} type='text' id='name' name='fullName' value={name} onChange={(e) => setName(e.target.value)} />
                 
             </div>
             <div className={classes.textGroup}>
                 <label htmlFor='email '  className={classes.label}>Your Email  </label>
                 <input className={classes.input} type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
               
             </div>
             <div className={classes.textGroup}>
                 <label htmlFor='message'  className={classes.label}>Your Message  </label>
                 <textArea className={classes.textarea} type='text' id='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
               
             </div>
             <Button className={classes.button} type='submit'>Submit</Button>
                
             
                {result ? <Result /> : null}
            
         </form>
        </div>
    )
}

export default SendMessage;