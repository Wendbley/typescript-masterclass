import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<main className='text-center'>
				<h2 className='text-3xl'>There was a problem.</h2>
				<p>We could not find the page you were looking for.</p>
				<p>
					Go back to the <Link to='/'>dashboard</Link>.
				</p>
			</main>
		</div>
	)
}
