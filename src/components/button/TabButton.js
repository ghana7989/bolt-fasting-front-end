/** @format */

import React, {useEffect} from 'react'
import styled from 'styled-components/macro'
import {colors} from '../../theme/color'

const TabButton = ({text}) => {
	return (
		<TabButtonContainer>
			<button
				className={`tabBtn-${text} ${
					text === 'Week' && 'active'
				}`}>
				{text}
			</button>
		</TabButtonContainer>
	)
}

export const TabButtonContainer = styled.div`
	box-sizing: border-box;
	button {
		width: inherit;
		height: inherit;
		background: transparent;
		border: none;
		border-radius: 6px;
	}
	button:active,
	button.active,
	button:focus {
		width: inherit;
		height: inherit;
		background: ${colors.white};
		outline: none;
	}
`

export default TabButton
