import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm'

test('Adds user object to page when form is filled out and submitted', async () => {
    //render Contact Form
    render(<ContactForm /> )
    
    //query for the different inputs
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

    //fill out inputs
    fireEvent.change(firstNameInput, { target: { value: 'Dee' } })
    fireEvent.change(lastNameInput, { target: { value: 'Downs' } })
    fireEvent.change(emailInput, { target: { value: 'someemail@email.com' } })
    fireEvent.change(messageInput, { target: { value: 'a message' } })

    //query for the submit button
    const submitButton = screen.getByRole('button', { name: 'Submit'})

    //click submit button 
    fireEvent.click(submitButton)

    //make asertions
    expect(await screen.findByText(/dee/i)).toBeInTheDocument()
    expect(await screen.findByText(/downs/i)).toBeInTheDocument()
    expect(await screen.findByText(/someemail@email.com/i)).toBeInTheDocument()
    expect(await screen.findByText(/a message/i)).toBeInTheDocument()

})


// test('errors load to the screen when form is filled out incorrectly', () => {
//     //render ContactForm 
//     render(<ContactForm />)

//     const firstNameInput = screen.getByLabelText(/first name/i)

//     fireEvent.change(firstNameInput, { target: { value: '' } })




// })
