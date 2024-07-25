import { useState } from 'react'
import AuthForm from './AuthForm'
import { useNavigate } from 'react-router-dom'
import { loginWithPassword } from '../../api/api.Client'

// components

export default function Login() {
	const router = useNavigate()
	const [error, setError] = useState<Error>(new Error(''))

	const handleSubmit = async (
		e: React.FormEvent,
		email: string,
		password: string
	) => {
		e.preventDefault()
		setError(new Error(''))

		const { error } = await loginWithPassword(email, password)

		if (error) {
			setError(error)
		}
		if (!error) {
			router('/dashboard')
		}
	}

	return (
		<main>
			<h1 className='text-center mb-8'>Login</h1>
			<AuthForm handleSubmit={handleSubmit} />

			{error.message && <div className='error'>{error.message}</div>}
		</main>
	)
}
