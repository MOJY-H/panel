import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import './globals.css'

import data from "./data.json";

export function CardImage() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default function Page() {
  
  

  return (

    
        <section>
          <h3 className=" px-6 pt-6 pb-2 text-3xl" > What Did you Spend </h3>
          <div className="grid grid-cols-3 px-6"> 
            {
              data.map((data)=>

                <div key={data.id} className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{data.header}</h5>
                    <p className="text-body"> {data.reviewer} </p>
                    <span className="text-body"> {data.status} </span>
                </div>

              )
            }
          </div>

          <h3 className=" px-6 pt-6 pb-2 text-3xl"> basket shop </h3>

          <section className="grid grid-cols-3 gap-2 px-6 pb-6">
            <CardImage />
            <CardImage />
            <CardImage />
          </section>

        </section>
    

  )
}



