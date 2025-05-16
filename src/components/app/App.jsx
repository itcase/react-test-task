import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {GlobalStyle} from './styles.js';
import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx';
import {getProducts} from "../../services/api.js";
import { AppRoute } from '../../const.js';
import DetailsGood from "../pages/details/details.jsx";
import MainPage from '../pages/main-page/main-page.jsx';
import LayoutGoods from '../layout/layout-goods/layout-goods.jsx';
import Basket from '../pages/basket/basket.jsx';



const GetProducts =  () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function SetProducts() {
		try {
			setProducts(await getProducts());
		} catch(e) {}};
		SetProducts();
	   }
	, []);
	return products;
}


export default function App() {
	const [goodsToBasket, setGoodsToBasket]=useState([]);
	const products = [...GetProducts()];
  return (
    <>
		 <GlobalStyle />
		 <Router>
			<Routes>
				<Route path={AppRoute.MAIN} element={<PageWrapper goodsToBasket={goodsToBasket}/>}>
				   <Route index element={<MainPage products={products}/>}/>
				   <Route path={AppRoute.DETAILS.replace(AppRoute.MAIN,"")} element={<LayoutGoods />}>
				  		<Route path=":id"
							element={<DetailsGood goods={products} onChange={setGoodsToBasket} values={goodsToBasket} />}
                  		/>
				    </Route>
					<Route path={AppRoute.BASKET.replace(AppRoute.MAIN, "")} element={<Basket chooseGoods={goodsToBasket} onChange={setGoodsToBasket}/>}></Route>
			    </Route>
			</Routes>
		 </Router>

    </>
  )
}
