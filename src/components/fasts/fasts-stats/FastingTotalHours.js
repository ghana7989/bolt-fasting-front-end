/** @format */

import React, {useContext, useEffect} from 'react'
import ResponsiveBarGraph from './ResponsiveBarGraph'
import styled from 'styled-components/macro'
import {RecentFastsContainer} from '../recent-fasts/RecentFasts'
import TabButton from '../../button/TabButton'
import {colors} from '../../../theme/color'
import {FastContext} from '../../../context/FastContext'
import axios from 'axios'
import {userContext} from '../../../context/UserContext'
import {GraphContext} from '../../../context/GraphDataContext'
import {convertData} from '../../../hooks/useConvertData'
import {URL} from '../../../data/constants/baseUrl'

const FastingTotalHours = () => {
	const {user} = useContext(userContext)
	const {fasts, setFasts} = useContext(FastContext)
	console.log('fasts: ', fasts)
	const graphData = convertData(fasts)
	const getUserStats = async () => {
		const {data} = await axios({
			method: 'get',
			url: `${URL}/fast-stats`,
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		})
		setFasts(data.fasts)
	}
	useEffect(() => {
		getUserStats()
	}, [])
	return (
		<FastingTotalHoursContainer>
			<Tabs>
				<TabButtons>
					<TabButton text='Week' />
					<TabButton text='Month' />
					<TabButton text='Year' />
				</TabButtons>
			</Tabs>
			<ResponsiveBarGraph fasts={graphData} />
		</FastingTotalHoursContainer>
	)
}

export const FastingTotalHoursContainer = styled(RecentFastsContainer)`
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
