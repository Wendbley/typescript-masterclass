import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
import { Session } from '@supabase/supabase-js'

function RootLayout() {
  const redirect = useNavigate()
  const  {session}   = useLoaderData() as { session: Session }
  

  useEffect(() => {
    
    if (!session) {
      return redirect("/login")
    }
  },[redirect, session])
  

  
	return (
		<>
			<Navbar user={session.user}/>
			<Outlet />
		</>
	)
}

export default RootLayout
