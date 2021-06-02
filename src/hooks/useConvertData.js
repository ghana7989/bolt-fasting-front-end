/** @format */

import {
	secondsToHours,
	format,
	parseISO,
	isToday,
	formatDistanceToNow,
	formatDistanceToNowStrict,
} from 'date-fns'

const fasts = [
	{
		durationOfTheFast: '424980',
		fastStartedAt: '2021-05-02T12:45',
		fastEndedAt: '2021-06-09T12:50',
		fastType: '16:8',
		fastDayInWeek: 'Sun',
		id: '2021-06-02T07:15:30.723Z',
	},
	{
		durationOfTheFast: '1295973',
		fastStartedAt: '2021-06-02T07:20:24.151Z',
		fastEndedAt: '2021-06-17T12:50',
		fastType: '16:8',
		fastDayInWeek: 'Wed',
		id: '2021-06-02T07:20:24.151Z',
	},
]

export const convertData = arr => {
	let initialGraphData = {
		Sun: 1,
		Mon: 2,
		Tue: 3,
		Wed: 4,
		Thu: 5,
		Fri: 6,
		Sat: 7,
	}
	const _ = arr
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
	const graphData = []
	Object.keys(initialGraphData).forEach(key =>
		graphData.push({
			day: key,
			duration: initialGraphData[key],
		}),
	)
	console.log('graphData: ', graphData)
	return graphData
}
