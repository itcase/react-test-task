import styled from "styled-components";
import { Article, Img } from "../../styled";

export const GalleryStyled = styled.div`
padding: ${(props)=> props.theme.indent};
display: flex;
flex-wrap: wrap;
width: 385px;
gap: ${(props)=> props.theme.indent};
min-height:505px;
background-color: ${(props)=> props.theme.backgroundColorLight};
`;


export const BigImage = styled(Img)`
flex-grow: 1;
width: 385px;
height: 505px;
`;

export const MiniImage = styled.button`
width: 100px;
height: 135px;
border: none;
box-shadow: none;
background-image: ${(props) => `url(${props.photo})` || "none"};
background-size: contain;
opacity: ${(props) => props.active ? 1 : 0.5};
cursor: pointer;

&:hover,
&:active {
opacity: 0.8;
}

&: disabled {
opacity: 0.3;
pointer-events: none;
}
`;


