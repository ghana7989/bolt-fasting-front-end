/** @format */

import React, {useContext, useEffect, useState} from 'react'
import MyResponsiveBar from './ResponsiveBars'
import styled from 'styled-components'
import {colors} from '../../../theme/color'
import axios from 'axios'
import {userContext} from '../../../context/UserContext'
import {URL} from '../../../data/constants/baseUrl'
import {FastContext} from '../../../context/FastContext'
import {GraphContext} from '../../../context/GraphDataContext'
import {convertData} from '../../../hooks/useConvertData'

const RecentFasts = () => {
	const {user} = useContext(userContext)
	const {fasts, setFasts} = useContext(FastContext)
	const graphData = convertData(fasts)

	return (
		<RecentFastsContainer>
			<MyResponsiveBar fasts={graphData} />
		</RecentFastsContainer>
	)
}
export const RecentFastsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 36rem;
	background-color: ${colors.white};
	border-radius: 30px;
	box-shadow: 0px 20px 100px -20px rgba(74, 73, 190, 0.25);
	margin-right: -10rem;
`
export default RecentFasts
