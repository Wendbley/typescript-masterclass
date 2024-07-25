import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import Logo from '/tickets.jpg'
import { User } from '@supabase/supabase-js'


function Navbar({user}: { user: User}) {
    
	return (
		<nav>
			<img
				src={Logo}
				alt='Dojo Helpdesk logo'
				width={70}
			/>
			<h1>Dojo Helpdesk</h1>
			<Link to='/dashboard'>Dashboard</Link>
			<Link
				to='tickets'
				className='mr-auto'>
				Tickets
			</Link>
			{user && <span>Hello, {user.email}</span>}
			<LogoutButton />
		</nav>
	)
}

export default Navbar
