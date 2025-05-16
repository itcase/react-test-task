import { VisuallyHiddenInput } from "../../styled";
import {Label} from "../../styled";

const ColorsList = {
	black: "черный",
	white: "белый",
	green:"зеленый",
	orange:"оранжевый",
	yellow: "желтый",
	grey: "серый",
	red: "красный",
	blue: "синий",
	brown: "коричневый",
}

export const colorsValue = {
	[ColorsList.black] : "#000000",
	[ColorsList.white] : "#ffffff",
	[ColorsList.green] : "#99ec12",
	[ColorsList.orange] : "#ec7412",
	[ColorsList.yellow] : "#f5f82e",
	[ColorsList.grey] : "#737466",
	[ColorsList.red] : "#d42626",
	[ColorsList.blue] : "#3c9eee",
	[ColorsList.brown] : "#8d7762",
}

function Color({
	labelComponent,
	selectValue,
	name,
	value,
	text,
	onChange,
	...props
}){
	const LabelComponent = labelComponent;
	const isChecked = value === selectValue;
	return(
		<Label>
			<VisuallyHiddenInput
			value={value}
			checked={isChecked}
			name={name}
			onChange={onChange}
			{...props}
			type="radio"
			/>
		<LabelComponent $isChecked={isChecked} $colorRadio={text}>{text}</LabelComponent>
		</Label>
	)
}

export default Color;
