import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import {auth,provider} from '../firebase';


const Login = () => {

  const signIn = e =>{
      e.preventDefault();
      auth.signInWithPopup(provider).catch((error)=>{
          alert(error.message);
      })
  }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://i.dlpng.com/static/png/6720871_preview.png" />
                <h1>Sign In</h1>
                <p></p>

                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
    background-color : #f8f8f8;
    height : 100vh;
    display : grid;
    place-items :center;

`;

const LoginInnerContainer = styled.div`

  padding : 100px;
  text-align : center;
  background-color : white;
  border-radius :10px;
  
  >img{
      object-fit : contain;
      height : 100px;
      margin-bottom : 40px;
  }

  >Button {
      margin-top : 20px;
      padding : 10px 15px;
      background-color : red;
      color : white;
      border-radius : 10px;
      font-size : 13px;
      :hover{
        opacity : 0.5;
        background-color :red;
        font-weight : 550;
        box-shadow : 5px 10px;
      }
  }

`;