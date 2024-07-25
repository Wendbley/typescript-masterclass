


export default function SubmitButton() {

    const pending = false

	return (
		<button
			disabled={pending}
			className='btn-primary'>
			{pending && <span>Submitting...</span>}
			{!pending && <span>Submit</span>}
		</button>
	)
}
