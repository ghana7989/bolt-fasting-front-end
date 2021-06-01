/** @format */

import {createRef, useEffect} from 'react'

const OutsideClickHandler = ({onOutSideClick, children}) => {
	const wrapperRef = createRef()

	const handleClickOutside = e => {
		if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
			onOutSideClick()
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	})

	return <div ref={wrapperRef}>{children}</div>
}

export default OutsideClickHandler
