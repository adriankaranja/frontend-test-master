import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Call from './Call'
import Footer from './Footer'

const App = () => {
	const [callsList, setCallsList] = useState([])
	const [archiveList, setArchiveList] = useState([])
	const [showArchive, setShowArchive] = useState(false)
	const [archive, setArchive] = useState(false)
	async function getCalls() {
		const { data } = await axios.get(
			'https://aircall-job.herokuapp.com/activities'
		)
		console.log(data)
		let resdata = data
		let archive = resdata.filter((call) => call.is_archived === true)
		let activity = resdata.filter((call) => call.is_archived === false)
		setCallsList(activity)
		setArchiveList(archive)
	}
	useEffect(() => {
		getCalls()
	}, [archive])

	async function handleClick(id, archived) {
		await axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {
			is_archived: !archived,
		})
		setArchive(!archive)
	}

	async function reset() {
		await axios.get('https://aircall-job.herokuapp.com/reset')
		setArchive(!archive)
	}
	return (
		<div className='container'>
			<Header />
			<div className='container-view'>
				<div className='buttons'>
					<button
						className={!showArchive ? 'bg-blue' : ''}
						onClick={() => setShowArchive(false)}
					>
						Activity Feed
					</button>
					<button
						className={showArchive ? 'bg-blue' : ''}
						onClick={() => setShowArchive(true)}
					>
						Archived Calls
					</button>
				</div>
				<div className='reset'>
					{showArchive ? (
						<p>Click on a call to unarchive the call</p>
					) : (
						<p>Click on a call to archive the call</p>
					)}
					<button onClick={reset}>Reset State</button>
				</div>

				<ul>
					{!showArchive
						? callsList &&
						  callsList.map((call) => (
								<li
									key={call.id}
									onClick={() => handleClick(call.id, call.is_archived)}
								>
									<Call callData={call} />
								</li>
						  ))
						: archiveList &&
						  archiveList.map((call) => (
								<li
									key={call.id}
									onClick={() => handleClick(call.id, call.is_archived)}
								>
									<Call callData={call} />
								</li>
						  ))}
				</ul>
				<div></div>
			</div>
			<Footer count={callsList.length} />
		</div>
	)
}

export default App
