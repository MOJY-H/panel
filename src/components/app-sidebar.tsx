'use client'
// import { For } from "solid-js"
// import { A } from "@solidjs/router"
import { redirect } from "next/navigation"
import Link from "next/link"
import '@/app/globals.css'
import { useSelector, UseSelector } from "react-redux"
 
import { useAppDispatch, useAppSelector } from '@/lib/hook';

import { checkAdmin, checkUser, checkVendor , checkAdminPass , checkUserPass , checkVendorPass } from "@/lib/features/loginSlice"
import { Calendar, Home, Mail, Search, Settings, ShoppingBasket , User2 , LogOut , History} from "lucide-react"
import {
  Sidebar,
  SidebarContent,   
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
// import { title } from "process"
 
const user_items1 = [
  {
    title: "Home",
    url: "home",
    icon: Home
  },
  {
    title: "Your Basket",
    url: "basket",
    icon: ShoppingBasket
  },
  {
    title: "History",
    url: "basket",
    icon: History
  },
  {
    title: "Notifications",
    url: "notif",
    icon: Mail
  },
  {
    title: "Calendar",
    url: "calendar",
    icon: Calendar
  }
]

const user_items2 =[
    {
        title: "Profile",
        url: "profile",
        icon: User2
    },
    
]
 
const vendor_items1 = [
  {
    title: "Home",
    url: "home",
    icon: Home
  },
  {
    title: "Your Basket",
    url: "basket",
    icon: ShoppingBasket
  },
  {
    title: "History",
    url: "basket",
    icon: History
  },
  {
    title: "Notifications",
    url: "notif",
    icon: Mail
  },
  {
    title: "Calendar",
    url: "calendar",
    icon: Calendar
  }
]

const vendor_items2 =[
    {
        title: "Profile",
        url: "profile",
        icon: User2
    },
    
]

const admin_items1 = [
  {
    title: "Home",
    url: "home",
    icon: Home
  },
  {
    title: "Your Basket",
    url: "basket",
    icon: ShoppingBasket
  },
  {
    title: "History",
    url: "basket",
    icon: History
  },
  {
    title: "Notifications",
    url: "notif",
    icon: Mail
  },
  {
    title: "Calendar",
    url: "calendar",
    icon: Calendar
  }
]

const admin_items2 =[
    {
        title: "Profile",
        url: "profile",
        icon: User2
    }
]


export function AppSidebar() {

  const role1 =useAppSelector(state => state.login.value1);
  const role2 =useAppSelector(state => state.login.value2);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl pt-5 pb-10">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem className="h-full flex flex-col gap-2 " >
                    {/* {
                      (`${role1}${role2}` === 'user') ?
                        
                        {items.map((item , i:number) => (
                            <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                                <SidebarMenuButton >  
                                        <item.icon />
                                        <span>{item.title}</span>
                                </SidebarMenuButton>
                            </div>
                        )) 
                        &&
                        items2.map((item,i:number) => (
                            <div key={i} className="mt-70">
                                <div onClick={() => redirect(`/user/${item.url}`)} >
                                    <SidebarMenuButton>  
                                            <item.icon />
                                            <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </div>
                                <Link href={'/'} className="flex gap-2">
                                    <LogOut />
                                    <span> LogOut </span>
                                </Link> 
                            </div>
                        )) }:
                        (`${role1}${role2}` === 'vendor') ?
                        {items.map((item , i:number) => (
                            <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                                <SidebarMenuButton >  
                                        <item.icon />
                                        <span>{item.title}</span>
                                </SidebarMenuButton>
                            </div>
                        )) 
                        &&
                        items2.map((item,i:number) => (
                            <div key={i} className="mt-70">
                                <div onClick={() => redirect(`/user/${item.url}`)} >
                                    <SidebarMenuButton>  
                                            <item.icon />
                                            <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </div>
                                <Link href={'/'} className="flex gap-2">
                                    <LogOut />
                                    <span> LogOut </span>
                                </Link> 
                            </div>
                        )) } :
                        {items.map((item , i:number) => (
                            <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                                <SidebarMenuButton >  
                                        <item.icon />
                                        <span>{item.title}</span>
                                </SidebarMenuButton>
                            </div>
                        )) 
                        &&
                        items2.map((item,i:number) => (
                            <div key={i} className="mt-70">
                                <div onClick={() => redirect(`/user/${item.url}`)} >
                                    <SidebarMenuButton>  
                                            <item.icon />
                                            <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </div>
                                <Link href={'/'} className="flex gap-2">
                                    <LogOut />
                                    <span> LogOut </span>
                                </Link> 
                            </div>
                        )) }} */}

                      {
                        ( `${role1}${role2}` == 'user' ) ? 
                        user_items1.map((item , i:number) => (
                            <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                                <SidebarMenuButton >  
                                        <item.icon />
                                        <span>{item.title}</span>
                                </SidebarMenuButton>
                            </div>
                        )) 
                        &&
                        user_items2.map((item,i:number) => (
                            <div key={i} className="mt-70">
                                <div onClick={() => redirect(`/user/${item.url}`)} >
                                    <SidebarMenuButton>  
                                            <item.icon />
                                            <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </div>
                                <Link href={'/'} className="flex gap-2">
                                    <LogOut />
                                    <span> LogOut </span>
                                </Link> 
                            </div>
                        )) 
                        : (`${role1}${role2}` =='vendor' ) ? 
                        vendor_items1.map((item , i:number) => (
                            <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                                <SidebarMenuButton >  
                                        <item.icon />
                                        <span>{item.title}</span>
                                </SidebarMenuButton>
                            </div>
                        )) 
                        &&
                        vendor_items2.map((item,i:number) => (
                            <div key={i} className="mt-70">
                                <div onClick={() => redirect(`/user/${item.url}`)} >
                                    <SidebarMenuButton>  
                                            <item.icon />
                                            <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </div>
                                <Link href={'/'} className="flex gap-2">
                                    <LogOut />
                                    <span> LogOut </span>
                                </Link> 
                            </div>
                        ))   
                        : admin_items1.map((item , i:number) => (
                            <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                                <SidebarMenuButton >  
                                        <item.icon />
                                        <span>{item.title}</span>
                                </SidebarMenuButton>
                            </div>
                        )) 
                        &&
                        admin_items2.map((item,i:number) => (
                            <div key={i} className="mt-70">
                                <div onClick={() => redirect(`/user/${item.url}`)} >
                                    <SidebarMenuButton>  
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </div>
                                <Link href={'/'} className="flex gap-2">
                                    <LogOut />
                                    <span> LogOut </span>
                                </Link> 
                            </div>
                        )) 
                      }
                      

                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}