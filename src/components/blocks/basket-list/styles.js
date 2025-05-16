import {Ul} from "../../styled/";
import styled from "styled-components";

export const UlStyle = styled(Ul)`
display: flex;
flex-wrap: wrap;
gap: 10px;
margin-bottom: 40px;
`	;

export const ChooseItem = styled.li`
border: 2px solid ${(props)=> props.theme.backgroundColorLight};
border-radius: 4px;
dislpay: flex;
align-items: end;
`;
