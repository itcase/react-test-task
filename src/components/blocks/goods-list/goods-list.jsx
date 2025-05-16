import {StyledCatalog, Goods, ItemStyle, StyledLink} from "./styles";
import Title, {TitleSize} from "../../ui/title/title";
import CardGood from "../../ui/card-good/card-good";


function GoodsList({products}) {
	const links = products.map((product) => `/details/${product.id}`);
	const linksObject = {};
	links.forEach((link) => {
		const key = link.slice(link.lastIndexOf('/')+1);
		linksObject[[key]] = link;
	});

	return (
		<StyledCatalog>
			<Title as="h2" size={TitleSize.BIG} marginBottom={50}>Каталог товаров</Title>
			{products?.length ? (
				<Goods>
				{products.map((product) => (

						<StyledLink to={linksObject[product.id]}>
				       <ItemStyle key={product.id}>
							<CardGood {...product} />
						</ItemStyle>
						</StyledLink>
				)
					)}
				</Goods>) : null }
		</StyledCatalog>
	);
}

export default GoodsList;
