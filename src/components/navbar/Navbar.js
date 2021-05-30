/** @format */

import React from 'react'
import styled from 'styled-components'

import Logo from '../../assets/logo.png'
import Avatar from '../../assets/avataaar.png'
import {Container} from 'react-bootstrap'

export const Navbar = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 10vh;
`
export const Brand = styled.div``
export const User = styled.div``

const Nav = () => {
	return (
		<Container fluid='sm'>
			<Navbar>
				<Brand href='/'>
					<img
						src={Logo}
						alt='logo bolt fasting'
					/>
				</Brand>
				<User>
					<img src={Avatar} alt='Avatar' />
				</User>
			</Navbar>
		</Container>
	)
}

export default Nav
