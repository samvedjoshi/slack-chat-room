import React,{useState} from 'react'
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {db} from "../firebase";
import firebase from 'firebase';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const ChatInput = ({channelName, channelId, chatRef}) => {
    const [input,setInput] = useState("");
    const [user] = useAuthState(auth);

    const sendMessage = e =>{
        e.preventDefault();
        if (!channelId){
            return false;
        }
        db.collection('rooms').doc(channelId).collection('message').add({
            message : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user : user.displayName,
            userImage : user.photoURL
        });
        
        chatRef.current.scrollIntoView({
            behaviour : "smooth",
        });

        setInput('');
    }

    return (
        <ChatInputContainer>
            <form action ="">
                 <input value={input} placeholder={`Message #${channelName}`}
                    onChange = {(e)=>{
                        setInput(e.target.value);
                    }}
                 />
                 <Button hidden type="submit" onClick={sendMessage}>
                     SEND 
                 </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`

  >form{
      position : relative;
      display : flex;
      justify-content : center;
  }

  >form> input {
      position : fixed;
      bottom : 30px;
      width : 60%;
      border : 2px solid gray;
      border-radius : 3px;
      padding : 20px;
      outline : none;
  }

  >form > button{
      display : none !important;
  }
`;