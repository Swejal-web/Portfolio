import React from 'react';

import Header from '../components/Header';
import MainPage from '../components/Mainpage';
import Particles from "react-particles-js";
import '../App.css';
import { CssBaseline } from '@material-ui/core';
import {makeStyles, mergeClasses} from '@material-ui/styles';
import {motion} from 'framer-motion';
import {animationOne} from '../animations/index';
import {transition} from '../animations/index';


const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
    },
 
})

const Hero = () => {
 const classes = useStyles();

return (
    <>
       
      
        <div className='hero-container'>
            
            <Header />
            <MainPage  />
            <Particles 
            canvasClassName={mergeClasses.particlesCanva}
            params={{
            particles: {
                number:{
                    value:45,
                    density:{
                        enable:true,
                        value_area:900
                    }
                },
                shape: {
                    type:'circle',
                    stroke: {
                        width:1
                    }
                },
                size: {
                    value: 8,
                    random:true,
                    anim: {
                        enable:true,
                        speed:10,
                        size_min: 0.1,
                        sync: true,
                    }
                }
            }
        }}/>
       </div>
       
       </>
)

}
export default Hero;