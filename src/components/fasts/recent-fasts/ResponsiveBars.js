/** @format */
import {ResponsiveBar} from '@nivo/bar'
import {colors} from '../../../theme/color'

const MyResponsiveBar = ({
	data = [
		{
			week: 'Sunday',
			hours: 15,
			hoursColor: colors.green,
		},
		{
			week: 'Monday',
			hours: 7,
			hoursColor: colors.grey,
		},
		{
			week: 'Tuesday',
			hours: 7,
			hoursColor: colors.grey,
		},
		{
			week: 'Wednesday',
			hours: 16,
			hoursColor: colors.grey,
		},
		{
			week: 'Thursday',
			hours: 9,
			hoursColor: colors.blueLight2,
		},
		{
			week: 'Friday',
			hours: 10,
			hoursColor: colors.grey,
		},
		{
			week: 'Saturday',
			hours: 4,
			hoursColor: colors.green,
		},
	],
}) => (
	<ResponsiveBar
		data={data}
		keys={['hours']}
		indexBy='week'
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
			tickSize:0,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'Day',
			legendPosition: 'middle',
			legendOffset: 40,
		}}
		maxValue={16}
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

export default MyResponsiveBar
