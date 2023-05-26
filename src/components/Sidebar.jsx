import styled from 'styled-components';
import { MenuItem, MenuList } from '@mui/material';
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
background :#2E2D4D;
color : white;
height : 100%;
width : 15%
`;

const Sidebar = () => {
  return (
    <StyledContainer>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem component={Link} to="/Chatroom">
          Chatroom</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </StyledContainer >
  );
};

export default Sidebar;
