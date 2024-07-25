import supabase from '../middleware/superbase'

export const loginWithPassword = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})
	return { data, error }
}
export const logout = async () => {
	const { error } = await supabase.auth.signOut()
	return { error }
}
export const loginWithOTP = async (email: string) => {
	const { data, error } = await supabase.auth.signInWithOtp({
		email,
	})
	return { data, error }
}
export const register = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
	})
	return { data, error }
}

export const getSession = async () => {
	const {
		data: { session },
		error,
	} = await supabase.auth.getSession()
	return { session, error }
}
