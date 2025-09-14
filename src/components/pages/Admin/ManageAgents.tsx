"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fakeAgents = [
  { id: 1, name: "Agent Rakib", phone: "01711111111", status: "Approved" },
  { id: 2, name: "Agent Selim", phone: "01722222222", status: "Pending" },
];

export default function ManageAgents() {
  return (
    <div className="p-6 bg-gradient-to-tr from-[#181C2F] via-[#232946] to-[#212133] min-h-screen">
      <Card className="bg-[#181d2f] border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Manage Agents</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption className="text-slate-400">
              A list of all registered agents
            </TableCaption>
            <TableHeader>
              <TableRow className="border-b border-[#232946]">
                <TableHead className="text-slate-300">Name</TableHead>
                <TableHead className="text-slate-300">Phone</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fakeAgents.map((agent) => (
                <TableRow
                  key={agent.id}
                  className="border-b border-[#232946] hover:bg-[#21294d]/50"
                >
                  <TableCell className="text-slate-200 font-medium">
                    {agent.name}
                  </TableCell>
                  <TableCell className="text-slate-300">
                    {agent.phone}
                  </TableCell>
                  <TableCell>
                    {agent.status === "Approved" ? (
                      <Badge className="bg-green-600/20 text-green-400">
                        Approved
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-600/20 text-yellow-400">
                        Pending
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant={agent.status === "Approved" ? "destructive" : "secondary"}
                      className={
                        agent.status === "Approved"
                          ? "bg-red-600 hover:bg-red-500"
                          : "bg-green-600 hover:bg-green-500 text-white"
                      }
                    >
                      {agent.status === "Approved" ? "Suspend" : "Approve"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
