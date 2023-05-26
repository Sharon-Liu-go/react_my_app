import styled from 'styled-components';
import { MenuItem, MenuList } from '@mui/material';
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
background :#2E2D4D;
color : grey;
height : 100%;
width : 100%
`;

const StyledTitle = styled.div`
align-items: center;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: #f5f8fa;
  border-radius: 0px;
`;

const ChatRoom = (roomId, roomName) => {
  return (

    <StyledTitle>
      {roomName}
    </StyledTitle>

  );
};

export default ChatRoom;
