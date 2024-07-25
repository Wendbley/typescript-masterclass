// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import { Session } from '@supabase/supabase-js'
import { useEffect, useRef } from 'react'
import { Link, Outlet, useLoaderData, useNavigate } from 'react-router-dom'

export default function AuthLayout() {
	const navigate = useNavigate()
	const { session } = useLoaderData() as { session: Session }

	const _session = useRef(session).current // session (to avoid infinite loop)
	useEffect(() => {
		if (_session) {
			navigate('/dashboard')
		}
	}, [_session, navigate])
	

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
