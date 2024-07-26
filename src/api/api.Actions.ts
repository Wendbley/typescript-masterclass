import { redirect } from "react-router-dom"
import { getSession } from "./api.Client"
import { AddTicket, deleteTicket, TicketType } from "./api.Tickets"

export async function addTicketAction({request}: { request: Request }) {
    const formData = await request.formData();
      const ticket = Object.fromEntries(formData)
      
      // get current user session
      const { session } = await getSession()

      // check if user is logged in
      if (!session) {
          throw new Error('You must be logged in.')
      }
      // insert the data
      if (session) {
          const { error } = await AddTicket({
              ...ticket,
              user_email: session.user.email,
          } as TicketType)
  
          if (error) {
            console.log(error.message)
              throw new Error('Could not add the new ticket.')
          }
      }
      
      return redirect('/dashboard/tickets')
    }
     

    export async function deleteTicketAction(id: string) {
        const { error } = await deleteTicket(id)
       
        if (error) {
          throw new Error('Could not delete the ticket.')
        }
        redirect('/dashboard/tickets')
      } 