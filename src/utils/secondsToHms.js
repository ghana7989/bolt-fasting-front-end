/** @format */

export function secondsToHms(timeInSeconds) {
	timeInSeconds = Number(timeInSeconds)
	let h = Math.floor(timeInSeconds / 3600)
	let m = Math.floor((timeInSeconds % 3600) / 60)
	let s = Math.floor((timeInSeconds % 3600) % 60)

	let hours = h > 0 ? h : 0
	let minutes = m > 0 ? m : 0
	let seconds = s > 0 ? s : 0

	return {hours, minutes, seconds}
}
