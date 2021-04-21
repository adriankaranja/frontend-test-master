import React from 'react'

const Card = ({
	callData: {
		call_type,
		created_at,
		direction,
		duration,
		from,
		is_archived,
		to,
		via,
	},
}) => {
	const createdAt = created_at.substring(11, 16)
	const time = parseInt(createdAt.substring(0, 2), 10)
	let source
	if (direction === 'outbound') {
		if (call_type === 'missed') source = './images/missedcall.png'
		else source = './images/outgoing.png'
	} else {
		if (call_type === 'missed') source = './images/incoming-missed.png'
		else source = './images/incoming.png'
	}
	return (
		<div className='call'>
			<div>
				<img src={source} />
			</div>
			<div className='call-column'>
				<p>
					{!to && 'call from '}
					{from}
				</p>
				{to && <p className='to'>tried to call {to}</p>}
			</div>
			<div className='time'>
				: {createdAt}
				<span>{time > 12 ? ' pm' : ' am'}</span>
			</div>
		</div>
	)
}

export default Card
