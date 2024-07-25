import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTickets, TicketType } from '../../api/api.Tickets'

export default function TicketList() {
	const [tickets, setTickets] = useState<TicketType[]>([])

	useEffect(() => {
		async function fetchTickets() {
			const { data: tickets } = await getTickets()
			setTickets(tickets as TicketType[])
		}
		fetchTickets()
	}, [])

	return (
		<>
			{tickets.map((ticket) => (
				<div
					key={ticket.id}
					className='card my-5'>
					<Link to={`${ticket.id}`}>
						<h3>{ticket.title}</h3>
						<p>{ticket.body.slice(0, 200)}...</p>
						<div className={`pill ${ticket.priority}`}>
							{ticket.priority} priority
						</div>
					</Link>
				</div>
			))}
			{tickets.length === 0 && (
				<p className='text-center'>There are no open tickets, yay!</p>
			)}
		</>
	)
}
