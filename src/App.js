import React from 'react';
import './App.css';
import Header from './components/Header.js';
import {BrowserRouter as Router,
 Switch,
 Route,
} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar.js';
import Chat from './components/Chat';
import {useAuthState} from "react-firebase-hooks/auth";
import Login from './components/Login';
import {auth} from './firebase';
function App() {

  const [user, loading] = useAuthState(auth);

  var Spinner = require('react-spinkit');
 

  if(loading){
    return (
       <LoadingContainer>
        <LoadingScreen>
            <img src="https://i.dlpng.com/static/png/6720871_preview.png"/>
        </LoadingScreen>
        <Spinner name="circle" color="fuchsia"/>
        </LoadingContainer>
    )
}

  return (
    <Router>
      {!user ? 
      (
        <Login />
      ) : (
        <>
        <Header />
      <AppBody>
      <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Chat />
          </Route>
        </Switch>
      </AppBody>
      </>
      )
   }
    </Router>
    
      
      
    
      
  );
}

export default App;


const AppBody = styled.div`

  display : flex;
  height : 100vh;
  
`;

const LoadingContainer = styled.div`
   background-color : #f8f8f8;
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction: column;
    >.circle{
      transform : scale(2);
    }
`;

const LoadingScreen = styled.div`
padding-bottom: 30px;
>img{
     height : 150px;
   }
   
`;