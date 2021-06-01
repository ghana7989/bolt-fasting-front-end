/** @format */
import {colors} from '../../theme/color'
import OutsideClickHandler from '../HOC/OutsideClickHandler'
import Modal from '../modal/Modal'
import styled from 'styled-components/macro'
import axios from 'axios'

import Spacer from '../HOC/Spacer'
import PillBtn from '../button/PillButton'
import {createRef, useContext, useEffect} from 'react'
import {URL} from '../../data/constants/baseUrl'
import {userContext} from '../../context/UserContext'

export const config = {
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
}
const Auth = ({setShowModal, authType}) => {
	//  const config = {
	// 		headers: {
	// 			Authorization: `Bearer ${userInfo.token}`,
	// 		},
	// 	}
	const emailRef = createRef()
	const passwordRef = createRef()
	const {setUser} = useContext(userContext)

	const handleOnClick = async () => {
		if (authType === 'Login') {
			const {data} = await axios.post(
				URL + '/login',
				{
					email: emailRef.current.value,
					password: passwordRef.current.value,
				},
				config,
			)
			// Data Shape
			// {id: "60b61d3be9754f2f90a286a0", email: "test1@gmail.com", name: "test1", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY…jMyfQ.0yaOUefnqfKx0yHcltHGW5RO_vz2vXkRMS39anpIyPI"}

			setUser(data)
			console.log('data: ', data)
			localStorage.setItem('userInfo', JSON.stringify(data))
		} else {
			const {data} = await axios.post(
				URL,
				{
					email: emailRef.current.value,
					password: passwordRef.current.value,
				},
				config,
			)
			setUser(data)
			localStorage.setItem('userInfo', JSON.stringify(data))
		}
		setShowModal(false)
	}

	return (
		<>
			<Modal>
				<ModalContainer>
					<OutsideClickHandler onOutSideClick={() => setShowModal(false)}>
						<ModalForm>
							<TextInputContainer>
								<input
									ref={emailRef}
									id='email'
									type='email'
									name='email'
									placeholder='Enter your email'
								/>
								<label>Email</label>
							</TextInputContainer>
							<TextInputContainer>
								<input
									ref={passwordRef}
									id='password'
									type='password'
									name='password'
									placeholder='Enter your password'
								/>
								<label>Password</label>
							</TextInputContainer>
							<Spacer height={60} />
							<PillBtn
								bgColor={colors.peach}
								color={colors.blueDark}
								text={authType}
								onClick={handleOnClick}
							/>
						</ModalForm>
					</OutsideClickHandler>
				</ModalContainer>
			</Modal>
		</>
	)
}

export const ModalContainer = styled.div`
	background: ${colors.grey1};
	z-index: 2000;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	width: 100vw;
	height: 100vh;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ModalForm = styled.div`
	width: 50rem;
	height: 40rem;
	background-color: ${colors.blueLight};
	border-radius: 3.6rem;
	box-shadow: 0px 20px 100px -20px rgba(74, 73, 190, 0.25);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 19px 56px;
`

export const TextInputContainer = styled.div`
	position: relative;
	margin-top: 50px;

	input {
		display: inline-block;
		width: 40rem;
		height: 4rem;
		box-sizing: border-box;
		outline: none;
		border: 1px solid ${colors.grey1};
		border-radius: 3px;
		padding: 10px 10px 10px 120px;
		transition: all 0.1s ease-out;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 10rem;
		height: 40px;
		line-height: 40px;
		color: white;
		border-radius: 3px 0 0 3px;
		padding: 0 20px;
		background: ${colors.blueDark};
		transform: translateZ(0) translateX(0);
		transition: all 0.3s ease-in;
		transition-delay: 0.2s;
	}

	input:focus + label {
		transform: translateY(-120%) translateX(0%);
		border-radius: 3px;
		transition: all 0.1s ease-out;
	}

	input:focus {
		padding: 10px;
		transition: all 0.3s ease-out;
		transition-delay: 0.2s;
	}
`

export default Auth
