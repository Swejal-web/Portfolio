import React from 'react';
import {Typography, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles =  makeStyles((theme) => ({
    title: {
        padding:'20px',
        background: '#101010',
        color: 'white',
        marginTop:'-20px',
        [theme.breakpoints.down('sm')] : {
            marginTop:'0px',
            fontSize:'2.5rem'
        }
        },
    icon: {
        color:'white'
    },
    text: {
        color:'white',
        [theme.breakpoints.down('sm')] : {
           fontSize:'1rem',
            
        },
    },
    info: {
        padding:'0.5rem',
        paddingRight:'20px',
        backgroundColor:'#222',
        display:'flex',
        alignItems:'center',
        gap:'2rem',
        borderRadius:'8px',
        margin: '20px 20px',
        [theme.breakpoints.down('sm')] : {
            margin: '30px 30px',
            
        },
    },
}));

const InfoContact = () => {

    const classes = useStyles();

  
    const menuItem = [
    {
        icon: <PhoneIcon className={classes.icon}/>,
        text:'+977-9843486799'
    },
    {
        icon: <Email className={classes.icon}/>,
        text:'swejalshrestha08@gmail.com'
    },
    {
        icon: <LocationOnIcon className={classes.icon}/>,
        text:'Chabahil,ktm'
    }

]
                    
              

    return (
        <div >
            <Typography variant='h3' className={classes.title}   align='center'>Contact Me</Typography>
            <div>
                {menuItem.map((item) => (
                        <div  className={classes.info}>
                        <IconButton>
                            {item.icon}
                        </IconButton>
                        <Typography variant='h5' className={classes.text}>{item.text}</Typography>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default InfoContact;