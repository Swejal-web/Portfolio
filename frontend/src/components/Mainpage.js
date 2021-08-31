import React, {useState, useEffect} from 'react'

import { Typography,  IconButton} from '@material-ui/core'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainHy : {
        
            webkitAnimation: 'mainFadeIn 2s forwards',
            oAnimation: 'mainFadeIn 2s forwards',
            animation:' mainFadeIn 2s forwards',
            animationDelay: '1.6s',
            opacity: 0,
            display: 'flex',
            alignItems: 'basline',
            position: 'relative',
            [theme.breakpoints.down('sm')] : {
                fontSize:'1.4rem'
            }
        },
        mainName: {
            webkitAnimation: 'mainFadeIn 2s forwards',
            oAnimation: 'mainFadeIn 2s forwards',
            animation: 'mainFadeIn 2s forwards',
            animationDelay: '3.2s',
            opacity: 0,
            display: 'flex',
            alignItems: 'baseline',
            position: 'relative',
            [theme.breakpoints.down('sm')] : {
                fontSize:'2rem'
            }
        }
       
    
}))




const Mainpage = () => {

  
    const classes = useStyles();

    const [response, setResponse] = useState('');

    
    const callApi = async () => {
        const res = await axios.get('/portfolio');
        
    
        setResponse(res.data.data.myInfo);
    };

    useEffect( () => {
    callApi();
    },[]);

 
        


    return (
        <div  className='text-container'>
            <div className='hy'>
                <div className='hook'></div>
           <Typography variant='h5' className={classes.mainHy}>Hi. My name is</Typography>
           </div>
           <div className='name'>
                <div className='role'></div>
           <Typography variant='h3' className={classes.mainName}>{response.name}</Typography>
           </div>
           <br/>
           <br/>
           <Typography variant='h4' className='glitch main-info'>{response.shortInfo}</Typography>
           
           <br/>
           <br/>
           <Link to='/about'>
           <IconButton  size='large'>
           <PlayCircleFilledIcon style={{fontSize:'4rem', margin:'-10px -10px'}}/>
           </IconButton>
           </Link>
        </div>
    )
};

export default Mainpage;
