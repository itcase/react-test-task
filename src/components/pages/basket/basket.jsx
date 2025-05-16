import {FormBuy, TitleStyle, StyledSection, ButtonBuy, TotalSumInput, LabelStyle} from "./styles";
import BasketList from "../../blocks/basket-list/basket-list";
import {TitleSize} from "../../ui/title/title";

export default function Basket({chooseGoods, onChange}) {
	const totalSum = chooseGoods?.length ? (chooseGoods.reduce((acc, chooseGood) => {return acc + Number(chooseGood.price)}, 0)) : 0;
	const isDisabled = chooseGoods?.length ? false : true;

	const handleOnButtonBuy = (evt) => {
		evt.preventDefault();
		const formDataBuy = new FormData(evt.target);
		const dataBuy = Object.fromEntries(formDataBuy.entries());
		dataBuy.listBuy = {chooseGoods};
		alert(`Сумма покупки: ${JSON.stringify(dataBuy.cost)} рублей.`);
	}

	return (
		<StyledSection>
		<TitleStyle size={TitleSize.MEDIUM} marginBottom={50}>Корзина</TitleStyle>
		<FormBuy onSubmit={handleOnButtonBuy}>
		<BasketList onChange={onChange} chooseGoods={chooseGoods}/>
		<ButtonBuy type={"submit"} disabled={isDisabled}>Купить</ButtonBuy>
		<LabelStyle $hidden={isDisabled}> К оплате
		<TotalSumInput name="cost" readOnly value={totalSum}/> руб.
		</LabelStyle>
		</FormBuy>
		</StyledSection>
	);
}
