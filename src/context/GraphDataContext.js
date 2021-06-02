/** @format */

import axios from 'axios'
import {
	formatDistanceToNowStrict,
	isToday,
	parseISO,
	secondsToHours,
} from 'date-fns'
import {createContext, createRef, useContext, useEffect, useState} from 'react'
import {URL} from '../data/constants/baseUrl'
import {FastContext} from './FastContext'
import {userContext} from './UserContext'

export const GraphContext = createContext()

let initialGraphData = {
	Sun: 0,
	Mon: 0,
	Tue: 0,
	Wed: 0,
	Thu: 0,
	Fri: 0,
	Sat: 0,
}
export const GraphContextProvider = ({children}) => {
	// const [graphData, setGraphData] = useState([])
	const graphDataRef = createRef()
	graphDataRef.current = []
	const {user} = useContext(userContext)
	const [response, setResponse] = useState(null)
	const getUserStats = async () => {
		const {data} = await axios({
			method: 'get',
			url: `${URL}/fast-stats`,
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		})
		setResponse(data)
	}
	const parsedData = response?.fasts
		.map(fast => {
			const distanceFromNow = +formatDistanceToNowStrict(
				parseISO(fast.fastStartedAt),
				{
					unit: 'day',
				},
			).split(' ')[0]
			if (distanceFromNow > 7) return undefined
			const duration = secondsToHours(Number(fast.durationOfTheFast))
			const today = isToday(parseISO(fast.fastStartedAt))
			const day = fast.fastDayInWeek

			return {day, duration, today, distanceFromNow}
		})
		.filter(i => i !== undefined)
		.forEach(({day, duration}) => {
			initialGraphData[day] += duration
		})
	//

	// Converting Object into Array
	const tempGraphData = []
	Object.keys(initialGraphData).forEach(key => {
		graphDataRef?.current.push({
			day: key,
			duration: initialGraphData[key],
		})
		return
	})
	// setGraphData(p => [...tempGraphData])

	useEffect(() => {
		// setGraphData(tempGraphData)
		if (user.token) {
			getUserStats()
		}
	}, [user])

	return (
		<GraphContext.Provider value={graphDataRef?.current}>
			{children}
		</GraphContext.Provider>
	)
}
