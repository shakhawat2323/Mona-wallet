import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Edit2 } from "lucide-react";
import { useGetuserQuery, useUpdateProfileMutation } from "@/Redux/features/auth/user.api";
import { toast } from "sonner";
import Loding from "../Agent/Loding";

export default function Profile() {

  const { data, isLoading, refetch } = useGetuserQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();
console.log(data,"data")
  const user = data?.data?.user || {};
  const wallet = data?.data?.wallets?.[0] || {};
  const summary = data?.data?.summary || {};
console.log(user,"user")
console.log(wallet,"wallet")
console.log(summary,"summary")

  const userId = user?._id;
console.log(userId,"userId")
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  // ফর্ম চেঞ্জ হ্যান্ডলার
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // সেভ করলে ডাটাবেসে আপডেট হবে
  const handleSave = async () => {
    if (!userId) return;
    await updateProfile({ id: userId, data: formData });
    await refetch(); 
        toast.success("✅ Profile updated successfully!");
    setOpen(false);
  };

 if(isLoading){
      <Loding/>
    }

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
            <h2 className="text-3xl font-bold">{user?.name}</h2>
            <p className="text-gray-300">{user?.role}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-sm text-gray-400">
              <div>
                <span className="font-medium">Email: </span>{user?.email}
              </div>
              <div>
                <span className="font-medium">Phone: </span>{user?.phone}
              </div>
              <div>
                <span className="font-medium">Joined: </span>{new Date(user?.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <Button
            onClick={() => {
              setFormData({ name: user?.name, phone: user?.phone }); // শুধু name আর phone
              setOpen(true);
            }}
            className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-800 hover:opacity-90 transition flex items-center gap-2 mt-4 md:mt-0"
          >
            <Edit2 className="w-4 h-4" /> Edit Profile
          </Button>
        </CardHeader>

        {/* Quick Stats (Overview API থেকে) */}
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
          <div className="bg-gray-700/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-green-400">৳ {wallet?.balance ?? 0}</span>
            <span className="text-gray-300 text-sm">Balance</span>
          </div>
          <div className="bg-gray-700/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-blue-400">{summary?.totalTransactions || 0}</span>
            <span className="text-gray-300 text-sm">Total Transactions</span>
          </div>
          <div className="bg-gray-700/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-purple-400">{user?.status || "APPROVED"}</span>
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
              <Input name="name" value={formData?.name || ""} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Phone</Label>
              <Input name="phone" value={formData?.phone || ""} onChange={handleChange} />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave} className="bg-blue-600 cursor-pointer hover:bg-blue-700">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
