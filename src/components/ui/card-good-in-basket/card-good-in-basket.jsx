import {StyledButton, StyledCardInBasket} from "./styles";
import {SizesValue} from "../../../const";
import {Img} from "../../styled";

function CardGoodInBasket({nameProduct, color, size, image, onClick, key, price}){
	return (
		<StyledCardInBasket>
		<Img src={image} alt={`${nameProduct}: цвет ${color}`} width="50" heigth="70" />
		<p>{nameProduct}</p>
		<p>Цвет: {color}</p>
		<p>Размер: {SizesValue[size]}</p>
		<p>Цена: {price} руб.</p>
		<StyledButton type="button" $maxWidth={70} $key={key} onClick={onClick}>Удалить</StyledButton>
		</StyledCardInBasket>

	);
}

export default CardGoodInBasket;
