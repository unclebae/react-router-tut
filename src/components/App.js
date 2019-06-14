import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Article from './Article';
import AboutMe from './AboutMe';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <NavBar/>
                <Route exact path="/" component={Home}/>
                <Route path="/article" component={Article}/>
                <Route path="/about" component={AboutMe}/>
            </div>
        </BrowserRouter>
    );
}

export default App;