/** @format */

import React, {useContext, useState} from 'react'
import styled from 'styled-components/macro'

import Logo from '../../assets/logo.png'
import Avatar from '../../assets/avataaar.png'
import {Container} from 'react-bootstrap'
import Auth from '../auth/Auth'
import {userContext} from '../../context/UserContext'
import {DateContext} from '../../context/DateContext'

export const Navbar = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 10vh;
`
export const Brand = styled.div``
export const User = styled.div``
export const NavAuthContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 20rem;
	h1 {
		width: 100%;
		cursor: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>👁‍🗨</text></svg>"),
			auto;
	}
`

const Nav = () => {
	const [showModal, setShowModal] = useState(false)
	const [authType, setAuthType] = useState('')
	const {user, setUser} = useContext(userContext)
	const DateContextObj = useContext(DateContext)
	if (user) {
		const {name, email} = user
	}

	const handleClick = e => {
		setAuthType(e.target.innerText)
		if (e.target.innerText === 'Logout') {
			localStorage.removeItem('userInfo')
			setUser(null)
			DateContextObj?.resetDateContext()
			return
		}
		setShowModal(p => !p)
	}

	return (
		<>
			{showModal && <Auth setShowModal={setShowModal} authType={authType} />}
			<Container fluid='sm'>
				<Navbar>
					<Brand href='/'>
						<img src={Logo} alt='logo bolt fasting' />
					</Brand>
					<User>
						{!user ? (
							<>
								<NavAuthContainer>
									<h1 onClick={handleClick}>Login</h1>
									<h1 onClick={handleClick}>Sign Up</h1>
								</NavAuthContainer>
							</>
						) : (
							<div
								style={{
									display: 'flex',
									width: '120px',
									justifyContent: 'space-between',
								}}>
								<NavAuthContainer>
									<h1 onClick={handleClick}>Logout</h1>
								</NavAuthContainer>
								<img src={Avatar} alt='Avatar' />
							</div>
						)}
					</User>
				</Navbar>
			</Container>
		</>
	)
}
export default Nav
