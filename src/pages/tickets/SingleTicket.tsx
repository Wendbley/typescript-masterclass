// components
import { useLoaderData, useParams } from 'react-router-dom'
import { getTicket, TicketType } from '../../api/api.Tickets'
import { useState, useEffect } from 'react'
import DeleteIcon from '../../components/tickets/DeleteIcon'
import { Session } from '@supabase/supabase-js'

export const dynamicParams = true

export default function TicketDetails() {
	const { id } = useParams()
	const [ticket, setTicket] = useState<TicketType>()
	const {session} = useLoaderData() as { session: Session }


	useEffect(() => {
		async function fetchTickets() {
			const { data: ticket } = await getTicket(id!)
			if (ticket) {
				setTicket(ticket)
			}
		}
		fetchTickets()
	}, [id])


	return (
		<main>
			<nav>
				<h2>Ticket Details</h2>
				<div className='ml-auto'>
					{session.user.email === ticket?.user_email && ticket?.id && (
						<DeleteIcon userId={ticket?.id } />
					)}
				</div>
			</nav>
			<div className='card'>
				<h3>{ticket?.title}</h3>
				<small>Created by {ticket?.user_email}</small>
				<p>{ticket?.body}</p>
				<div className={`pill ${ticket?.priority}`}>
					{ticket?.priority} priority
				</div>
			</div>
		</main>
	)
}
