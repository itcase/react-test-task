import {Section}  from "../../styled";
import styled from "styled-components";

export const StyledSection = styled(Section)`
width: ${(props) => props.theme.pageWidth};
min-height: 80px;
padding-block: 20px;
justify-content: flex-start;
align-items: center;
gap: ${(props) => props.theme.indent};
background-color:${(props) => props.theme.backgroundColorLight};
`;



