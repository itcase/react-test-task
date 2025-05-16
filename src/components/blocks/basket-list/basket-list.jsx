import CardGoodInBasket from "../../ui/card-good-in-basket/card-good-in-basket";
import {UlStyle, ChooseItem} from "./styles";


export default function BasketList({chooseGoods, onChange}) {
	const handleOnClickDeleteProduct = (evt) => {
		evt.preventDefault();
		const isButton = evt.target.closest('button') ? true : false;
		const deleteKey = (isButton) ? evt.target.closest('li').getAttribute("dataset-key") : null;
		onChange(chooseGoods.filter((chooseGood) => chooseGood.key !== deleteKey));
	}

	return (
		<UlStyle onClick={handleOnClickDeleteProduct}>
			{chooseGoods &&
			chooseGoods.map((choosGood) => (
				<ChooseItem key={choosGood.key} dataset-key={choosGood.key}>
					<CardGoodInBasket nameProduct={choosGood.nameProduct} size={choosGood.sizesSelect} price={choosGood.price} color={choosGood.nameColor} image={choosGood.image} />
				</ChooseItem>)
			)
			}

		</UlStyle>

	);
}

