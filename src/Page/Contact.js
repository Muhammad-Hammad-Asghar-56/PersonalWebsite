import React, { useEffect } from 'react'
import InfoCard from '../Component/InfoCard'
import EmailComponent from '../Component/EmailComponent'
import { addr, mail, phone } from '../asserts'
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";



const Contact = () => {
  const context = useContext(ModeContext);
  const { mode } = context;
  const darkMode = { background: "#0D1B2A", color: "white" };

  return (
    <div style={mode === "dark" ? darkMode : {}}>
      <div className="text-center py-10">
        <h1 className={`${mode==="dark"? "text-white":"text-black"} text-opacity-50 text-xl`}>
        Keep in Touch
        </h1>
        <h1 className="font-bold text-3xl">Contact</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch">
        <div className="flex-1 md:mr-4 mb-4 md:mb-0">
          <InfoCard
            classes="mx-auto"
            title={<img width={20} height={20} src={phone} alt="Phone" />}
            details={[
              { 'Call': "+92 319 4289120" },
              { 'Whatsapp': "+92 306 4889750" }
            ]}
          />
          <InfoCard
            classes="mx-auto mt-2"
            title={<img width={20} height={20} src={addr} alt="Address" />}
            details={[
              { "Address # 1": "146-A LDA Singhpura, LHR" }
            ]}
          />
          <InfoCard
            classes="mx-auto mt-2"
            title={<img width={20} height={20} src={mail} alt="Mail" />}
            details={[
              { 'Mail # 1': "hammadasgharm@gmail.com" },
              { 'Mail # 2': "2021cs56@student.uet.edu.pk" }
            ]}
          />
        </div>
        <div className="flex-1">
          <EmailComponent classes="pr-10 sm: px-2" />
        </div>
      </div>
    </div>
  )
}

export default Contact


