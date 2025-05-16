import styled from "styled-components";
import { Article, Img } from "../../styled";

export const CardStyle = styled(Article)`
display: flex;
flex-direction: column;
gap: ${(props)=> props.theme.indent};
width: 205px;
padding: ${(props)=> props.theme.indent};
background-color: ${(props) => props.theme.backgroundColorLight};
`;

export const ImageWrapper = styled.div`
width: 205px;
height: 270px;
background-color: ${(props) => props.theme.buttonColor};
margin-bottom: 20px;
`;

export const Header = styled.header`
margin:0 auto;
gap: ${(props) => props.theme.indent};

`;

export const ImageStyle = styled(Img)`
 width: 205px;
 height: 270px;

`;
