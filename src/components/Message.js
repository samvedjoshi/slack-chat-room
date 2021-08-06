import React from 'react'
import styled from 'styled-components';

const Message = ({message,timestamp,user,userImage}) => {
    return (
        <MessageContainer>
          <img src={userImage} />
          <MessageInfo>
            <h4>
              {user} <span>{new Date(timestamp?.toDate()).toUTCString()} </span>
            </h4>
            <p>{message}</p>
          </MessageInfo>
        </MessageContainer>
    )
} 

export default Message

const MessageContainer = styled.div`
    display : flex;
    align-items : center;
    padding : 20px;

    >img {
      height : 50px;
      border-radius : 100px;
    }
`;

const MessageInfo = styled.div`
   padding-left : 10px;
   >h4> span{
      color : gray;
      font-weight : 300;
      margin-left : 4px;
      font-size : 13px;
   }
`;