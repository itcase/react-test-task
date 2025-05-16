import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  margin-left: 0;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

export const LogoStyleMainPage = styled.p`
${logoStyle};
margin:0;
padding: ${(props)=> props.theme.indent};
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  cursor: pointer;
  text-decoration: none;
  padding: ${(props)=> props.theme.indent};

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: ${(props) => props.theme.color};
  };

   &:hover {
   opacity: 0.5};

`;

export const Text = styled.span`
   display: flex;
  font-weight: bold;
  font-size: 28px;
  line-height: 44px;
  color: ${(props) => props.theme.color};
`;

