import React from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import firebaseConfig from './firebase/firebaseconfig';
import * as firebase from 'firebase/app';
import Authcontextprovider from './Contexts/Authcontext';
import Dashboard from './components/Dashboard';
import Addanewwebsite from './components/Addanewwebsite';
import Databasecontextprovider from './Contexts/Databasecontext';
import Showsavedwebsites from './components/showsavedwebsites';
import Home from './components/Home';
function App() {
  firebase.initializeApp(firebaseConfig);

  
  
  
  return (
    <div className="App">
      
        <BrowserRouter>
          <Authcontextprovider>
            <Databasecontextprovider>
              <Navbar/>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/signup" component={Signup}/>
                  <Route exact path="/signin" component={Signin}/>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/website/:value" component={Addanewwebsite}/>
                  <Route path="/savedwebsites" component={Showsavedwebsites}/>
                </Switch>
              </Databasecontextprovider>
          </Authcontextprovider>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
