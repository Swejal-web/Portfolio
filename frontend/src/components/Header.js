import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, ListItem ,ListItemIcon, IconButton ,ListItemText,Divider  ,List ,Box, Avatar} from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import {Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';




import Drawer from '@material-ui/core/Drawer';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {Link} from 'react-router-dom';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
    navbar:{
        flexGrow:1,
    },
    title:{
        flexGrow:1,
        color: 'white'
    },
    menuSliderContainer: {
       
        width: 250,
        background: '#101010',
        height:'100%',
        [theme.breakpoints.down('sm')] : {
            width:'100vw'
        }
    },
    listItem:{
        color:'white'
    },
    avatar: {
        display:'block',
        margin:'1rem auto',
        width:'110px',
        height:'110px',
       
    },
    medias: {
        [theme.breakpoints.down('sm')] : {
            display:'none'
        }
    }
  
   
}));

const menuItems = [
    {
        listIcon: <HomeIcon style={{color:'white'}} />,
        listitem: 'Home',
        href:'/'
    },
    {
        listIcon: <InfoIcon style={{color:'white'}}/>,
        listitem: 'About',
        href:'/about'
    },
    {
        listIcon: <BuildIcon style={{color:'white'}}/>,
        listitem: 'Projects',
        href:'projects'
    },
    {
        listIcon: <ContactMailIcon style={{color:'white'}}/>,
        listitem: 'Contact',
        href:'/contact'
    }
]

const navItems = [
   
    {
        listIcon: <FacebookIcon style={{color: 'white'}}/>,
        href: 'https://www.facebook.com/swejal.shrestha.1'
    },
    {
        listIcon: <LinkedInIcon style={{color: 'white'}}/>,
        href: 'https://www.linkedin.com/in/swejal-shrestha-a63855213/'

    },
    {
        listIcon: <GithubIcon style={{color: 'white'}}/>,
        href: 'https://github.com/Swejal-web'
    },
]

const Header = () => {

    const [state, setState] = useState({
        left: false
    });
    const anchor = 'right';

    const toggleSlider = (anchor, open) => (event) => {
        setState({...state, [anchor]: open});
    }

    const classes = useStyles();

    // Responsive Design

    
    
    

    const slideList = (anchor)=> (
        <Box className={classes.menuSliderContainer}  component='div'>
            <Avatar alt="Swejal Shrestha" src='/swejal1.jpg' className={classes.avatar}/>
            <Divider style={{backgroundColor:'#222'}}/>
            <List>
                {menuItems.map((menu,key)=> (
                    <Link to={menu.href} style={{textDecoration:'none'}}>
                      <ListItem key={key} button className={menu.listIcon}>
                        <ListItemIcon >
                          {menu.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={menu.listitem} style={{color:'white'}}/>
                     </ListItem>
                     </Link>
                    
                ))}
            </List>
            <Divider style={{backgroundColor:'#222'}}/>
            <div className='medias' style={{margin: '20px 25px'}}>
                        
                        {navElements}
                        
                    </div>
        </Box>
    )

    const navElements = navItems.map((item,index) => {
        return (
            <a href={item.href} target='_blank'>
            <IconButton key={index}>
                {item.listIcon}
            </IconButton>
            </a>
        )
    })

    return (
        <>
        
       
            <AppBar position='static' style={{background: '#222', border:'none'}}>
                <ToolBar className={classes.navbar}>
                  
                    <Typography variant='h6' className={classes.title}>
                        PortFolio
                    </Typography>
                   
                    <div className={classes.medias} style={{marginRight:'50px'}}>
                        
                        {navElements}
                        <Link to='/contact'>
                        <IconButton>
                            <ContactMailIcon style={{color:  'white'}}/>
                        </IconButton>
                        </Link>
                        
                    </div>
                   
                    <IconButton onClick={toggleSlider('right', true)}>
                        < MenuIcon style={{color:  'white'}}/>
                    </IconButton>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleSlider('right', false)}>{slideList('left')}</Drawer>
                  
               </ToolBar>
            </AppBar>
       
        </>
    )
};

export default Header;

