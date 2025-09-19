
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useChangePasswordMutation } from "@/Redux/features/auth/auth.api";
import { toast } from "sonner";
import Loding from "../Agent/Loding";


const formSchema = z
  .object({
    oldPassword: z.string().min(8, { message: "Old password is required" }),
    newPassword: z
      .string()
      .min(8, { message: "New password must be at least 8 characters long." })
      .regex(/^(?=.*[A-Z])/, {
        message: "Must contain at least 1 uppercase letter.",
      })
      .regex(/^(?=.*[!@#$%^&*])/, {
        message: "Must contain at least 1 special character.",
      })
      .regex(/^(?=.*\d)/, {
        message: "Must contain at least 1 number.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

export default function PasswordPage() {
  

  const [showPassword, setShowPassword] = useState(false);

  const [changePassword, { isLoading: isChanging }] =
    useChangePasswordMutation(); 

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await changePassword({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      }).unwrap();
       toast.success("✅Password changed successfully!",res)
      form.reset();
    } catch (error: any) {
   
     
      toast.error("Failed to change password",error)
    }
  };

  if (isChanging) {
    return (
      <div className="flex items-center justify-center h-screen text-slate-400">
        <Loding/>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4">
      <div className="w-full  max-w-md bg-[#181d2f] rounded-2xl shadow-2xl p-8 border border-slate-700">
        {/* Header */}
        <div className="text-center mb-6">
          <ShieldCheck className="mx-auto h-12 w-12 text-blue-500" />
          <h1 className="text-2xl font-bold text-white mt-3">
            Change Your Password
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Please provide your old password and set a new one.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Old Password */}
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Old Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter old password"
                      {...field}
                      className="bg-slate-800 text-slate-100 border-slate-700 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* New Password */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        {...field}
                        className="pr-10 bg-slate-800 text-slate-100 border-slate-700 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">
                    Confirm New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Re-enter new password"
                      {...field}
                      className="bg-slate-800 text-slate-100 border-slate-700 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              disabled={isChanging}
              className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-2 text-lg font-medium rounded-lg transition"
            >
              {isChanging ? "Saving..." : "Save Password"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
