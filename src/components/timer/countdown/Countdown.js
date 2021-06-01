/** @format */

import PillButton from '../../button/PillButton'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import {colors} from '../../../theme/color'

import styled from 'styled-components/macro'
import {useContext, useEffect} from 'react'
import {DateContext} from '../../../context/DateContext'
import {formatDate} from '../../../utils/formateDate'
import {sub} from 'date-fns/esm'
import {formatDistanceStrict} from 'date-fns'
import axios from 'axios'
import {URL} from '../../../data/constants/baseUrl'
import {config} from '../../auth/Auth'
import {userContext} from '../../../context/UserContext'
// Countdown -> https://github.com/vydimitrov/react-countdown-circle-timer/tree/master/packages/web#react-countdown-circle-timer
// https://github.com/vydimitrov/react-countdown-circle-timer#props-for-both-reactreact-native

// Custom Implementation -> https://jsfiddle.net/ghana7989/L4modt21/35/

const Countdown = ({
	isTimerRunning,
	setIsTimerRunning,
	duration,
	setDuration,
	setCount,
	count,
	time: {hours, minutes, seconds},
}) => {
	// structure of DateContext
	// value={{
	// date: {startDate, endDate},
	// dateFunctions: {setEndDate, setStartDate},
	// dateFunctionsInMilliSeconds: {
	// 	setEndDateInMilliSeconds,
	// 	setStartDateInMilliSeconds,
	// },
	// dateInMilliSeconds: {startDateInMilliSeconds, endDateInMilliSeconds},
	// fastType,
	// }}
	// Format of date - dd mon, time
	// console.log(format(new Date(), "dd-MMM', 'HH:mm bb"));
	// console.log(isToday(new Date()))

	const {
		date,
		dateFunctions,
		dateFunctionsInMilliSeconds,
		fastType,
		dateInMilliSeconds,
	} = useContext(DateContext)
	const {
		user: {token},
	} = useContext(userContext)
	const handleTimerButtonClick = () => {
		setIsTimerRunning(p => !p)
		if (count > 0) {
			setCount(count)
		}
		if (isTimerRunning) {
			dateFunctions.setEndDate(formatDate(new Date()))
			dateFunctionsInMilliSeconds.setEndDateInMilliSeconds(new Date())
		} else {
			dateFunctions.setStartDate(formatDate(new Date()))
			dateFunctionsInMilliSeconds.setStartDateInMilliSeconds(new Date())
		}
	}

	const {startDateInMilliSeconds, endDateInMilliSeconds} = dateInMilliSeconds
	const postFastData = async date => {
		// const {fastStartedAt, fastEndedAt, durationOfTheFast, fastType} = req.body
		const durationOfTheFast = Number(
			formatDistanceStrict(date, startDateInMilliSeconds).split(' ')[0],
		)
		const fastData = {
			fastStartedAt: startDateInMilliSeconds,
			fastEndedAt: date,
			durationOfTheFast,
			fastType,
		}
		const {data} = await axios.post(URL + '/fast-stats', fastData, {
			headers: {Authorization: 'Bearer ' + token},
		})
		// console.log('data: ', data)
	}
	console.log('token: ', token)

	return (
		<CountdownCircleTimer
			isPlaying={isTimerRunning}
			duration={duration}
			trailColor={colors.peach}
			colors={colors.blueDark}
			rotation='counterclockwise'
			size={180}
			onComplete={() => {
				setIsTimerRunning(false)
				setDuration(duration)
				setCount(duration)
				dateFunctions.setEndDate(formatDate(new Date()))
				dateFunctionsInMilliSeconds.setEndDateInMilliSeconds(new Date())
				postFastData(new Date())
				return [true, 1]
			}}>
			<CountdownContainer>
				<div className='time'>
					<h4>Fasting Time</h4>
					<h1>
						{count === duration
							? `${fastType[0] + fastType[1]}:00:00`
							: `${hours}:${minutes}:${seconds}`}
					</h1>
				</div>
				<PillButton
					onClick={handleTimerButtonClick}
					text={isTimerRunning ? 'END' : 'START'}
					bgColor={colors.peach}
					color={colors.blueDark}
				/>
			</CountdownContainer>
		</CountdownCircleTimer>
	)
}

export const CountdownContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: rotateZ(-120deg);

	.time {
		color: white;
		h4 {
			margin-bottom: 1rem;
			opacity: 50%;
		}
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin: 2rem;
		font-weight: bold;
	}
`

export default Countdown
