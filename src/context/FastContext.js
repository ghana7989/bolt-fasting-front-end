/** @format */

import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {URL} from '../data/constants/baseUrl'
import {userContext} from './UserContext'

export const FastContext = createContext()

export const FastContextProvider = ({children}) => {
	const [fasts, setFasts] = useState([])
	return (
		<FastContext.Provider value={{fasts, setFasts}}>
			{children}
		</FastContext.Provider>
	)
}
