/** @format */

import React from 'react'
import styled from 'styled-components/macro'
const PillButton = ({bgColor, color, text}) => {
	return (
		<PillBtn bgColor={bgColor} color={color}>
			{text}
		</PillBtn>
	)
}

export const PillBtn = styled.a`
	display: inline-block;
	background: ${props => props.bgColor};
	padding: 5px 30px;
	border-radius: 999em;
	text-decoration: none;
	color: ${props => props.color};
	font-size: 16px;
	vertical-align: bottom;
	white-space: nowrap;
	cursor: pointer;
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 16px;
`

export default PillButton
