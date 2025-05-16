import styled from "styled-components";

export const SelectStyle = styled.select`
display: block;
padding: ${(props) => props.theme.indent};
background-color: ${(props) => props.theme.backgroundColorLight};
font-family:  ${(props) => props.theme.family};
font-color: #ffffff;
font-size: 24px;
width: 260px;
text-align: center;
border-radius: 4px;

.options {
font-color: #ffffff;
}
`;
