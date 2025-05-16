import {Text, StyledLogo, LogoStyleMainPage} from "./styles";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";



function Logo() {
	const {pathname} = useLocation();

	return  pathname === AppRoute.MAIN ? (
		<LogoStyleMainPage>
			<Text>Логотип</Text>
		</LogoStyleMainPage>

	) : (
		<StyledLogo to={AppRoute.MAIN}>
			<Text>Логотип</Text>
		</StyledLogo>
	);
}

export default Logo;
