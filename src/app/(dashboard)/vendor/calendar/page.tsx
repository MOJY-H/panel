import './globals.css'


import EventCalendar from "@/components/EventCalendar";
import Stepper03 from "@/components/steper";

export default function Page() {

  

  return (

    <>
        <div className="h-screen flex flex-col">
          <header >
            <h1 className=" text-4xl text-center pb-10 pt-10 "> Your Program </h1>
          </header>
          <main className=" min-h-0 px-2 ">
            <EventCalendar />
          </main>
        </div>
    </>

  )
}



