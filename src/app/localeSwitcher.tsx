'use client'
import { Locale } from "next-intl";
import { Button } from "../components/ui/button";
import '@/app/globals.css'

type props = {  
    changeLocaleAction: (locale : Locale) => Promise<void>;
}

export default function LocaleSwitcher({changeLocaleAction }: props){
    return (
        <div className="  ">
            {['en','fa'].map((i,num) => (
                <Button key={num} onClick={()=>changeLocaleAction(i as Locale)}>
                    {i.toUpperCase()}
                </Button>   
            ))}
        </div>
    )
}