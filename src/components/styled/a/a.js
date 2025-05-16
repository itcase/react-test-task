import styled  from "styled-components"

const A = styled.a`
text-decoration: none;
font-family: ${(props)=> props.theme.fontFamilyDefault};
color: ${(props)=> props.theme.color};
line-height: ${(props)=> props.theme.lineHeightDefault};
display: block;
padding: ${(props)=> props.theme.indent};
margin: 0;
`;
export default A;
