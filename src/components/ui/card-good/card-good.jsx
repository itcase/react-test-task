import Title, {TitleSize} from "../title/title";
import {CardStyle, Header, ImageStyle, ImageWrapper} from "./styles";

function CardGood({name, colors, children, className}){
	return (
		<CardStyle className={className}>
			<Header>
				<ImageWrapper>
				<ImageStyle src={colors[0].images[0]} width={205} height={270} alt={colors[0].description} />
				</ImageWrapper>
				<div>
					<Title as="h3" size={TitleSize.SMALL}>{name}</Title>
				</div>
			</Header>
			{children}
		</CardStyle>
	);
}


export default CardGood;
