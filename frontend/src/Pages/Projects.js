import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import {motion} from 'framer-motion';
import {animationFive} from '../animations/index';


import { CssBaseline } from '@material-ui/core';

import '../Projects.css';


const Projects = () => {



    return(
        <motion.div initial='in' animate='out' exit='end' transition={{duration:0.2}} variants={animationFive}>
             
             <Header />
             
               
                <ProjectCard/>
                
       </motion.div>
    )
}

export default Projects;