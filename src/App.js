/** @format */
import {Container, Col, Row} from 'react-bootstrap'
import Nav from './components/navbar/Navbar'
import RecentFasts from './components/fasts/recent-fasts/RecentFasts'
import FastsStats from './components/fasts/fasts-stats/FastsStats'
import FastingTotalHours from './components/fasts/fasts-stats/FastingTotalHours'

import {FastTypeContextProvider} from './context/FastTypeContext'

import Spacer from './components/HOC/Spacer'
import Timer from './components/timer/Timer'
import {DateContextProvider} from './context/DateContext'
import {UserContextProvider} from './context/UserContext'
import {FastContextProvider} from './context/FastContext'
import {GraphContextProvider} from './context/GraphDataContext'

function App() {
	return (
		<>
			<UserContextProvider>
				<FastContextProvider>
					<GraphContextProvider>
						<Nav />
						<Spacer height={60} />
						<FastTypeContextProvider>
							<DateContextProvider>
								<Container>
									<Row>
										<Col sm={4}>
											<Timer />
										</Col>
										<Col sm={8}>
											<RecentFasts />
										</Col>
									</Row>
									<Spacer height={60} />
									<Row>
										<Col>
											<FastsStats />
										</Col>
									</Row>
									<Spacer height={60} />
									<FastingTotalHours />
									<Spacer height={60} />
								</Container>
							</DateContextProvider>
						</FastTypeContextProvider>
					</GraphContextProvider>
				</FastContextProvider>
			</UserContextProvider>
		</>
	)
}

export default App
