/** @format */

import PillButton from '../../button/PillButton'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import {colors} from '../../../theme/color'
import styled from 'styled-components/macro'

// Countdown -> https://github.com/vydimitrov/react-countdown-circle-timer/tree/master/packages/web#react-countdown-circle-timer
// https://github.com/vydimitrov/react-countdown-circle-timer#props-for-both-reactreact-native

const Countdown = () => {
	return (
		<CountdownCircleTimer
			isPlaying
			duration={10}
			trailColor={colors.peach}
			colors={colors.blueDark}
			rotation='counterclockwise'
			size={180}>
			<CountdownContainer>
				<div className='time'>
					<h4>Fasting Time</h4>
					<h1>13:34:25</h1>
				</div>
				<PillButton
					text='End'
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
