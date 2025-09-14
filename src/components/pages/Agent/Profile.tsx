

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Edit2 } from "lucide-react";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    name: "Akash Trasten",
    email: "akash@example.com",
    phone: "+8801756984526",
    address: "Dhaka, Bangladesh",
    role: "Admin",
    joined: "2023-01-15",
    totalTransactions: 125,
    balance: 12540,
  });

  const [formData, setFormData] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(formData);
    setOpen(false);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 flex flex-col items-center space-y-6">
      {/* Profile Card */}
      <Card className="w-full max-w-4xl bg-gray-800 border border-gray-700 shadow-xl">
        <CardHeader className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 p-6">
          {/* Avatar */}
          <div className="relative group">
            <User className="w-28 h-28 text-blue-400 rounded-full border-4 border-gray-700 p-2" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-full transition">
              <Edit2 className="w-6 h-6 text-white cursor-pointer" />
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-2">
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-gray-300">{user.role}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-sm text-gray-400">
              <div>
                <span className="font-medium">Email: </span>{user.email}
              </div>
              <div>
                <span className="font-medium">Phone: </span>{user.phone}
              </div>
              <div>
                <span className="font-medium">Address: </span>{user.address}
              </div>
              <div>
                <span className="font-medium">Joined: </span>{user.joined}
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <Button
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90 transition flex items-center gap-2 mt-4 md:mt-0"
          >
            <Edit2 className="w-4 h-4" /> Edit Profile
          </Button>
        </CardHeader>

        {/* Quick Stats */}
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
          <div className="bg-gray-700/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-green-400">৳ {user.balance}</span>
            <span className="text-gray-300 text-sm">Balance</span>
          </div>
          <div className="bg-gray-700/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-blue-400">{user.totalTransactions}</span>
            <span className="text-gray-300 text-sm">Total Transactions</span>
          </div>
          <div className="bg-gray-700/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-purple-400">Active</span>
            <span className="text-gray-300 text-sm">Status</span>
          </div>
        </CardContent>
      </Card>

      {/* Edit Profile Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gray-800 text-gray-100 border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-xl">Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Phone</Label>
              <Input name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Address</Label>
              <Input name="address" value={formData.address} onChange={handleChange} />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
