/** @format */

import React, {createRef, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {colors} from '../../theme/color'
import Countdown from './countdown/Countdown'
import {ReactComponent as Pencil} from '../../assets/pencil.svg'
import {FastTypeContext} from '../../context/FastTypeContext'
import {format, hoursToSeconds} from 'date-fns'
import {secondsToHms} from '../../utils/secondsToHms'
import {DateContext} from '../../context/DateContext'
import Modal from '../modal/Modal'
import {ModalContainer, ModalForm, TextInputContainer} from '../auth/Auth'
import OutsideClickHandler from '../HOC/OutsideClickHandler'
import PillButton, {PillBtn} from '../button/PillButton'
import Spacer from '../HOC/Spacer'
import {formatDate} from '../../utils/formateDate'
import axios from 'axios'
import {userContext} from '../../context/UserContext'
import {URL} from '../../data/constants/baseUrl'
import {FastContext} from '../../context/FastContext'
// TO-DO use formatRelative in Fast Ended

const Timer = () => {
	const [isTimerRunning, setIsTimerRunning] = useState(false)
	const {setFastType, FAST_TYPES, fastType} = useContext(FastTypeContext)
	const [duration, setDuration] = useState(
		// () => Number(hoursToSeconds(Number(fastType.split(':')[0]))),
		Number(hoursToSeconds(0.001)),
	)
	const [count, setCount] = useState(duration)
	const handleSetDuration = value => setDuration(value)

	// Format of date - dd mon, time
	// console.log(format(new Date(), "dd-MMM', 'HH:mm bb"));
	// console.log(isToday(new Date()))
	const [time, setTime] = useState({
		hours: undefined,
		minutes: undefined,
		seconds: undefined,
	})

	const {
		date: {startDate, endDate},
		dateInMilliSeconds: {startDateInMilliSeconds, endDateInMilliSeconds},
		dateFunctions: {setEndDate, setStartDate},
		dateFunctionsInMilliSeconds: {
			setEndDateInMilliSeconds,
			setStartDateInMilliSeconds,
		},
	} = useContext(DateContext)

	const {user} = useContext(userContext)

	useEffect(() => {
		if (isTimerRunning) {
			const timer = setInterval(() => {
				setCount(p => p - 1)
			}, 1000)
			return () => clearInterval(timer)
		}
	}, [isTimerRunning])

	useEffect(() => {
		setTime(secondsToHms(count))
	}, [count])

	const handleSelectChange = e => {
		setFastType(e.target.value)
	}

	const [isModal, setIsModal] = useState(false)
	const dateRef = createRef()
	const [temp, setTemp] = useState(undefined)
	const {fasts, setFasts} = useContext(FastContext)

	const handleOnDateUpdateSubmit = async () => {
		setIsModal(false)
		if (!dateRef.current.value) {
			return
		}
		const id = startDateInMilliSeconds
		console.log('id: ', id)

		const rawDateTime = dateRef.current.value
		const formattedDateTime = formatDate(rawDateTime)
		// setIsModal(false)
		if (temp === 'startedAt') {
			setStartDateInMilliSeconds(rawDateTime)
			setStartDate(formattedDateTime)
			const {data} = await axios.put(
				`${URL}/fast-stats`,
				{
					fastStartedAt: rawDateTime,
					id,
				},
				{
					headers: {
						Authorization: `Bearer ${user?.token}`,
					},
				},
			)
		} else if (temp === 'endedAt') {
			setEndDateInMilliSeconds(rawDateTime)
			setEndDate(formattedDateTime)
			const {data} = await axios.put(
				`${URL}/fast-stats`,
				{
					fastEndedAt: rawDateTime,
					id,
				},
				{
					headers: {
						Authorization: `Bearer ${user?.token}`,
					},
				},
			)
		}
		const getUserStats = async () => {
			const {data} = await axios({
				method: 'get',
				url: `${URL}/fast-stats`,
				headers: {
					Authorization: `Bearer ${user?.token}`,
				},
			})
			console.log('data: ', data)
			setFasts(data.fasts)
		}
		getUserStats()
	}
	const handleOnStartDateChangeClick = () => {
		if (startDate && endDate) {
			setIsModal(true)
			setTemp('startedAt')
		}
	}
	const handleOnEndDateChangeClick = () => {
		if (startDate && endDate) {
			setIsModal(true)
			setTemp('endedAt')
		}
	}
	return (
		<>
			{isModal ? (
				<Modal>
					<ModalContainer>
						<OutsideClickHandler onOutSideClick={() => setIsModal(false)}>
							<ModalForm>
								<TextInputContainer>
									<input
										ref={dateRef}
										id='date'
										type='datetime-local'
										name='date'
										placeholder='Select the date'
									/>
									<label>Date</label>
									<Spacer height={60} />
									<PillButton
										bgColor={colors.peach}
										color={colors.blueDark}
										text='Update'
										onClick={handleOnDateUpdateSubmit}
									/>
								</TextInputContainer>
							</ModalForm>
						</OutsideClickHandler>
					</ModalContainer>
				</Modal>
			) : (
				<TimerContainer>
					<FastingPlan onChange={handleSelectChange}>
						<option value='16:8'>{FAST_TYPES.easy}</option>
						<option value='18:9'>{FAST_TYPES.medium}</option>
						<option value='20:4'>{FAST_TYPES.hard}</option>
					</FastingPlan>
					<CountdownContainer>
						<Countdown
							isTimerRunning={isTimerRunning}
							setIsTimerRunning={setIsTimerRunning}
							duration={duration}
							setDuration={handleSetDuration}
							setCount={setCount}
							count={count}
							time={time}
						/>
					</CountdownContainer>
					<FastingStatusContainer>
						<div className='status'>
							<h3>STARTED</h3>
							<p onClick={handleOnStartDateChangeClick}>
								{/* 14 Feb, 9:45 <Pencil /> */}
								{startDate ? startDate : 'Start Now'} <Pencil />
							</p>
						</div>
						<div className='status'>
							<h3>FAST ENDED</h3>
							{/* <p>Today, 1:45</p> */}
							<p onClick={handleOnEndDateChangeClick}>
								{endDate ? endDate : 'Not Yet Ended'} <Pencil />
							</p>
						</div>
					</FastingStatusContainer>
				</TimerContainer>
			)}
		</>
	)
}

export const TimerContainer = styled.div`
	width: 100%;
	height: 36rem;
	background-color: ${colors.blueLight};
	border-radius: 3.6rem;
	box-shadow: 0px 20px 100px -20px rgba(74, 73, 190, 0.25);

	display: flex;
	flex-direction: column;
	/* justify-content: space-around; */
	align-items: center;
	padding: 19px 56px;
`
export const FastingPlan = styled.select`
	padding: 0px 10px;
	text-align: center;
	width: 8rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 1rem 0px 4rem;
	border-radius: 16px;
	user-select: none;
	background: url('https://cdn.discordapp.com/attachments/844262935546560543/848784306058428446/pencil.png')
		no-repeat right ${colors.blueLight2};
	background-position: 90%;
	border: 1px solid ${colors.blueLight2};
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	color: ${colors.white};
	font-size: 2rem;
	cursor: pointer;
	outline: none;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	h2 {
		color: ${colors.white};
		margin-right: 0.5rem;
	}
`

export const CountdownContainer = styled.div`
	transform: rotateZ(120deg);
	/* margin: 1rem 0px 4rem; */
`
export const FastingStatusContainer = styled.div`
	width: 110%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1rem 0px 2rem;
	line-height: 2rem;
	color: ${colors.white};
	h3 {
		opacity: 0.5;
	}
`

export default Timer
