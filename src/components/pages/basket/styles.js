import styled from "styled-components";
import Title from "../../ui/title/title";
import { Section, Label } from "../../styled";
import Button from "../../ui/button/button";

export const StyledSection = styled(Section)`
display: block;
padding-block: 40px;
position: relative;
`;

export const FormBuy = styled.form`
`;

export const TitleStyle = styled(Title)`
text-align: center;
`;


export const ButtonBuy = styled(Button)`
position: absolute;
top: 32px;
right: 90px;
`;

export const TotalSumInput = styled.input`
background-color: ${(props) => props.theme.backgroundColorDark};
font-size: 28px;
line-height: 1.5;
border: none;
text-align: right;
color: ${(props) => props.theme.color};
padding-inline: 10px;
width: 150px;

&: focus {
outline: none;}
`;

export const LabelStyle = styled(Label)`
font-size: 28px;
line-height: 1.5;
border: 2px solid ${(props) => props.theme.backgroundColorLight};
display: ${(props)=> props.$hidden ? "none" : "flex"};
justify-content: center;
border-radius: 4px;

`;





