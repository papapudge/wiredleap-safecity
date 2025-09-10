import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Normal Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 z-50 w-80 hidden lg:block">
        <div className="bg-muted/50 border-r h-full overflow-hidden">
          <AppSidebar />
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <AppSidebar />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-80">
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  )
}