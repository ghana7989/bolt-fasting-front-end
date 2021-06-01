/** @format */

// Modal.js
import {useEffect} from 'react'
import {createPortal} from 'react-dom'
// We get hold of the div with the id modal that we have created in index.html
const modalRoot = document.getElementById('modal')

const Modal = ({children}) => {
	// We create an element div for this modal
	const element = document.createElement('div')
	// We append the created div to the div#modal
	useEffect(() => {
		modalRoot.appendChild(element)
		/**
		 * We remove the created div when this Modal Component is unmounted
		 * Used to clean up the memory to avoid memory leak
		 */
		return () => {
			modalRoot.removeChild(element)
		}
	}, [])
	return createPortal(children, element)
}
export default Modal
