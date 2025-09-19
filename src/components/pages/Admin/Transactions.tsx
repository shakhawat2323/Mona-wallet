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
import { useGetTransactionsQuery } from "@/Redux/features/auth/admin.api";
import Loding from "../Agent/Loding";

// ✅ Badge helper
function getBadge(type: string) {
  if (type === "CASH_IN")
    return <Badge className="bg-green-600/20 text-green-400">Cash In</Badge>;
  if (type === "CASH_OUT")
    return <Badge className="bg-pink-600/20 text-pink-400">Cash Out</Badge>;
  if (type === "TRANSFER")
    return <Badge className="bg-blue-600/20 text-blue-400">Transfer</Badge>;
  if (type === "WITHDRAW")
    return <Badge className="bg-red-600/20 text-red-400">Withdraw</Badge>;
  if (type === "DEPOSIT")
    return <Badge className="bg-yellow-600/20 text-yellow-400">Deposit</Badge>;
  return <Badge className="bg-gray-600/20 text-gray-400">{type}</Badge>;
}

export default function Transactions() {
  const { data, isLoading, isError } = useGetTransactionsQuery(undefined);

  const transactions = data?.data || [];
  const [activeTab, setActiveTab] = useState("All");


  const [page, setPage] = useState(1);
  const rowsPerPage = 10;


  const tabs = ["All", "CASH_IN", "CASH_OUT", "TRANSFER", "WITHDRAW", "DEPOSIT"];

  // ✅ Filter transactions by tab
  const filtered = (() => {
    if (activeTab === "All") return transactions;
    return transactions.filter((tx: any) => tx.type === activeTab);
  })();

  // ✅ Pagination calculate
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

 if(isLoading){
      <Loding/>
    }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen text-red-400">
        Failed to load transactions.
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-tr from-[#181C2F] via-[#232946] to-[#212133] min-h-screen">
      <Card className="bg-[#181d2f] border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Transactions History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value);
              setPage(1); // নতুন tab এ গেলে pagination reset হবে
            }}
            className="w-full"
          >
            {/* ✅ Tab Buttons */}
            <TabsList className="grid grid-cols-6 bg-[#21294d] mb-4">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="data-[state=active]:bg-[#2d3b69] cursor-pointer data-[state=active]:text-white text-slate-300"
                >
                  {tab === "All" ? "All" : tab.replace("_", " ")}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* ✅ Table */}
            <TabsContent value={activeTab}>
              <Table>
                <TableCaption className="text-slate-400">
                  {activeTab} transactions list
                </TableCaption>
                <TableHeader>
                  <TableRow className="border-b border-[#232946]">
                
                    <TableHead className="text-slate-300">Amount</TableHead>
                    <TableHead className="text-slate-300">Type</TableHead>
                    <TableHead className="text-slate-300">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginated.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center text-slate-400"
                      >
                        No transactions found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    paginated.map((tx: any) => (
                      <TableRow
                        key={tx._id}
                        className="border-b border-[#232946] hover:bg-[#21294d]/50"
                      >
              
                        <TableCell className="text-slate-300">
                          {tx.amount} BDT
                        </TableCell>
                        <TableCell>{getBadge(tx.type)}</TableCell>
                        <TableCell className="text-slate-400">
                          {new Date(tx.createdAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>

              {/* ✅ Pagination */}
              {totalPages > 1 && (
                <div className="mt-4 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setPage((p) => Math.max(p - 1, 1))}
                          className={
                            page === 1 ? "pointer-events-none opacity-50" : ""
                          }
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
                          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
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
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
