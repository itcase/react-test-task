import React from "react";
import { Outlet } from "react-router-dom";
import { StyleTitle } from "./styles";

export default function LayoutGoods({children}) {
	return (
		<>
		<StyleTitle $hidden as="h2">Подробнее о товаре</StyleTitle>
		<Outlet />
		</>
	);
}
