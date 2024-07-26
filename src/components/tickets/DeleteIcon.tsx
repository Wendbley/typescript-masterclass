import { useTransition } from 'react'
// import { deleteTicket } from '../actions'

// icons & UI
import { TiDelete } from 'react-icons/ti'
import { deleteTicketAction } from '../../api/api.Actions'

export default function DeleteIcon({ userId }: { userId: string }) {
	const [isPending, startTransition] = useTransition()

	return (
		<button
			className='btn-primary'
			onClick={() =>
				startTransition(() => {
					deleteTicketAction(userId)
				})
			}
			disabled={isPending}>
			{isPending && (
				<>
					<TiDelete />
					Deleting....
				</>
			)}
			{!isPending && (
				<>
					<TiDelete />
					Delete Ticket
				</>
			)}
		</button>
	)
}
