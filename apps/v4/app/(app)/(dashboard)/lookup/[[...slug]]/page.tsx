import * as React from "react"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"

export default function LookupPage() {
  return (
    <div className="container-wrapper px-6 py-8">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">Unified Lookup</h1>
      <Tabs defaultValue="person">
        <TabsList>
          <TabsTrigger value="person">Person</TabsTrigger>
          <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
          <TabsTrigger value="address">Address</TabsTrigger>
        </TabsList>
        {[
          { v: "person", p: "Name/email/username/domain" },
          { v: "vehicle", p: "License plate" },
          { v: "address", p: "Property or landmark" },
        ].map(({ v, p }) => (
          <TabsContent key={v} value={v}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{v[0].toUpperCase()+v.slice(1)} Lookup</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                <Input placeholder={p} className="max-w-sm" />
                <Button>Lookup</Button>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}


