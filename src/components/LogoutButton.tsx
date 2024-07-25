import { useNavigate } from 'react-router-dom'
import { logout } from '../api/api.Client'

function LogoutButton() {
	const router = useNavigate()

	const handleLogout = async () => {
		const { error } = await logout()

		if (!error) {
			router('/login')
		}
	}
	return (
		<button
			className='btn-secondary'
			onClick={handleLogout}>
			Logout
		</button>
	)
}

export default LogoutButton
