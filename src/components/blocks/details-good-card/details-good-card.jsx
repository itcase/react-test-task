import Title, {TitleSize} from "../../ui/title/title";
import {DetailsGoodCardStyle, ButtonToBack, StyleDescription, GalleryStyle, UlStyled,LabelComponentStyle, FormStyle, PriceValue, PriceLabel} from "./styles";
import React, {useState, useEffect} from "react";
import Color from "../../ui/color/color";
import {Label} from "../../styled";
import Button from "../../ui/button/button";
import Sizes from "../../ui/sizes/sizes";
import { AppRoute } from "../../../const";
import { ceckDublicate } from "../../../utils/utils";

 function DetailsGoodCard({goods, onChange, values}) {
	const [activeColor, setColor] = useState(1);
	const [activeProduct, setActiveProduct] = useState([]);
	const [colorsList, setColorsList] = useState([]);
	const [product, setProduct] = useState();
	const isDisabled = !activeProduct.sizes?.length;

	useEffect(()=>{
		async function GetDetailsProduct() {
			try {
				const product = await goods;
				setColorsList([...product.colors]);
				setActiveProduct(...product.colors.filter((item)=> item.id === activeColor));
				setProduct(product);
			}
			catch(err) {}}
		GetDetailsProduct();
	}, [goods, activeColor]);

   	const onSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData(evt.target);
		const dataToBasket = Object.fromEntries(formData.entries());
		dataToBasket.key = ''.concat(dataToBasket.idProduct, dataToBasket.color, dataToBasket.sizesSelect);

		return (onChange(()=> {
			const isDublicate = ceckDublicate(dataToBasket, values);
			if (isDublicate) {return [...values]}
			return ([...values, dataToBasket]);
		}
		));
	}

	return product && (
		<DetailsGoodCardStyle>
			<ButtonToBack $maxWidth={70} link={AppRoute.MAIN}>Назад</ButtonToBack>
			<GalleryStyle photos={activeProduct} />
            <FormStyle method="get" action="index.html" onSubmit={onSubmit}>
                <Title as="h3" size={TitleSize.SMALL}>Наименование товара:
					<span> {product.name}</span>
				</Title>
		        <PriceLabel >
					Цена <PriceValue readOnly  name="price" value={activeProduct.price}/> руб.
				</PriceLabel>
                <Label>Варианты цветов:</Label>
                <UlStyled>
	               {colorsList?.length &&
	               colorsList.map((color) => (
				    <li key={color.id}>
					    <Color
				           name="color"
				           value={color.id}
				           selectValue={activeColor}
				           text={color.name}
				           labelComponent={LabelComponentStyle}
				           onChange={(el) => {
					       setColor(Number(el.target.value));
					       }
					       }
				        />
		            </li>
	                ))
	               }
                </UlStyled>
                <Label>Выберите размер:</Label>
                <Sizes sizes={activeProduct.sizes} id="select1" name="sizesSelect" label="Доступные размеры"  />
                <Button type={"submit"} disabled={isDisabled}>
	                {  "В корзину" }
		        </Button>
		        <input  type="hidden" value={product.name} name="nameProduct"/>
		      	<input  type="hidden" value={product.id} name="idProduct"/>
				<input  type="hidden" value={activeProduct.name} name="nameColor"/>
		      	<input  type="hidden" value={activeProduct.images[0]} name="image"/>
	        </FormStyle>
	        <StyleDescription as="h3" size={TitleSize.SMALL}>
		        {activeProduct.description}
	        </StyleDescription>
		</DetailsGoodCardStyle>
	);
}

export default DetailsGoodCard;
