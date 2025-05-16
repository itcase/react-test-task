import React, {useState} from "react";
import { SelectStyle } from "./styles";
import { SizesValue } from "../../../const";

function Sizes({sizes, label, id, name}) {
   const [valueSelect, setValueSelect] = useState();

	return (
		<>
		{sizes?.length ? (
				<SelectStyle value={valueSelect} id={id} name={name} aria-label={label}
				onChange={(el)=> setValueSelect(el.target.value)}>
					{sizes.map((size, index) => (
					<option key={index} value={size}>{SizesValue[size]}</option>
				))}
				</SelectStyle>
		) : (
			<SelectStyle id={id} name={name} aria-label={label}>
	              <option value={0}>{SizesValue[0]}</option>
	        </SelectStyle>)
	    }
		</>

	);

}

export default Sizes;
