import Title from "../../ui/title/title";
import DetailsGoodCard from "../../blocks/details-good-card/details-good-card";
import React from "react";
import { useParams} from "react-router-dom";


function DetailsGood({goods, onChange, values }) {
	const params= useParams();
	const good = goods.find((good) => good.id === Number(params.id));

	return (
		<>
		<Title $hidden>Интернет-магазин одежды</Title>
		<DetailsGoodCard goods={good} onChange={onChange} values={values}/>
		</>
	);
}

export default DetailsGood;
