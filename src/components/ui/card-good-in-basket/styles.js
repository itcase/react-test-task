import styled  from "styled-components";
import Button from "../button/button";
import { Article } from "../../styled";


export const StyledCardInBasket = styled(Article)`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 150px;
padding: 10px;

p {
margin: 0;
text-align: center;
}

p:last-of-type {
margin-bottom: 10px;
}
`;

export const StyledButton = styled(Button)`
min-width: 70px;
padding: 5px;
line-height: 1.5;
align-self: stretch;
`;


