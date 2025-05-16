import styled, { css } from "styled-components";

export const TitleSize = {
	BIG: "big",
	MEDIUM: "medium",
	SMALL: "small",
	EXTRA_SMALL: "extra_small"
}

const TitleSizeValue = {
	[TitleSize.BIG]: {
		fontSize: "44px",
		lineHeight: "1.13"
	},
	[TitleSize.MEDIUM]: {
		fontSize: "36px",
		lineHeight: "1.13"
	},
	[TitleSize.SMALL]: {
		fontSize: "24px",
		lineHeight: "1.3"
	},
	[TitleSize.EXTRA_SMALL]: {
		fontSize: "18px",
		lineHeight: "1.5"
	}
}

const visuallyHiddenElement = css`
${(props) => props.$hidden ?  css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;`
 : null};
`;

const Title = styled.h1`
margin:0;
padding: 0;
font-weight: bold;
margin-bottom: ${(props) => props.marginBottom || 0}px;

${(props) => {
const values = TitleSizeValue[props.size ||TitleSize.MEDIUM];

  return css`
  font-size: ${values.fontSize};
  line-height: ${values.lineHeight};
 `;
}};

${visuallyHiddenElement}

`;

export default Title;
