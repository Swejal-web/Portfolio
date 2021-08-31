import React from 'react';
import Header from '../components/Header';
import MyInfo from '../components/myInfo';
import {CssBaseline} from '@material-ui/core'
import {motion} from 'framer-motion';
import {animationTwo} from '../animations/index';
import {animationThree} from '../animations/index';



const About = () => {
return (
    <motion.div initial='out' animate='end' exit='out' variants={animationThree}>
   
    <Header />
    <MyInfo/>
   
    </motion.div>
    
)
}

export default About;