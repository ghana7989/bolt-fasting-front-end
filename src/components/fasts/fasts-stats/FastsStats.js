/** @format */

import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components/macro'
import {FastContext} from '../../../context/FastContext'
import axios from 'axios'
import FastDetail from '../FastDetail'
import {URL} from '../../../data/constants/baseUrl'
import {userContext} from '../../../context/UserContext'
import {secondsToHours} from 'date-fns/esm'

const FastsStats = () => {
	const {user} = useContext(userContext)
	const [userFastStats, setUserFastStats] = useState(undefined)
	useEffect(() => {
		;(async function () {
			const {data} = await axios.get(`${URL}/fast-stats`, {
				headers: {
					Authorization: `Bearer ${user?.token}`,
				},
			})

			const averageFastDurationInHours = secondsToHours(
				Number(data.averageFastDuration),
			)
			setUserFastStats({
				...data,
				averageFastDuration: averageFastDurationInHours,
			})
		})()
	}, [])

	return (
		<FastsStatsContainer>
			<FastDetail
				valueLabel='Total Fasts'
				value={!userFastStats ? 14 : userFastStats?.totalNumberOfFasts}
				// value={14}
			/>
			<FastDetail
				valueLabel='Average Fast Duration'
				value={'16h'}
				value={
					!userFastStats ? '16h' : userFastStats?.averageFastDuration + 'h'
				}
			/>
			<FastDetail valueLabel='Longest Fast' value={'18.1h'} />
			<FastDetail valueLabel='Longest Streak' value={14} />
			<FastDetail valueLabel='Current Streak' value={14} />
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
