import React, { useEffect } from 'react'

const Footer = ({ count }) => {
	useEffect(() => {}, [count])
	return (
		<footer>
			<div>
				<ul>
					<li className='count'>
						<i className='fas fa-phone-alt'></i>
						{count > 0 && <div>{count}</div>}
					</li>
					<li>
						<i className='fas fa-user'></i>
					</li>
					<li className='dial'>
						<div>
							<i className='fas fa-ellipsis-v'></i>
							<i className='fas fa-ellipsis-v'></i>
							<i className='fas fa-ellipsis-v'></i>
						</div>
					</li>

					<li>
						<i className='fas fa-cog'></i>
					</li>
					<li>
						<i className='fas fa-circle'></i>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
