import { Section, Ul } from "../../styled";
import styled from "styled-components";
import Title, {TitleSize} from "../../ui/title/title";
import Gallery from "../../ui/gallery/gallery";
import {colorsValue} from "../../ui/color/color";
import Button from "../../ui/button/button";


export const DetailsGoodCardStyle = styled(Section)`
position: relative;
text-align: center;
padding-block: 70px;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
column-gap: 60px;
row-gap: 40px;
`;

export const GalleryStyle = styled(Gallery)`
`;

export const StyleDescription = styled(Title)`
`;

export const UlStyled = styled(Ul)`
min-height: 80px;
display: flex;
flex-wrap;
gap:${(props) => props.theme.indent};
`;

export const LabelComponentStyle = styled.p`
position: relative;
display: block;
margin:0;
padding-top: 60px;

&::before {
position: absolute;
top:0;
left:0;
display: block;
width: 50px;
height: 50px;
border: ${(props) => props.$isChecked ? "4px solid #ffffff" : "2px solid #ffffff"};
content: "";
border-radius: 50%;
background-color: ${(props) => colorsValue[props.$colorRadio] || "none"};
`;

export const FormStyle = styled.form`
margin: 0;
width:610px;
flex-grow:1;
display: flex;
flex-direction: column;
align-items: center;

gap:${(props) => props.theme.indent};
`;

export const ButtonToBack = styled(Button)`
min-width: 80px;
max-width: 80px;
padding: 10px;
height:70px;
position: absolute;
left: 5px;
`;

export const PriceValue = styled.input`
font-size: 48px;
line-height: 1.5;
font-wight: 700;
padding-inline: ${(props) => props.theme.indent};
background-color: ${(props) => props.theme.backgroundColorDark};
border: none;
color: ${(props) => props.theme.color};
font-family: ${(props) => props.theme.family};
text-align: right;
max-width: 230px;
width: fit-content;
`;

export const PriceLabel = styled.label`
margin: 0;
padding: ${(props)=> props.theme.indent};
font-size: 36px;
line-height: 1.5;
font-wight: 700;
border: 2px solid #ffffff;
border-radius: 30px;
display: flex;

`;












