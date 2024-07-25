import { createClient } from '@supabase/supabase-js'



	//const supabaseUrl = 'https://sgqgxjfvhjdbocwfthll.supabase.co'
	
	const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)


export default  supabase 
