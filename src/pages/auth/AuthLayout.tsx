import { Session } from '@supabase/supabase-js'
import { Navigate, Outlet, useLoaderData } from 'react-router-dom'

export default function AuthLayout() {
	const { session: { user} } = useLoaderData() as { session: Session }

	return !user ? <Navigate to='/dashboard' /> : <Outlet />
}
