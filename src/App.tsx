import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
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


function App() {
	const user = null
	console.log(user)

	const router = createBrowserRouter([
		{
			path: '/',
			element: <AuthLayout />,
			loader: async () => await getSession(),
			children: [
				{ index: true, element: <Login /> },
				{ path: '/login', element: <Login /> },
				{ path: '/register', element: <Register /> },
				{ path: '/verify', element: <Verify /> },
			],
		},
		{
			path: '/dashboard',
			element: <RootLayout />,
			loader: async () => await getSession(),
			children: [
				{ index: true, element: <Home /> },
				{ path: 'tickets', element: <Tickets /> },
				{ path: 'tickets/:id', element: <SingleTicket />, loader: async () => await getSession(),},
        { path: 'tickets/create', element: <CreateTicket />, action: addTicketAction },
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
