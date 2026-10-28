'use client'
// import { For } from "solid-js"
// import { A } from "@solidjs/router"
import { redirect } from "next/navigation"
import Link from "next/link"
import '@/app/globals.css'
// import { useSelector, UseSelector } from "react-redux"
 
import { useAppDispatch, useAppSelector } from '@/lib/hook';
import { Calendar, Home, Mail, Search, Settings, ShoppingBasket , Package , User2 , UserCheck , LogOut , History , MessageSquare} from "lucide-react"
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
        url: "users",
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

  const role1 =useAppSelector(state => state.login.value1);
  const role2 =useAppSelector(state => state.login.value2);
  console.log(`${role1}`);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl pt-5 pb-10">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem className="h-full flex flex-col gap-2 " >
                      
                        
                        {items1.map((items) => 
                          items.admin.map((item,i:number) => 
                            <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                              <SidebarMenuButton > 
                                <item.icon />
                                <span>{item.title}</span>
                              </SidebarMenuButton>
                            </div>
                          )) 
                        }
                          
                        {items2.map((items) => 
                            items.admin.map((item,i:number) => 
                              <div key={i} className="mt-70">
                                <div onClick={() => redirect(`/user/${item.url}`)} >
                                    <SidebarMenuButton>  
                                      <item.icon />
                                      <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </div>
                                <Link href={'/'} className="flex gap-2 pl-2 pt-5">
                                    <LogOut />
                                    <span> LogOut </span>
                                </Link> 
                            </div>
                            ))
                        }
                        
                        {/* // ( `${role1}${role2}` == 'user' ) ? 
                        // (user_items1.map(( item , i:number ) => (
                        //     <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                        //       <SidebarMenuButton > 
                        //         <item.icon />
                        //         <span>{item.title}</span>
                        //       </SidebarMenuButton>
                        //     </div>
                        // )) 
                        // &&
                        // user_items2.map((item,i:number) => (
                        //     <div key={i} className="mt-70">
                        //         <div onClick={() => redirect(`/user/${item.url}`)} >
                        //             <SidebarMenuButton>  
                        //               <item.icon />
                        //               <span>{item.title}</span>
                        //             </SidebarMenuButton>
                        //         </div>
                        //         <Link href={'/'} className="flex gap-2">
                        //             <LogOut />
                        //             <span> LogOut </span>
                        //         </Link> 
                        //     </div>
                        // )) )
                        // : ((`${role1}${role2}` =='vendor' ) ? 
                        // (vendor_items1.map((item , i:number) => (
                        //     <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                        //         <SidebarMenuButton >  
                        //           <item.icon />
                        //           <span>{item.title}</span>
                        //         </SidebarMenuButton>
                        //     </div>
                        // )) 
                        // &&
                        // vendor_items2.map((item,i:number) => (
                        //     <div key={i} className="mt-70">
                        //         <div onClick={() => redirect(`/user/${item.url}`)} >
                        //             <SidebarMenuButton>  
                        //               <item.icon />
                        //               <span>{item.title}</span>
                        //             </SidebarMenuButton>
                        //         </div>
                        //         <Link href={'/'} className="flex gap-2">
                        //             <LogOut />
                        //             <span> LogOut </span>
                        //         </Link> 
                        //     </div>
                        // ))  ) 
                        // : (admin_items1.map((item , i:number) => (
                        //     <div onClick={() => redirect(`/user/${item.url}`)} key={i}>
                        //         <SidebarMenuButton >  
                        //                 <item.icon />
                        //                 <span>{item.title}</span>
                        //         </SidebarMenuButton>
                        //     </div>
                        // )) 
                        // &&
                        // admin_items2.map((item,i:number) => (
                        //     <div key={i} className="mt-70">
                        //         <div onClick={() => redirect(`/user/${item.url}`)} >
                        //             <SidebarMenuButton>  
                        //                 <item.icon />
                        //                 <span>{item.title}</span>
                        //             </SidebarMenuButton>
                        //         </div>
                        //         <Link href={'/'} className="flex gap-2">
                        //             <LogOut />
                        //             <span> LogOut </span>
                        //         </Link> 
                        //     </div>
                        // )) ) ) */}
                      
                      

                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}