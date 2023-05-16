import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const StyledAuthInputContainer = styled.div`
  width: 50%;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  border-radius: 30px;
  background-color: #007979;
  border: none;

  color: white;
  min-width: 300px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  padding: 6px 0;
  margin: 2rem 0;

  &.hover {
    cursor: pointer;
  }
`;

const StyledLinkText = styled.div`
  color: #0062ff;
  font-size: 16px;
  font-weight: 400;
`;


const AuthLinkText = ({ link }) => {
  return (
    <StyledLinkText>
      <Link to={link.page}>{link.name}</Link >
    </StyledLinkText>
  );
};

export {
  StyedContainer as AuthContainer,
  StyledAuthInputContainer as AuthInputContainer,
  StyledButton as AuthButton,
  AuthLinkText
  // StyledLinkText as AuthLinkText,
};
