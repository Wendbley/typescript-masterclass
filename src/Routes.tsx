import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	
} from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import RootLayout from './pages/dashboard/RootLayout'
import Tickets from './pages/tickets/Tickets'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Verify from './pages/auth/Verify'
import AuthLayout from './pages/auth/AuthLayout'
import { getSession } from './api/api.Client'
import CreateTicket from './pages/tickets/CreateTicket'
import { addTicketAction } from './api/api.Actions'
import SingleTicket from './pages/tickets/SingleTicket'
import ProtectedLayout from './pages/auth/ProtectedLayout'
import NotFound from './pages/tickets/NotFound'


export   const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path='/'
				loader={async () => await getSession()}
				element={<AuthLayout />}>
				<Route element={<ProtectedLayout />}>
					<Route
						index
						element={<Login />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/verify'
						element={<Verify />}
					/>
				</Route>
				<Route
					path='/dashboard'
					loader={async () => await getSession()}
					element={<RootLayout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='tickets'
						element={<Tickets />}
					/>
					<Route
						path='tickets/:id'
						loader={async () => await getSession()}
						element={<SingleTicket />}
					/>
					<Route
						path='tickets/create'
						element={<CreateTicket />}
						action={addTicketAction}
					/>
					<Route path='*' element={<NotFound/>}/>
				</Route>
				<Route path='*' element={<Error/>} />
			</Route>
		)
	)


  
