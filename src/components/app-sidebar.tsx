'use client'
import { redirect } from "next/navigation"
import '@/app/(dashboard)/globals.css'
import { Calendar, Home, Mail, ShoppingBasket, Package, User2, UserCheck, LogOut, History, MessageSquare} from "lucide-react"
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

// import { Locale } from "next-intl"
// import { cookies } from "next/headers"
// import localeSwitcher from "./localeSwitcher"
 
const items1 = [
  {
    user : [

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
        url: "history",
        icon: History
      },
      {
        title: "Notifications",
        url: "notif",
        icon: Mail
      },
      {
        title: "Track Shipment",
        url: "calendar",
        icon: Calendar
      }

    ],
    vendor : [
      {
        title: "Home",
        url: "home",
        icon: Home
      },
      {
        title: "Sell History",
        url: "sell_history",
        icon: History
      },
      {
        title: "Calendar",  
        url: "calendar",
        icon: Calendar
      },
      {
        title: "Comments",
        url: "notif",
        icon: Mail
      }
    ],
    admin : [
      {
        title: "Home",
        url: "home",
        icon: Home
      },
      {
        title: "Shops",
        url: "shop",
        icon: ShoppingBasket
      },
      {
        title: "Product Status",
        url: "product_status",
        icon: Package
      },
      {
        title: "User",
        url: "users",
        icon: UserCheck
      },
      {
        title: "Support Notification",
        url: "support-notification",
        icon: MessageSquare
      }
    ]
  }
]

const items2 =[
  {
    user : [
      {
        title: "profile",
        url: "profile",
        icon: User2
      }
    ],
    vendor : [
      {
        title: "profile",
        url: "profile",
        icon: User2
      }
    ],
    admin : [
      {
        title: "profile",
        url: "profile",
        icon: User2
      }
    ]
  }
]

export function AppSidebar() {

  const role1 = localStorage.getItem('val1');
  const role2 = localStorage.getItem('val2');
  const role:string = `${role1}${role2}`;
  console.log(` test `,role);
  
  function handleClick(){
    localStorage.clear();
    redirect('/');
  }
  



  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl pt-5 pb-10">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem className="h-full flex flex-col gap-2 " >
                        
                        {
                          (role == 'user') ? (

                            items1.map((items) =>
                              items.user.map((item,i:number) => 
                                <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                                  <SidebarMenuButton className="cursor-pointer">
                                    <item.icon />
                                    <span>{item.title}</span>
                                  </SidebarMenuButton>
                                </div>
                            )) 

                          ) : (role == 'vendor') ? (
                            
                            items1.map((items) =>
                              items.vendor.map((item,i:number) => 
                                <div onClick={() => redirect(`/vendor/${item.url}`)} key={i}>
                                  <SidebarMenuButton className="cursor-pointer">
                                    <item.icon />
                                    <span>{item.title}</span>
                                  </SidebarMenuButton>
                                </div>
                          )) 

                          ) : (
                            items1.map((items) =>
                              items.admin.map((item,i:number) => 
                                <div onClick={() => redirect(`/admin/${item.url}`)} key={i}>
                                  <SidebarMenuButton className="cursor-pointer">
                                    <item.icon />
                                    <span>{item.title}</span>
                                  </SidebarMenuButton>
                                </div>
                            )) 
                          )
                        }
                        {
                          (role == 'user') ? (

                            items2.map((items) => 
                              items.user.map((item,i:number) => 
                                <div key={i} className="mt-70">
                                  <div onClick={() => redirect(`/user/${item.url}`)} >
                                      <SidebarMenuButton className="cursor-pointer">
                                        <item.icon />
                                        <span>{item.title}</span>
                                      </SidebarMenuButton>
                                  </div>
                                  <div onClick={handleClick} className=" cursor-pointer hover:bg-gray-100 rounded-xl flex gap-2 pl-2 py-1 my-3">
                                      <LogOut />
                                      <span> LogOut </span>
                                  </div> 
                                </div>
                            ))

                          ) : (role == 'vendor') ? (
                            items2.map((items) => 
                              items.vendor.map((item,i:number) => 
                                <div key={i} className="mt-70">
                                  <div onClick={() => redirect(`/vendor/${item.url}`)} >
                                      <SidebarMenuButton className="cursor-pointer">  
                                        <item.icon />
                                        <span>{item.title}</span>
                                      </SidebarMenuButton>
                                  </div>
                                  <div onClick={handleClick} className=" cursor-pointer hover:bg-gray-100 rounded-xl flex gap-2 pl-2 py-1 my-3">
                                      <LogOut />
                                      <span> LogOut </span>
                                  </div> 
                                </div>
                            ))
                          ) : (
                            items2.map((items) => 
                              items.admin.map((item,i:number) => 
                                <div key={i} className="mt-70">
                                  <div onClick={() => redirect(`/admin/${item.url}`)} >
                                      <SidebarMenuButton className="cursor-pointer">   
                                        <item.icon />
                                        <span>{item.title}</span>
                                      </SidebarMenuButton>
                                  </div>
                                  <div onClick={handleClick} className=" cursor-pointer hover:bg-gray-100 rounded-1xl flex gap-2 pl-2 py-2 my-3">
                                      <LogOut />
                                      <span> LogOut </span>
                                  </div> 
                                </div>
                            ))
                          )

                        }

                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}