import React,{useState,useEffect} from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import '../About.css';
import {motion} from 'framer-motion';
import {animationFour} from '../animations/index';
import axios from 'axios';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    span:{
        color:'#e62020'
    },
    title:{
      //  marginTop:'10px',
        fontSize:'50px',
        fontWeight:'bold',
        
        color:'white'

    },
    button: {
        background:'#222',
        color:'white',
        fontWeight:'bold',
        borderRadius:'15px',
        textTransform:'lowercase',
        
        
       width:'110px',
        overflow:'hidden',
        margin:'10px 10px',
        [theme.breakpoints.down('sm')] : {
            margin : '5px 5px',
            width :'90px',
        }
    }
  
    
}));

const MyInfo = () => {

    const [response,setResponse] = useState('');
    const [tools,setTools] = useState([]);
    
    

   

    
    useEffect(()=> {

        const callApi = async () => {
            const res = await axios.get('/portfolio/aboutMe',{
                headers:{
                    "accepts":"application/json"
                }
               
            });
            
            setResponse(res.data.data.myInfo);
            setTools(res.data.data.myInfo.tools);
            
            
        }

        callApi();
     
    },[])

   
  
    const classes = useStyles();

    const renderedResults = tools.map((tool, key) => {
        return (
        <Button  key={key} className={classes.button}>{tool}</Button>
       )
    })

    return (
       <>
      
        <Box component='div' className='section'>
            <Box component='div' className='container'>
                <div className='content-section'>
                    {/* <motion.div initial='out' animate='end' exit='end' transition={{duration:1}} variants={animationFour}> */}
                    <Typography  align='center' className={classes.title}>About Me</Typography>
                    < Typography className='text'>{response.aboutMe}</Typography>
                    
                    <Typography className='text'>{response.aboutMe2nd}</Typography>                   

                
                  

                    <div className='button'>
                        
                       {renderedResults}
                        
                        
                        </div> 
                    
                        {/* </motion.div> */}
                </div>
                
                <div className='image-section'>
                    <motion.div initial='in' animate='end' exit='end' transition={{duration:1}} variants={animationFour}>
                    <img src={response.image} alt={response.name} />
                    </motion.div>
                </div> 
               
            </Box>
            
        </Box>
        <Link to='/projects'>
        <div className="arrow"></div>
        </Link>
      </>
    )
}

export default MyInfo;