/** @format */

import React from 'react'
import styled from 'styled-components/macro'

import FastDetail from '../FastDetail'

const FAST_STATS_DATA = [
	{
		label: 'Total Fasts',
		value: 14,
	},
	{
		label: '7-fast avg',
		value: '16h',
	},
	{
		label: 'Longest Fast',
		value: '18.1h',
	},
	{
		label: 'Longest Streak',
		value: 14,
	},
	{
		label: 'Current Streak',
		value: 14,
	},
]

const FastsStats = () => {
	return (
		<FastsStatsContainer>
			{FAST_STATS_DATA.map(({label, value}) => (
				<FastDetail
					key={label}
					valueLabel={label}
					value={value}
				/>
			))}
		</FastsStatsContainer>
	)
}

export const FastsStatsContainer = styled.div`
	width: 100%;
	height: 18rem;
	background-color: #fff;
	box-shadow: 0px 20px 100px -20px rgba(163, 163, 163, 0.25);
	border-radius: 32px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0;
	margin: 0;
`

export default FastsStats
