/** @format */
import {createContext, useState} from 'react'
import {FAST_TYPES} from '../data/constants/FAST_TYPES'

export const FastTypeContext = createContext()

export const FastTypeContextProvider = ({
	children,
}) => {
	const [fastType, setFastType] = useState(
		FAST_TYPES.easy,
	)
	return (
		<FastTypeContext.Provider
			value={{fastType, setFastType, FAST_TYPES}}>
			{children}
		</FastTypeContext.Provider>
	)
}
