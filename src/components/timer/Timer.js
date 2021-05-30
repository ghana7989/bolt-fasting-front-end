/** @format */

import React from 'react'
import styled from 'styled-components'
import {colors} from '../../theme/color'
import Countdown from './countdown/Countdown'
import {ReactComponent as Pencil} from '../../assets/pencil.svg'

const Timer = () => {
	return (
		<TimerContainer>
			<FastingPlan>
				<h2>16:9</h2>
				<Pencil />
			</FastingPlan>
			<CountdownContainer>
				<Countdown />
			</CountdownContainer>
			<FastingStatusContainer>
				<div className='status'>
					<h3>STARTED</h3>
					<p>
						14 Feb, 9:45 <Pencil />
					</p>
				</div>
				<div className='status'>
					<h3>FAST ENDED</h3>
					<p>Today, 1:45</p>
				</div>
			</FastingStatusContainer>
		</TimerContainer>
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
export const FastingPlan = styled.div`
	border: none;
	padding: 0px 10px;
	text-align: center;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 1rem 0px 4rem;
	border-radius: 16px;
	user-select: none;
	background-color: ${colors.blueLight2};
	border: 1px solid ${colors.blueLight2};
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
	width: 100%;
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
