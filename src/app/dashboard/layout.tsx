import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/nav";
import { BellDot, HelpCircle, Search } from "lucide-react";
import { UserNav } from "./components/user-nav";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // get user

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <h1 className="font-bold text-xl">Docere Health</h1>
          <div className="flex items-center space-x-6">
            <HelpCircle />
            <BellDot />
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
