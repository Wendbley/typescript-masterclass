import { useState } from 'react'
// import { deleteTicket } from '../actions'

// icons & UI
import { TiDelete } from 'react-icons/ti'
import { deleteTicketAction } from '../../api/api.Actions'

export default function DeleteIcon({ userId }: { userId: string }) {
	const [isPending, setIsPending] = useState(false)

	const handleClick = () => {
		setIsPending(true)
		deleteTicketAction(userId).then((x) => console.log(x))
		setIsPending(true)
	}

	return (
		<button
			className='btn-primary'
			onClick={() => handleClick}
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
