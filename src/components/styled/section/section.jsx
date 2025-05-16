import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  box-sizing: border-box;
`;

export default Section;
