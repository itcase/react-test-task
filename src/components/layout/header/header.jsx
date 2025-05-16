import React from "react";
import {StyledSection} from "./styles";
import Nav from "../nav/nav";
import Logo from "../../ui/logo/logo";


function Header({goodsToBasket}) {
	return (
  <StyledSection>
	<Logo />
	<Nav goodsToBasket={goodsToBasket}/>
  </StyledSection>
	)
}

export default Header;
