import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"

export default function AlertsPage() {
  return (
    <div className="container-wrapper px-6 py-8">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">Alerts & Automation</h1>
      <Tabs defaultValue="rules">
        <TabsList>
          <TabsTrigger value="rules">Rules</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="log">Log</TabsTrigger>
        </TabsList>
        {[
          { v: "rules", t: "Alert Rules" },
          { v: "subscriptions", t: "Alert Subscriptions" },
          { v: "log", t: "Alert History" },
        ].map(({ v, t }) => (
          <TabsContent key={v} value={v}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-56 rounded-md border border-dashed" />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}


