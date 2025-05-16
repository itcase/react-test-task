 export function ceckDublicate(newValue, allValues) {
	const products = allValues.find((value) => value.key === newValue.key);

		if (!products) {return false}

		return true;
	}


