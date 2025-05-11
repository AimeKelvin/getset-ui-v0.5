"use client";

import Link from "next/link";
import {
  IconDashboard,
  IconCreditCard,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import * as React from "react";
import { Logo } from "./Navbar";

const data = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/avatars/john-doe.jpg",
  },
  navMain: [
    {
      title: "Adventure Passes",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Payment Transactions",
      url: "/dashboard/payment-transactions",
      icon: IconCreditCard,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/dashboard">
              <Logo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        {/* Main Navigation */}
        <NavMain items={data.navMain}/>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}