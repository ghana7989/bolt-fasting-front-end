/** @format */

import React from 'react'
import ResponsiveBarGraph from './ResponsiveBarGraph'
import styled from 'styled-components/macro'
import {RecentFastsContainer} from '../recent-fasts/RecentFasts'
import TabButton from '../../button/TabButton'
import {colors} from '../../../theme/color'

const FastingTotalHours = () => {
	return (
		<FastingTotalHoursContainer>
			<Tabs>
				<TabButtons>
					<TabButton text='Week' />
					<TabButton text='Month' />
					<TabButton text='Year' />
				</TabButtons>
			</Tabs>
			<ResponsiveBarGraph />
		</FastingTotalHoursContainer>
	)
}

export const FastingTotalHoursContainer = styled(
	RecentFastsContainer,
)`
	position: relative;
`
export const Tabs = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	position: absolute;
	top: 1rem;
	right: 3rem;
	width: 15rem;
	height: 2.6rem;
	border-radius: 6px;
	background: ${colors.grey1};
`
export const TabButtons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;
`

export default FastingTotalHours
