/** @format */

import {format} from 'date-fns'

export const formatDate = date => {
	return format(date, "dd-MMM', 'HH:mm a")
}
