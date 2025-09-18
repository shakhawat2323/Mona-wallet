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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import {
  useBlockWalletMutation,
  useGetUserUserQuery,
  useUnblockWalletMutation,
} from "@/Redux/features/auth/admin.api";

const ITEMS_PER_PAGE = 5;

export default function ManageUsers() {
  const { data, isLoading, isError } = useGetUserUserQuery(undefined);
  const [blockWallet] = useBlockWalletMutation();
  const [unblockWallet] = useUnblockWalletMutation();

  const [currentPage, setCurrentPage] = useState(1);

  const users = data?.data || [];
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const paginatedUsers = users.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 👉 Block / Unblock Handle Function
  const handleBlockToggle = async (walletId: string, isBlocked: boolean) => {
    try {
      console.log("👉 Selected Wallet ID:", walletId);

      if (isBlocked) {
        await unblockWallet(walletId).unwrap();
        console.log("✅ Unblocked Wallet:", walletId);
      } else {
        await blockWallet(walletId).unwrap();
        console.log("⛔ Blocked Wallet:", walletId);
      }
    } catch (err) {
      console.error("❌ Failed to update status:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <Loader2 className="animate-spin mr-2" /> Loading users...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-400 mt-10">
        Failed to load users 😢
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-tr from-[#181C2F] via-[#232946] to-[#212133] min-h-screen">
      <Card className="bg-[#181d2f] border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Manage Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption className="text-slate-400">
              A list of all registered users
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
              {paginatedUsers.map((user: any) => {
                const walletId = user.wallets?.[0]; // ✅ প্রথম wallet ID
                const isBlocked = user.status === "BLOCKED"; // বা backend থেকে আলাদা field হলে সেটা use করো

                return (
                  <TableRow
                    key={user._id}
                    className="border-b border-[#232946] hover:bg-[#21294d]/50"
                  >
                    <TableCell className="text-slate-200 font-medium">
                      {user.name}
                    </TableCell>
                    <TableCell className="text-slate-300">
                      {user.email}
                    </TableCell>
                    <TableCell>
                      {isBlocked ? (
                        <Badge className="bg-red-600/20 text-red-400">
                          Blocked
                        </Badge>
                      ) : (
                        <Badge className="bg-green-600/20 text-green-400">
                          Active
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        disabled={!walletId} // যদি wallet না থাকে
                        onClick={() =>
                          handleBlockToggle(walletId, isBlocked)
                        }
                        className={
                          isBlocked
                            ? "bg-green-700 cursor-pointer hover:bg-green-600 text-white"
                            : "bg-red-600 cursor-pointer hover:bg-red-500"
                        }
                      >
                        {isBlocked ? "Unblock" : "Block"}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {/* ✅ Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="bg-[#21294d] cursor-pointer text-slate-300 hover:bg-[#2a3459]"
            >
              Prev
            </Button>
            <span className="text-slate-300">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="bg-[#21294d] cursor-pointer text-slate-300 hover:bg-[#2a3459]"
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
