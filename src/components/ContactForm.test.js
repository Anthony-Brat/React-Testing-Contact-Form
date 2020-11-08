import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "../components/ContactForm";

test("renders ContactForm without crashing", () => {
    const {getByLabelText} = render(<ContactForm />)
  });

  
test("show that form submits", () => {
    const {getByLabelText, getByText} = render(<ContactForm/>)
    
    const firstNameInput = getByLabelText(/First Name*/i)
    const lastNameInput = getByLabelText(/Last Name*/i)
    const emailInput =  getByText(/email/i)
    const message = getByLabelText(/message/i)

})

 test('Changing inputs', () => {
    const {getByLabelText, getByTestId} = render(<ContactForm/>)


    const firstNameInput = getByLabelText(/First Name*/)
    const emailInput =  getByLabelText(/email/i)
    
    fireEvent.change(firstNameInput, {target: { value: "Tony" },});
    
    expect(firstNameInput.value).toBe("Tony");


    fireEvent.change(emailInput, {target: { value: "tonybrat@email.com" },});

    expect(emailInput.value).toBe("tonybrat@email.com");

 })