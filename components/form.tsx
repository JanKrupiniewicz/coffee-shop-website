"use client";
import { useState } from "react";
import { useAnimate } from "framer-motion";
import { sendContactForm } from "@/lib/api";
import {
  validateName,
  validateEmail,
  validateMessage,
  validatePhone,
} from "@/util/validation";

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface DidEdit {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [didEdit, setDidEdit] = useState<DidEdit>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });

  const [scope, animate] = useAnimate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const fieldName = e.target.name;
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [fieldName]: true,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (
      !validateName(values.firstName) ||
      !validateName(values.lastName) ||
      !validateEmail(values.email) ||
      !validatePhone(values.phone) ||
      !validateMessage(values.message)
    ) {
      animate(
        "form",
        {
          x: [-10, 10, 0],
        },
        {
          type: "spring",
          stiffness: 500,
          duration: 0.7,
        }
      );
      return;
    }
    sendContactForm(values);
  };

  const firstNameIsValid =
    !didEdit.firstName ||
    (values.firstName.length > 0 && validateName(values.firstName));
  const lastNameIsValid =
    !didEdit.lastName ||
    (values.lastName.length > 0 && validateName(values.lastName));
  const emailIsValid =
    !didEdit.email || (values.email.length > 0 && validateEmail(values.email));
  const phoneIsValid =
    !didEdit.phone || (values.phone.length > 0 && validatePhone(values.phone));
  const messageIsValid =
    !didEdit.message ||
    (values.message.length > 0 && validateMessage(values.message));

  const invalidInputCSS = "bg-red-50";
  return (
    <div className="flex justify-center items-center" ref={scope}>
      <form className="w-full md:w-3/4" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <div className="text-sm lato flex justify-between w-full">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
              className={`p-5 bg-gray-100 border border-gray-600 w-1/2 ${
                firstNameIsValid ? "" : invalidInputCSS
              }`}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onBlur={handleBlur}
              onChange={handleChange}
              className={`p-5 bg-gray-100 border border-gray-600 w-1/2 ${
                lastNameIsValid ? "" : invalidInputCSS
              }`}
            />
          </div>
          <div className="text-sm lato flex justify-between w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className={`p-5 bg-gray-100 border border-gray-600 w-1/2 ${
                emailIsValid ? "" : invalidInputCSS
              }`}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={values.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              className={`p-5 bg-gray-100 border-r border-b border-gray-600 w-1/2 ${
                phoneIsValid ? "" : invalidInputCSS
              }`}
            />
          </div>

          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Type your message here..."
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`p-5 bg-gray-100 text-sm border-l border-r border-b border-gray-600 w-full ${
              messageIsValid ? "" : invalidInputCSS
            }`}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-grey-500 w-1/3 border-b border-l border-r border-gray-600 lato text-md text-gray-800 p-5 hover:bg-stone-500 hover:text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
