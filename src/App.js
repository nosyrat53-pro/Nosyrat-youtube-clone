import React , { useRef } from 'react';
import './App.css';
import Header from './Header' ;
import SideBar from './SideBar' ;
import RecommendedVideos from './RecommendedVideos' ;
import { BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';
import SearchVideos from './SearchVideos';
 
function App() {

  const sideBarRef = useRef();

  return (
    <Router>
    <div className="app">

        <Header reference={sideBarRef}/>
   
        <Switch>
         
              <Route exact path="/">
                <div className="app__page">
                    <SideBar reference={sideBarRef} /> 
                    <RecommendedVideos />
                </div>
              </Route>
                            
              <Route  path="/search">
                <div className="app__page">
                  <SideBar reference={sideBarRef}/>
                  <SearchVideos/>
                </div>
              </Route>

        </Switch>
  
    </div>
    </Router>
  );
}

export default App;