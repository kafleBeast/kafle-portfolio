import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage';
import Navbar from './NavBar';
import NotFound from './NotFound';
import Resume from './Resume';
import Projects from './Projects';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/project" component={Projects} />
            <Route path="/resume" component={Resume} />
            
            <Route path="*">
              <NotFound />
            </Route>
            
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
