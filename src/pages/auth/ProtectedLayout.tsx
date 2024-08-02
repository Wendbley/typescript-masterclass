import { Link, Outlet } from 'react-router-dom'

function ProtectedLayout() {
	
	return (
		<>
			<nav>
				<Link to='/'>
					<h1>Dojo Helpdesk</h1>
				</Link>

				<Link to='/register'>Sign up</Link>
				<Link to='/login'>Login</Link>
			</nav>
			<Outlet />
		</>
	)
}

export default ProtectedLayout
