
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Register from "../../assets/images/Registers.png"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router";

import { toast } from "sonner";
import { useRegisterMutation } from "@/Redux/features/auth/auth.api";
import Logo from "@/assets/Icons/Logo";
import Password from "./password";
import Select from "./select";
const formSchema = z
  .object({
    name: z.string().min(4, { message: "Full name is required." }),
    email: z.email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
     phone: z
    .string({ error: "Phone Number must be string" }).min(14,{error:"Enter Your Full Number"})
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    }),
    role: z.string({
      error: "Please select a role.",
    }),
    confirmPassword: z.string().min(8, { message: "Confirm your password." }),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function RegisterPage() {
  const [register] = useRegisterMutation();
  const naviget = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "+8801756984526",
      role: "USER",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
      password: data.password,
    };
    console.log(userInfo);
    try {
      const result = await register(userInfo).unwrap();
      console.log(result);
      toast.success("User Created Successfully");
      naviget("/login");
    } catch (error) {
      console.log(error);
      toast.error("User Not Created");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100 dark:bg-zinc-900">
      {/* Left side (Travel Image) */}
      <div className="hidden md:block">
        <img
          src={Register}
          alt="Travel adventure"
          className="h-full object-cover"
        />
      </div>

      {/* Right side (Form) */}
      <div className="flex flex-col justify-center px-6 sm:px-10 py-12 bg-white dark:bg-zinc-950 shadow-lg">
        <div className="mx-auto w-full border-2 border-muted-foreground p-5 rounded-2xl max-w-md space-y-8">
          {/* Header */}
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Create a new account
            </h1>
          </div>

          {/* ✅ Form with React Hook Form + Zod */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+8801756984526"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Role Selection */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <Select {...field}/>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms & Conditions */}
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="leading-none">
                      <FormLabel className="text-muted-foreground font-normal">
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className="underline underline-offset-4"
                        >
                          terms and conditions
                        </Link>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full cursor-pointer">
                Register
              </Button>
            </form>
          </Form>

          {/* Login link */}
          <div className="text-center text-sm text-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline cursor-pointer underline-offset-4 hover:text-primary"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}