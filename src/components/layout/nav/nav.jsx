import React from "react";
import {StyledNav} from "./styles";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";

function Nav({goodsToBasket}) {
	const countGoodsInBasket = (goods) =>
	(goods.length) ?  `В корзине товаров ${goods.length} ` : "Корзина";

	const links = {
		Basket: <Button link={AppRoute.MAIN}>Главная</Button>,
		Other: <Button link={AppRoute.BASKET}>{countGoodsInBasket(goodsToBasket)}</Button>,
	}

	const pageUrl = useLocation().pathname;

	return (
		<StyledNav>
			{(pageUrl === AppRoute.BASKET) ?
			links.Basket : links.Other
			}
		</StyledNav>
	);
}

export default Nav;
