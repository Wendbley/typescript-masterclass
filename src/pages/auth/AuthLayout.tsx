import { Session } from '@supabase/supabase-js'
import { Navigate, Outlet, useLoaderData, useLocation } from 'react-router-dom'

export default function AuthLayout() {
	const { session: { user} } = useLoaderData() as { session: Session }
	const location = useLocation()

	

	return !user ? <Navigate to='/dashboard' state={{from: location}}/> : <Outlet />
}
