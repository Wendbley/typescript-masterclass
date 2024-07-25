import { Form } from 'react-router-dom'
import SubmitButton from '../../components/SubmitButton'


export default function CreateForm() {
	return (
		<Form
			method='post'
			action='/dashboard/tickets/create'
			className='w-1/2'>
			<label>
				<span>Title:</span>
				<input
					required
					type='text'
					name='title'
				/>
			</label>
			<label>
				<span>Body:</span>
				<textarea
					required
					name='body'
				/>
			</label>
			<label>
				<span>Priority:</span>
				<select name='priority'>
					<option value='low'>Low Priority</option>
					<option value='medium'>Medium Priority</option>
					<option value='high'>High Priority</option>
				</select>
			</label>
			<SubmitButton />
		</Form>
	)
}
