import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"

export default function SettingsPage() {
  return (
    <div className="container-wrapper px-6 py-8">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Profile & Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-56 rounded-md border border-dashed" />
        </CardContent>
      </Card>
    </div>
  )
}


