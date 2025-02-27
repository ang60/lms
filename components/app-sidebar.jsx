import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarFooter
} from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Settings2,

} from "lucide-react"



// This is sample data.
const data = {
  
  navMain: [
    {
      title: "Dashboard",
      // url: "#",
      // items: [
      //   {
      //     title: "Installation",
      //     url: "#",
      //   },

      // ],
    },
    {
      title: "Courses",
      // url: "#",
      items: [
        {
          title: "My Courses",
          url: "#",
        },
        {
          title: "Add New Course",
          url: "#",
        },
      ],
    },
    {
      title: "Schedule",
      // url: "#",
      items: [
        {
          title: "Timetable",
          url: "#",
        },
  
      ],
    },
    {
      title: "Quizzes",
      // url: "#",
      items: [
        {
          title: "Assessments",
          url: "#",
        },
        {
          title: "Results",
          url: "#",
        },
        
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Help",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
             <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
>                  <img src="/ilab-logo.png" />
                </div>
                <div className=" gap-0.5 leading-none">
                  {/* <span className="font-semibold" >Digital Learning</span> */}
                  {/* <span className=""></span> */}
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
       <div className="p-4">
        <Card className="bg-purple-100 p-2 rounded-lg text-center">
          <CardContent className="flex flex-col items-center">
            <Image
              src="/sidebar1.png"
              alt="Premium Subscription"
              width={70}
              height={70}
              className="mt-2"
            />
            <h3 className="text-lg font-semibold">Premium Subscription</h3>
            <p className="text-sm text-gray-600">
              Buy Premium and get access to new courses
            </p>
            <button className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-lg text-sm">
              More details
            </button>
          </CardContent>
        </Card>
      </div>
       
      <SidebarRail />
    </Sidebar>
  );
}
