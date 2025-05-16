import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 0 24px;
  background-color: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
  font-family: ${(props) => props.theme.fontFamily};
`;

export default Button;

