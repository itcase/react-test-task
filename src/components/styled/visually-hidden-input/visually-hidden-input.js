import styled from "styled-components";

const VisuallyHiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;


  &:focus-visible ~ * {
    outline: 1px solid #000000;
  }

`;

export default VisuallyHiddenInput;
