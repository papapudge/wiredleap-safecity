import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"

export default function IncidentsPage() {
  const tabs = [
    { v: "kanban", t: "Kanban" },
    { v: "timeline", t: "Timeline" },
    { v: "table", t: "Table" },
    { v: "map", t: "Map" },
  ]
  return (
    <div className="container-wrapper px-6 py-8">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">Incidents</h1>
      <Tabs defaultValue="kanban">
        <TabsList>
          {tabs.map(({ v, t }) => (
            <TabsTrigger key={v} value={v}>{t}</TabsTrigger>
          ))}
        </TabsList>
        {tabs.map(({ v, t }) => (
          <TabsContent key={v} value={v}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t} View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72 rounded-md border border-dashed" />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}


