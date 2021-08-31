import React from 'react';
import {Card, CardContent, Typography, CardMedia, Divider, Button, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    rootModal: {
        display:'flex',
        height: '400px',
        width:'650px',
        border:'5px solid #222'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        width:350
    },
    cover: {
        width: 3000,
        position:'relative',

        
      },
      subtext: {
          marginTop: '5px'
      },
      button: {
        background:'grey',
        color:'white',
        height:'35px',
        fontWeight:'bold',
        borderRadius:'15px',
        textTransform:'lowercase',
        
        
       width:'auto',
        overflow:'hidden',
        margin: '10px 5px',
        '&:hover': {
            background:'#222'
        }
      },
      butts: {
          display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
    
      },
      close: {
          position: 'absolute',
          left:'90%',
          color:'#222',
          fontSize:'2rem',
      }
})


 

const Modal = ({openPopup,setOpenPopup, project}) => {
  
   

    const handleClose = () => {
        setOpenPopup(false);
}

    const classes = useStyles();
    

    return (
        <div>
<Card className={classes.rootModal}>
    <div className={classes.details}>
        <CardContent className={classes.content}>
        
            <Typography component="h5" variant="h5">
                {project.projectName}
            </Typography>
            <Divider />
            <Typography variant="subtitle1" color="textSecondary" className={classes.subtext}>
               {project.description}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" className={classes.subtext}>
               {project.desclaimer}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" className={classes.subtext}>
               {project.note}
            </Typography>
            
            <Divider/>
            <div>
            {project.tools.map((tool,index) => (
                 <Button key={index} className={classes.button}>{tool}</Button>
            ))}
           
            
            </div>
           
        </CardContent>
        <div className={classes.butts}>
        <a href={project.githubLink}  target='_blank' >
                <IconButton>
                    <GitHubIcon />
                </IconButton>
            </a>
                <IconButton>
                    <LiveTvIcon />
                </IconButton>
            </div>
    </div>
    
        <CardMedia
        className={classes.cover}
        image={project.imageCover}
        title="Live from space album cover"
        />
       
       <IconButton className={classes.close} onClick={() => setOpenPopup(prev => !prev)}>
            <CloseIcon/>
        </IconButton>
       
        
</Card>
</div>
    )
}

export default Modal;