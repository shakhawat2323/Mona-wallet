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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


import { useState } from "react";

import {
  useBlockWalletMutation,
  useGetUserUserQuery,
  useUnblockWalletMutation,
  useUsertoagentMutation,
} from "@/Redux/features/auth/admin.api";

import Loding from "../Agent/Loding";
import { toast } from "sonner";

const ITEMS_PER_PAGE = 5;

export default function ManageUsers() {
  const { data, isLoading, isError } = useGetUserUserQuery(undefined);
  const [blockWallet] = useBlockWalletMutation();
  const [unblockWallet] = useUnblockWalletMutation();
  const [usertoagent] = useUsertoagentMutation();



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
      if (isBlocked) {
        await unblockWallet(walletId).unwrap();
        toast.success( "Wallet Unblocked ✅");
      } else {
        await blockWallet(walletId).unwrap();
        toast.success( "Wallet Blocked ⛔");
      }
    } catch (err) {
      toast.error( "Failed to update status ❌")
      console.error(err);
    }
  };

  // 👉 Role Update Function
  const handleRoleChange = async (id: string, role: string) => {
    try {
      await usertoagent({ id, role }).unwrap();
      toast.success( `User role updated to ${role} ✅`);
    } catch (err) {
      toast.error("Failed to update role ❌");
      console.error(err);
    }
  };

  if (isLoading) return <Loding />;

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
                <TableHead className="text-slate-300">Role</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map((user: any) => {
                const walletId = user.wallets?.[0];
                const isBlocked = user.status === "BLOCKED";

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

                    {/* ✅ Role Select */}
                    <TableCell>
                      <Select
                        defaultValue={user.role || "USER"}
                        onValueChange={(value) =>
                          handleRoleChange(user._id, value)
                        }
                      >
                        <SelectTrigger className="w-[120px] bg-[#21294d] text-slate-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USER">USER</SelectItem>
                          <SelectItem value="AGENT">AGENT</SelectItem>
                        </SelectContent>
                      </Select>
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
                        disabled={!walletId}
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
