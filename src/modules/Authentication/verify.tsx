

import Logo from "@/assets/Icons/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

import { cn } from "@/lib/utils";
import { useSendOtpMutation, useVerifyOtpMutation } from "@/Redux/features/auth/auth.api";

import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function Verify() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email] = useState(location.state);
  const [confirmed, setConfirmed] = useState(false);
  const [sendOtp] = useSendOtpMutation();
  const [verifyOtp] = useVerifyOtpMutation();
  const [timer, setTimer] = useState(5);
console.log(location.state)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const handleSendOtp = async () => {
      console.log("Email before sendOtp:", email); 
    const toastId = toast.loading("Sending OTP");

    try {
      const res = await sendOtp({ email:email }).unwrap();
      console.log(res)

      if (res.success) {
        toast.success("OTP Sent", { id: toastId });
        setConfirmed(true);
        setTimer(5);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const toastId = toast.loading("Verifying OTP");
    const userInfo = {
      email,
      otp: data.pin,
    };

    try {
      const res = await verifyOtp(userInfo).unwrap();
      if (res.success) {
        toast.success("OTP Verified", { id: toastId });
        setConfirmed(true);
        navigate("/login")
      }
    } catch (err) {
      console.log(err);
    }
  };

  //! Needed - Turned off for development
  //   useEffect(() => {
  //     if (!email) {
  //       navigate("/");
  //     }
  //   }, [email]);

  useEffect(() => {
    if (!email || !confirmed) {
      return;
    }

    const timerId = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      console.log("Tick");
    }, 1000);

    return () => clearInterval(timerId);
  }, [email, confirmed]);

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <Card className="w-full max-w-md shadow-xl border border-gray-200 rounded-2xl">
        <div className="flex justify-center mt-6">
      <div className="w-20 h-20">
            <Logo  />
      </div>
        </div>

        {confirmed ? (
          <>
            <CardHeader className="text-center mt-4">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Verify Your Email
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2">
                Enter the 6-digit code sent to <br />
                <span className="font-medium text-gray-700">{email}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  id="otp-form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 flex flex-col items-center"
                >
                  <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-col items-center">
                        <FormLabel className="text-gray-700 font-medium text-center">
                          One-Time Password
                        </FormLabel>
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot index={1} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot index={2} />
                            </InputOTPGroup>

                            <InputOTPGroup>
                              <InputOTPSlot index={3} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot index={4} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormDescription className="text-center mt-2">
                          <Button
                            onClick={handleSendOtp}
                            type="button"
                            variant="link"
                            disabled={timer !== 0}
                            className={cn("p-0 m-0", {
                              "cursor-pointer text-blue-600": timer === 0,
                              "text-gray-400 cursor-not-allowed": timer !== 0,
                            })}
                          >
                            Resend OTP
                          </Button>{" "}
                          {timer > 0 && (
                            <span className="text-gray-500">{timer}s</span>
                          )}
                        </FormDescription>
                        <FormMessage className="text-red-500 mt-1 text-center" />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button form="otp-form" type="submit" className="w-full">
                Verify OTP
              </Button>
            </CardFooter>
          </>
        ) : (
          <>
            <CardHeader className="text-center mt-4">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Confirm Your Email
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2">
                We will send a one-time password (OTP) to <br />
                <span className="font-medium text-gray-700">{email}</span>
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button onClick={handleSendOtp} className="w-full">
                Send OTP
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}