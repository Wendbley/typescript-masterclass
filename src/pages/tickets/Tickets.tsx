import { Suspense } from 'react'

import { Link } from 'react-router-dom'
import Loading from '../../components/tickets/Loading'
import TicketList from '../../components/tickets/TicketList'


export default function Tickets() {
	return (
		<main>
			<nav>
				<div>
					<h2>Tickets</h2>
					<p>
						<small>Currently open tickets.</small>
					</p>
				</div>
				<Link
					to='/dashboard/tickets/create'
					className='ml-auto'>
					<button className='btn-primary'>New Ticket</button>
				</Link>
			</nav>
			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>
		</main>
	)
}
