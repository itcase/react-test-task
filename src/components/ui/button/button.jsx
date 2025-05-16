import {StyledButton} from "./styled";

function Button({
	children,
	link,
	maxWidth,
	className,
	onClick,
	type,
	...props
}) {
	return (
		<StyledButton
		{...props}
		 $maxWidth={maxWidth}
		 className={className}
		 {...(link? {to: link} : {as: "button", onClick, type: type})}>
			{children}

		</StyledButton>
	);
}

export default Button;
