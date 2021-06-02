/** @format */
import {ResponsiveBar} from '@nivo/bar'
import {colors} from '../../../theme/color'
import {convertData} from '../../../hooks/useConvertData'
import {useContext, useEffect, useRef, useState} from 'react'
import {GraphContext} from '../../../context/GraphDataContext'

const MyResponsiveBar = ({fasts}) => {
	// const graphData = useContext(GraphContext)

	return (
		<ResponsiveBar
			data={fasts}
			keys={['duration']}
			indexBy='day'
			margin={{
				top: 50,
				right: 0,
				bottom: 50,
				left: 60,
			}}
			padding={0.8}
			groupMode='grouped'
			valueScale={{type: 'linear'}}
			indexScale={{type: 'band', round: true}}
			colors={[
				colors.grey,
				colors.green,
				colors.grey,
				colors.green,
				colors.grey,
				colors.green,
				colors.peach2,
			]}
			borderRadius={6}
			borderColor={{
				from: 'color',
				modifiers: [['darker', 1.6]],
			}}
			colorBy='index'
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 0,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Day',
				legendPosition: 'middle',
				legendOffset: 40,
			}}
			// maxValue={500}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Hours',
				legendPosition: 'middle',
				legendOffset: -40,
			}}
			enableGridX={false}
			enableGridY={false}
			enableLabel={false}
			legends={[]}
			animate={true}
			motionStiffness={90}
			motionDamping={15}
		/>
	)
}

export default MyResponsiveBar
