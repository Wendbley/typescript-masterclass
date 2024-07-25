import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from './AuthForm'
import { register } from '../../api/api.Client'

// components

export default function Register() {
	const router = useNavigate()
	const [error, setError] = useState<Error>(new Error())

	const handleSubmit = async (
		e: React.FormEvent,
		email: string,
		password: string
	) => {
		e.preventDefault()
		setError(new Error())

		const { error } = await register(email, password)

		//   password,
		//   options: {
		//     emailRedirectTo: `${location.origin}/api/auth/callback`
		//   }
		// })
		if (error) {
			setError(error)
		}
		if (!error) {
			router('/verify')
		}
	}

	return (
		<main>
			<h1 className='text-center mb-8'>Sign up</h1>

			<AuthForm handleSubmit={handleSubmit} />

			{error.message && <div className='error'>{error.message}</div>}
		</main>
	)
}
