/** @format */

import React from 'react'

const Spacer = ({width, height, grow, shrink, children}) => {
	const style = {
		width: typeof width === 'number' ? width + 'px' : width || '1px',
		height: typeof height === 'number' ? height + 'px' : height || '1px',
		flexGrow: grow,
		flexShrink: shrink,
	}

	return React.createElement('div', {style}, children)
}

export default Spacer
