/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const FastDetail = ({value, valueLabel}) => {
	return (
		<FastDetailContainer>
			<h3>{valueLabel}</h3>
			<h1>{value}</h1>
		</FastDetailContainer>
	)
}

export const FastDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	h3 {
		opacity: 0.5;
	}
`

FastDetail.propTypes = {
	valueLabel: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([
		PropType.number.isRequired,
		PropType.string.isRequired,
	]),
}

export default FastDetail
