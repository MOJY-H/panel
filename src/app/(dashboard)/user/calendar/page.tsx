import './globals.css'
import Stepper03 from "@/components/steper";
import { FormRhfInput } from '@/components/example-date-picker';

export default function Page() {

  

  return (

    <>
        <div className="h-screen flex flex-col py-5">

          <Stepper03 />

          

          <div className='flex place-content-center pt-10'>
            <FormRhfInput />
          </div>


          <header>  
            {/* <h1 className=" text-4xl text-center pb-10 pt-20 "> Your Program </h1> */}
          </header>
          <main className=" min-h-0 px-2 ">
            {/* <EventCalendar /> */}
          </main>
        </div>
    </>

  )
}



