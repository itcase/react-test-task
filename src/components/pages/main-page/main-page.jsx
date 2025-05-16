import  GoodsList from "../../blocks/goods-list/goods-list";
import Title, {TitleSize} from "../../ui/title/title";

function MainPage({products}){
	return (
		<>
		<Title $hidden>Интернет-магазин одежды</Title>
		<GoodsList products={products}/>
		</>
	);
}


export default MainPage;
