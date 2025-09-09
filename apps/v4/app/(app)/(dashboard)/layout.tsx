import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/20 relative">
      {/* Floating Sidebar */}
      <div className="fixed left-4 top-4 bottom-4 z-50 w-64 hidden lg:block">
        <div className="bg-background border shadow-lg rounded-xl h-full overflow-hidden">
          <AppSidebar />
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <AppSidebar />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 overflow-hidden lg:ml-72">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
          <div className="flex h-14 items-center px-4 sm:px-6">
            {/* Mobile menu button could go here if needed */}
          </div>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  )
}