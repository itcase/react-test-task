import {Section}  from "../../styled";
import styled from "styled-components";

export const StyledSection = styled(Section)`
position:absolute;
bottom: 0;
left:0;
right:0;
width: ${(props) => props.theme.pageWidth};
background-color:${(props) => props.theme.backgroundColorLight};
height: 100px;
padding-block: 20px;
justify-content: flex-start;
align-items: center;
gap: ${(props) => props.theme.indent};

p: last-child {
margin-left: auto };
`;
