import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Login from "../../assets/images/login.jpeg"
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
import { useLoginMutation } from "@/Redux/features/auth/auth.api";
import Password from "./password";

import Logo from "@/assets/Icons/Logo";
import config from "@/config";


const formSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  remember: z.boolean().refine((val) => val === true, {
    message: "You must check Remember me to login.",
  }),
});

export default function LoginPage() {
  const [login] = useLoginMutation();
  const naviget = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  // const onSubmit = async (data: z.infer<typeof formSchema>) => {
  //   const userInfo = {
  //     email: data.email,
  //     password: data.password,
  //   };
  //   console.log("Login Payload:", userInfo);

  //   try {
  //     const result = await login(userInfo).unwrap();
  //     console.log(result);
  //     toast.success("Logged in successfully");
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   } catch (error: any) {
  //     console.error(error);
  //     toast.error(error?.data?.message || "Login failed");
  //     if (error.status === 40) {
  //       naviget("/verify", { state: data.email });
  //       console.log({ state: data.email })
  //     }
  //   }
  // };
   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res.success) {
        toast.success("Logged in successfully");
        naviget("/");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      console.error(err);

      if (err.data.message === "Password does not match") {
        toast.error("Invalid credentials");
      }

      if (err.data.message === "User is not verified") {
        toast.error("Your account is not verified");
        naviget("/verify", { state: data.email });
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100 dark:bg-zinc-900">
      {/* Left side image */}
      <div className="hidden md:block">
        <img
          src={Login}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side (form) */}
      <div className="flex flex-col justify-center px-6 sm:px-10 py-12 bgtext-card-foreground dark:bg-zinc-950 shadow-lg">
        <div className="mx-auto w-full max-w-md  border-2  border-muted-foreground p-5 rounded-2xl space-y-8">
          {/* Header */}
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight texttext-card-foreground">
              Login to your account
            </h1>
           
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="texttext-card-foreground">Email</FormLabel>
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

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="texttext-card-foreground">Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remember Me */}
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-muted-foreground font-normal">
                      Remember me
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                className="w-full"
                disabled={!form.watch("remember")}
              >
                Login
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="relative text-center text-sm">
            <span className="bgtext-card-foreground dark:bg-zinc-950 px-2 text-muted-foreground relative z-10">
              Or continue with
            </span>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
          </div>

          {/* Google login */}
          <Button
            onClick={() => window.open(`${config.baseUrl}/auth/google`)}
            type="button"
            variant="outline"
            className="w-full"
          >
            Login with Google
          </Button>

          {/* Register link */}
          <div className="text-center text-sm texttext-card-foreground">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
