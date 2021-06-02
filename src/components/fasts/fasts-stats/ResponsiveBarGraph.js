/** @format */
import {ResponsiveBar} from '@nivo/bar'
import {useContext} from 'react'
import {GraphContext} from '../../../context/GraphDataContext'
import {convertData} from '../../../hooks/useConvertData'
import {colors} from '../../../theme/color'

const ResponsiveBarGraph = ({fasts}) => {
	const graphData = fasts

	return (
		<ResponsiveBar
			data={graphData}
			keys={['duration']}
			indexBy='day'
			margin={{
				top: 50,
				right: 0,
				bottom: 50,
				left: 60,
			}}
			padding={0.9}
			groupMode='grouped'
			valueScale={{type: 'linear'}}
			indexScale={{type: 'band', round: true}}
			colors={[colors.violet]}
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

export default ResponsiveBarGraph
