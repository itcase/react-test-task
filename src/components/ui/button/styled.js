import styled  from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  min-height: 60px;
  padding: 0 24px;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: bold;
  line-height: 58px;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.buttonColor};
  border: none;
  border-radius: 4px;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fontFamily};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHoverActive};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }

`;
