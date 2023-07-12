import React from 'react'
import Button from './Button'
import { send } from '../asserts/index'
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";


const EmailComponent = ({ classes }) => {
  const context = useContext(ModeContext);
  const { mode } = context;

  const personDetails = {
    'first-name': '',
    'last-name': '',
    'email': '',
    'message': ''
  }

  const handleClick = () => {
    console.log(personDetails)
  }

  return (
    <div className={`${classes} ${mode==="dark" ? "text-white":" text-gray-900"}`}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6">
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              onChange={(e) => {
                personDetails[e.target.id] = e.target.value
              }}
              className="block w-full rounded-md border-0 py-1.5  text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6">
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              onChange={(e) => {
                personDetails[e.target.id] = e.target.value
              }}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => {
                personDetails[e.target.id] = e.target.value
              }}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="message" className="block text-sm font-medium leading-6 ">
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows="3"
              onChange={(e) => {
                personDetails[e.target.id] = e.target.value
              }}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Write a message ...</p>
        </div>

        <div className="col-span-full">
          <Button onClick={handleClick}  backgroundColor={mode==="dark"? "#FFB703":"#7B3FBC"}>
            <span className="flex flex-row">
              Send <img className="ml-2" width={20} height={20} src={send} alt="send" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EmailComponent
