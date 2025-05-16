import React from "react";
import Header from "../header/header";
import Footer  from "../footer/footer";
import {Main} from "./styles";
import MainPage from "../../pages/main-page/main-page";
import DetailsGood from "../../pages/details/details";
import { Outlet } from "react-router-dom";

function PageWrapper({products, setGoodsToBasket, goodsToBasket}){
	return (
		<>
		<Header goodsToBasket={goodsToBasket}/>
		<Main>
			<Outlet />
		</Main>
		<Footer />
		</>
	)
}

export default PageWrapper;
