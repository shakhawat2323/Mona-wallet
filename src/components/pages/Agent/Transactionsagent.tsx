/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useState } from "react";
import { useGetagentQuery } from "@/Redux/features/auth/user.api";
import Loding from "./Loding";

function getBadge(type: string) {
  if (type === "CASH_IN")
    return <Badge className="bg-green-600/20 text-green-400">Cash-In</Badge>;

  if (type === "CASH_OUT")
    return <Badge className="bg-red-600/20 text-red-400">Cash-Out</Badge>;

  return <Badge className="bg-gray-600/20 text-gray-400">{type}</Badge>;
}

export default function Transactionsagent() {
  const { data ,isLoading } = useGetagentQuery(undefined);
  const transactions = data?.data?.transactions || [];

  // Filter by tab type
  const filterByType = (type: string) => {
    if (type === "All") return transactions;
    if (type === "Cash-In")
      return transactions.filter((tx: any) => tx.type === "CASH_IN");
    if (type === "Cash-Out")
      return transactions.filter((tx: any) => tx.type === "CASH_OUT");
    return [];
  };

  const tabs = ["All", "Cash-In", "Cash-Out"];

  // Pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const paginate = (list: any[]) => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return list.slice(start, end);
  };
   if(isLoading){
      <Loding/>
    }

  return (
    <div className="p-6 bg-gradient-to-tr from-[#181C2F] via-[#232946] to-[#212133] min-h-screen">
      <Card className="bg-[#181d2f] border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Agent Transactions History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="All" className="w-full">
            {/* Tab Buttons */}
            <TabsList className="grid grid-cols-3 bg-[#21294d] mb-4">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="data-[state=active]:bg-[#2d3b69] cursor-pointer data-[state=active]:text-white text-slate-300"
                  onClick={() => setPage(1)}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            {tabs.map((tab) => {
              const filtered = filterByType(tab);
              const totalPages = Math.ceil(filtered.length / rowsPerPage);

              return (
                <TabsContent key={tab} value={tab}>
                  <Table>
                    <TableCaption className="text-slate-400 cursor-pointer">
                      {tab} transactions list
                    </TableCaption>
                    <TableHeader>
                      <TableRow className="border-b border-[#232946]">
                        <TableHead className="text-slate-300">Amount</TableHead>
                        <TableHead className="text-slate-300">Type</TableHead>
                        <TableHead className="text-slate-300">Status</TableHead>
                        <TableHead className="text-slate-300">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginate(filtered).map((tx: any) => (
                        <TableRow
                          key={tx._id}
                          className="border-b border-[#232946] hover:bg-[#21294d]/50"
                        >
                          <TableCell className="text-slate-300">
                            {tx.amount} BDT
                          </TableCell>
                          <TableCell>{getBadge(tx.type)}</TableCell>
                          <TableCell className="text-slate-400">
                            {tx.status}
                          </TableCell>
                          <TableCell className="text-slate-400">
                            {new Date(tx.createdAt).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-4 flex justify-center">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              onClick={() =>
                                setPage((prev) => Math.max(prev - 1, 1))
                              }
                              className={page === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>

                          {Array.from({ length: totalPages }, (_, i) => (
                            <PaginationItem key={i}>
                              <PaginationLink
                                isActive={page === i + 1}
                                onClick={() => setPage(i + 1)}
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          ))}

                          <PaginationItem>
                            <PaginationNext
                              onClick={() =>
                                setPage((prev) =>
                                  Math.min(prev + 1, totalPages)
                                )
                              }
                              className={
                                page === totalPages
                                  ? "pointer-events-none opacity-50"
                                  : ""
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
