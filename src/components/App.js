import React from 'react';
import NavBar from './NavBar';
import Home from './Home';

// 우리는 BrowserRouter 을 이용합니다. 이것은 브라우저라우터는 웹용으로 동적 컨텐츠에 특화되어 사용됩니다. 
// HashRouter 은 정적 컨텐츠에 특화되어 사용됩니다. 
// Route 은 각 경로에 대해서 컴포넌트를 연결해주는 역할을 합니다. 
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