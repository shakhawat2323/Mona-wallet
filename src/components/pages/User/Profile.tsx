
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Edit2 ,EyeOff,Eye} from "lucide-react";
import { useUpdateProfileMutation, useGetuserQuery } from "@/Redux/features/auth/user.api";
import { useSetPasswordMutation } from "@/Redux/features/auth/auth.api";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Loding from "../Agent/Loding";

// 🔒 Password Validation
const passwordSchema = z
  .object({
    password: z
      .string({ error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/^(?=.*[A-Z])/, { message: "Must contain 1 uppercase letter." })
      .regex(/^(?=.*[!@#$%^&*])/, { message: "Must contain 1 special character." })
      .regex(/^(?=.*\d)/, { message: "Must contain 1 number." }),
    confirmPassword: z.string({ error: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function Profile() {
  const { data, isLoading, refetch } = useGetuserQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();
  const [setPassword] = useSetPasswordMutation();

  const user = data?.data?.user || {};
  const wallet = data?.data?.wallets?.[0] || {};
  const summary = data?.data?.summary || {};
  const userId = user?._id;

  const googledata = user?.auths?.[0]?.provider;

  const [editOpen, setEditOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  // Profile Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!userId) return;
    await updateProfile({ id: userId, data: formData });
    await refetch();
    toast.success("✅ Profile updated successfully!");
    setEditOpen(false);
  };

  const handlePasswordSave = async (values: PasswordFormValues) => {
    try {
      if (!userId) return;
      await setPassword({ id: userId, password: values.password }).unwrap();
      toast.success("✅ Password updated successfully!");
      passwordForm.reset();
      setPasswordOpen(false);
    } catch {
      toast.error("❌ Failed to update password");
    }
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
              <div><span className="font-medium">Email: </span>{user?.email}</div>
              <div><span className="font-medium">Phone: </span>{user?.phone}</div>
              <div><span className="font-medium">Joined: </span>{new Date(user?.createdAt).toLocaleDateString()}</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-4 md:mt-0">
            <Button
              onClick={() => {
                setFormData({ name: user?.name, phone: user?.phone });
                setEditOpen(true);
              }}
              className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-800 hover:opacity-90 transition flex items-center gap-2"
            >
              <Edit2 className="w-4 h-4" /> Edit Profile
            </Button>

            {/* Conditional Set Password */}
            {googledata === "google" && (
              <Button
                onClick={() => setPasswordOpen(true)}
                className="bg-gradient-to-r cursor-pointer from-purple-600 to-purple-800 hover:opacity-90 transition flex items-center gap-2"
              >
                <Eye  className="w-4 h-4" /> Set Password
              </Button>
            )}
          </div>
        </CardHeader>

        {/* Quick Stats */}
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
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
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
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Set Password Modal */}
     <Dialog open={passwordOpen} onOpenChange={setPasswordOpen}>
  <DialogContent className="bg-gray-800 text-gray-100 border border-gray-700">
    <DialogHeader>
      <DialogTitle className="text-xl">Set Password</DialogTitle>
    </DialogHeader>
    <form
      onSubmit={passwordForm.handleSubmit(handlePasswordSave)}
      className="space-y-4 py-4"
    >
      {/* Password Field */}
      <div className="flex flex-col gap-2 relative">
        <Label>Password</Label>
        <Input
          type={showPassword ? "text" : "password"}
          {...passwordForm.register("password")}
        />
        <button
          type="button"
          className="absolute cursor-pointer right-3 top-9 text-gray-400 hover:text-white"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
        <p className="text-red-400 cursor-pointer text-sm">
          {passwordForm.formState.errors.password?.message}
        </p>
      </div>

      {/* Confirm Password Field */}
      <div className="flex flex-col gap-2 relative">
        <Label>Confirm Password</Label>
        <Input
          type={showConfirm ? "text" : "password"}
          {...passwordForm.register("confirmPassword")}
        />
        <button
          type="button"
          className="absolute cursor-pointer right-3 top-9 text-gray-400 hover:text-white"
          onClick={() => setShowConfirm((prev) => !prev)}
        >
          {showConfirm ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
        <p className="text-red-400 text-sm">
          {passwordForm.formState.errors.confirmPassword?.message}
        </p>
      </div>

      {/* Submit Button */}
      <DialogFooter>
        {googledata === "google" && (
          <Button
            type="submit"
            className="bg-purple-600 cursor-pointer hover:bg-purple-700 w-full"
          >
            Set Password
          </Button>
        )}
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
    </div>
  );
}
