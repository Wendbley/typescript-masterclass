
import supabase from '../middleware/superbase'

export type TicketType = {
    id: string
    title: string
    body: string
    priority: 'low' | 'medium' | 'high'
    user_email: string
    created_at: Date
}
export async function getTickets() {
	const { data, error } = await supabase.from('tickets').select()
	return {data, error}
}

export async function AddTicket(ticket: TicketType) {
    const { data, error } = await supabase.from('tickets').insert(ticket)
    return { data, error }
}

export async function updateTicket(ticket: TicketType) {
    const { data, error } = await supabase
        .from('tickets')
        .update(ticket)
        .eq('user_email', ticket.user_email)
    return { data, error }
}

export async function deleteTicket(id: string) {
    const { data, error } = await supabase.from('tickets').delete().eq('id', id)
    return { data, error }
}

export async function getTicket(id: string) {
    const { data, error } = await supabase.from('tickets').select().eq('id', id).single()
    return { data, error }
}

