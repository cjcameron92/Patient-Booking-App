import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
    mainNav: [
        

    ],
    sidebarNav: [
        {
            title: "Dashboard",
            icon: "dashboard",
            href: "/dashboard"
        },
        {
            title: "Schedule",
            icon: "schedule",
            href: "/dashboard/schedule"
        },
        {
            title: "Refferals",
            icon: "referrals",
            href: "/refferals"
        },
        {
            title: "Percriptions",
            icon: "billing",
            href: "/billings"
        },
        {
            title: "Chat",
            icon: "messages",
            href: "/messages"
        }
    ]
}