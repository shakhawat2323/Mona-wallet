/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
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
import {
  useGetAgentsQuery,
  useBlockAgentMutation,
  useUnblockAgentMutation,
} from "@/Redux/features/auth/admin.api";

import Loding from "../Agent/Loding";

const ITEMS_PER_PAGE = 5;

export default function ManageAgents() {
  const { data, isLoading, isError } = useGetAgentsQuery(undefined);
  const [blockAgent] = useBlockAgentMutation();
  const [unblockAgent] = useUnblockAgentMutation();

  const [currentPage, setCurrentPage] = useState(1);

  const agents = data?.data || [];
  const totalPages = Math.ceil(agents.length / ITEMS_PER_PAGE);
  const paginatedAgents = agents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleStatusToggle = async (agent: any) => {
    try {
      const agentId = agent._id;
      if (agent.status === "APPROVED") {
        await blockAgent(agentId).unwrap(); // suspend
        console.log("⛔ Suspended:", agentId);
      } else {
        await unblockAgent(agentId).unwrap(); // approve
        console.log("✅ Approved:", agentId);
      }
    } catch (err) {
      console.error("❌ Failed to update status:", err);
    }
  };

   if(isLoading){
        <Loding/>
      }

  if (isError) {
    return (
      <div className="text-center text-red-400 mt-10">
        Failed to load agents 😢
      </div>
    );
  }

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
                <TableHead className="text-slate-300">Email</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedAgents.map((agent: any) => (
                <TableRow
                  key={agent._id}
                  className="border-b border-[#232946] hover:bg-[#21294d]/50"
                >
                  <TableCell className="text-slate-200 font-medium">
                    {agent.name}
                  </TableCell>
                  <TableCell className="text-slate-300">{agent.email}</TableCell>
                  <TableCell>
                    {agent.status === "APPROVED" ? (
                      <Badge className="bg-green-600/20 text-green-400">
                        Approved
                      </Badge>
                    ) : (
                      <Badge className="bg-red-600/20 text-red-400">
                        Suspended
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      onClick={() => handleStatusToggle(agent)}
                      className={
                        agent.status === "APPROVED"
                          ? "bg-red-600 cursor-pointer hover:bg-red-500 text-white"
                          : "bg-green-600 cursor-pointer hover:bg-green-500 text-white"
                      }
                    >
                      {agent.status === "APPROVED" ? "Suspend" : "Approve"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="bg-[#21294d] cursor-pointer text-slate-300 hover:bg-[#2a3459]"
            >
              Prev
            </Button>
            <span className="text-slate-300 cursor-pointer">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="bg-[#21294d]  cursor-pointer text-slate-300 hover:bg-[#2a3459]"
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
