import React, {useState, useEffect} from 'react'
import {Typography,useMediaQuery,useTheme} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import axios from 'axios';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import '../Projects.css';
import Popup from './Popup';


const useStyles = makeStyles({
    title:{
        padding:'25px',
        background: '#101010',
        color: 'white'

    },
    root :{
        maxWidth: 280,
        minHeight: 350,
        border: '5px solid #222',
        boxShadow: '20px 20px 20px',
    
        margin: '5px 50px'
        
    },
    media: {
        height: 150
    },
    button: {
      margin:'auto',
      border: '2px solid #222'
      
      
    },

})

const ProjectCard = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase:'linear'
      };

      let settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase:'linear'
      }

    const [open,setOpen] = useState(false);

    const classes = useStyles();   

    const openModal = (project) => {
        setOpen(prev => !prev);
        setAns(project);
       
    }


    const [projects,setProjects] = useState([]);
    
    const [ans,setAns] = useState({});
    

    useEffect(() => {

        const callProject = async() => {
            const res = await axios.get('/portfolio/projects');
            const data = res.data.data.project;
            setProjects(data);
        }
        callProject();
    },[])

 
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
        <div className='sectionCard'>
           
            <Typography variant='h4' className={classes.title} align='center'> Projects</Typography>

           
            <div className='container mt-5 carousel' style={{paddingTop:'10px'}}>
            {isMatch ? <Slider {...settings2}>

                {projects.map((project,index) => (
                    <div className='card-wrapper' key={index}>
                    <div className='card'>
                        <div className='card-image' onClick={() => openModal(project)}>
                            <img src={project.imageCover} alt='swejal2' />
                        </div>
                    <div className='details'>
                        <h3>{project.projectName}<span class='sub-title'>{project.stack}</span></h3>
                    </div>
                
                </div>

                </div>
                ))}
                
                </Slider> : 
                <Slider {...settings}>

                {projects.map((project,index) => (
                    <div className='card-wrapper' key={index}>
                    <div className='card'>
                        <div className='card-image' onClick={() => openModal(project)}>
                            <img src={project.imageCover} alt='swejal2' />
                        </div>
                    <div className='details'>
                        <h3>{project.projectName}<span class='sub-title'>{project.stack}</span></h3>
                    </div>
                   
                </div>
               
            </div>
                ))}
                  
                </Slider>}
            
            <Popup
                openPopup={open}
                setOpenPopup={setOpen}
               project={ans}
            />
            </div>
           
        </div>
      

</>
    )
}

export default ProjectCard;

