import * as React from "react"
import Link from "next/link"
import { Home } from "lucide-react"
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      isActive: true, // Optional: Highlight the Home link
      items: [], // Ensures consistency with other sections
    },
    {
      title: "Platforms",
      url: "#",
      items: [
        {
          title: "Playstation",
          url: "/platform/playstation",
        },
        {
          title: "Nintendo",
          url: "/platform/nintendo",
          // isActive: true,
        },
        {
          title: "Xbox",
          url: "/platform/xbox",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="h-screen flex flex-col">
  <SidebarHeader>
    <SidebarMenu>
      {/* Render the Home link at the top */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/" className="flex items-center gap-2">
          <Home /> Home
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>

  </SidebarHeader>
  
  <SidebarContent className="flex-1 overflow-y-auto">

    {/* Render the rest of the navigation */}
    {data.navMain.map((item) => (
      item.items?.length > 0 ? ( // Only render groups with sub-items
        <SidebarGroup key={item.title}>
          <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.items.map((subItem) => (
                <SidebarMenuItem key={subItem.title}>
                  <SidebarMenuButton asChild>
                    <a href={subItem.url}>
                    <Image src={`/icons/${subItem.title}.svg`} alt={`${subItem.title} icon`} width={20} height={20} className="inline" />
                    {subItem.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ) : null
    ))}
  </SidebarContent>

  <SidebarRail />
</Sidebar>
  )
}
