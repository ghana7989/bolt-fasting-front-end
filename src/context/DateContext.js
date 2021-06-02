/** @format */

import {createContext, useContext, useState} from 'react'
import {FastTypeContext} from './FastTypeContext'

export const DateContext = createContext(undefined)

export const DateContextProvider = ({children}) => {
	const [startDate, setStartDate] = useState(undefined)
	const [startDateInMilliSeconds, setStartDateInMilliSeconds] =
		useState(undefined)
	const [endDate, setEndDate] = useState(undefined)
	const [endDateInMilliSeconds, setEndDateInMilliSeconds] = useState(undefined)
	const {fastType} = useContext(FastTypeContext)
	const resetDateContext = () => {
		setStartDate(undefined)
		setStartDateInMilliSeconds(undefined)
		setEndDate(undefined)
		setEndDateInMilliSeconds(undefined)
	}
	return (
		<DateContext.Provider
			value={{
				date: {startDate, endDate},
				dateInMilliSeconds: {startDateInMilliSeconds, endDateInMilliSeconds},
				dateFunctions: {setEndDate, setStartDate},
				dateFunctionsInMilliSeconds: {
					setEndDateInMilliSeconds,
					setStartDateInMilliSeconds,
				},
				fastType,
				resetDateContext,
			}}>
			{children}
		</DateContext.Provider>
	)
}
