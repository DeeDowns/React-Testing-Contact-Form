import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm'

test('Adds user object to page when form is filled out and submitted', () => {
    //render Contact Form
    render(<ContactForm /> )
    
    //query for the different inputs
    const firstNameInput = screen.findByLabelText(/first name/i)
    const lastNameInput = screen.findByLabelText(/last name/i)
    const emailInput = screen.findByLabelText(/email/i)
    const messageInput = screen.findByLabelText(/message/i)
})