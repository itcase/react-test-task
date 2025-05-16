import { Section, Ul, A } from "../../styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCatalog = styled(Section)`
display: block;
text-align: center;
padding-block: 70px;
`;

export const Goods = styled(Ul)`
display: grid;
grid-template-columns: repeat(auto-fit, 245px);
align-content: stretch;
gap: 40px;
`;

export const ItemStyle = styled.li`
background-color: ${(props) => props.theme.backgroundColorLight}`;

export const StyledLink = styled(Link)`
padding:0;
text-decoration: none;
font-family: ${(props)=> props.theme.fontFamilyDefault};
color: ${(props)=> props.theme.color};
`;
