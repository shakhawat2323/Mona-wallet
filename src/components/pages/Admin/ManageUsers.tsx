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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const fakeUsers = [
  { id: 1, name: "Rahim", email: "rahim@mail.com", isBlocked: false, role: "User" },
  { id: 2, name: "Karim", email: "karim@mail.com", isBlocked: true, role: "Agent" },
  { id: 3, name: "Jamil", email: "jamil@mail.com", isBlocked: false, role: "User" },
];

export default function ManageUsers() {
  const [users, setUsers] = useState(fakeUsers);

  const handleRoleChange = (id: number, newRole: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
    console.log(`User ${id} role updated to: ${newRole}`);
  };

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
                <TableHead className="text-slate-300">Role</TableHead>
                <TableHead className="text-slate-300">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  className="border-b border-[#232946] hover:bg-[#21294d]/50"
                >
                  <TableCell className="text-slate-200 font-medium">
                    {user.name}
                  </TableCell>
                  <TableCell className="text-slate-300">{user.email}</TableCell>
                  <TableCell>
                    {user.isBlocked ? (
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
                    <Select
                      defaultValue={user.role}
                      onValueChange={(value) => handleRoleChange(user.id, value)}
                    >
                      <SelectTrigger className="w-[120px] bg-[#21294d] text-slate-200 border-[#2d3b69]">
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1e233d] text-slate-200">
                        <SelectItem value="User">User</SelectItem>
                        <SelectItem value="Agent">Agent</SelectItem>
              
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant={user.isBlocked ? "secondary" : "destructive"}
                      className={
                        user.isBlocked
                          ? "bg-green-700 hover:bg-green-600 text-white"
                          : "bg-red-600 hover:bg-red-500"
                      }
                    >
                      {user.isBlocked ? "Unblock" : "Block"}
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
