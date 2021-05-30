/** @format */

import React from 'react'
import MyResponsiveBar from './ResponsiveBars'
import styled from 'styled-components'
import {colors} from '../../../theme/color'

const RecentFasts = () => {
	return (
		<RecentFastsContainer>
			<MyResponsiveBar />
		</RecentFastsContainer>
	)
}
export const RecentFastsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 36rem;
	background-color: ${colors.white};
	border-radius: 30px;
	box-shadow: 0px 20px 100px -20px rgba(74, 73, 190, 0.25);
	margin-right: -10rem;
`
export default RecentFasts
