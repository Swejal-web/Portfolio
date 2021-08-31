// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// const LoadingProjects = ({open, openModal}) => {

// const [projects,setProjects] = useState([]);

// useEffect(() => {

//     const callProject = async() => {
//         const res = await axios.get('http://127.0.0.1:9000/portfolio/projects');
//         const data = res.data.data.project;
//         setProjects(data);
       
//     }
//     callProject();
// },[])

// const renderedProjects = projects.map((project,key) => {
//     return (
      
//          <div className='card-wrapper' key={key}>
//              <div className='card'>
//                   <div className='card-image' onClick={openModal}>
//                      <img src='myimg2.jpg' alt='swejal2' />
//                  </div>
//              <div className='details'>
//                  <h3>{project.projectName}<span class='sub-title'>{project.stack}</span></h3>
//              </div>
//          </div>
       
//      </div>
     
  
//     )
// })

// }

// export default LoadingProjects;