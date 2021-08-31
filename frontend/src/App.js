import React from 'react';


import Hero from './Pages/Hero';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import GlobalStyle from './globalStyles';
import { Container } from '@material-ui/core';



const App = () => {

   

   
    //const classes = useStyles();

    return (
        <Router>
            <GlobalStyle />
            <AnimatePresence>
            <Switch>
                <Route path='/' component={Hero} exact/>
                <Route path='/about' component={About} exact/>
                <Route path='/projects' component={Projects} exact/>
                <Route path='/contact' component={Contact} exact/>
            </Switch>
            </AnimatePresence>
      

       </Router>
   )
}

export default App;

