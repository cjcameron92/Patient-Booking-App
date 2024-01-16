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
            href: "/schedule"
        },
        {
            title: "Refferals",
            icon: "referrals",
            href: "/refferals"
        },
        {
            title: "Payments",
            icon: "billing",
            href: "/billings"
        },
        {
            title: "Messages",
            icon: "messages",
            href: "/messages"
        }
    ]
}