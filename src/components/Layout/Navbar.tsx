import Logo from "@/assets/Icons/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, NavLink } from "react-router";
import { ModeToggle } from "../DarkAndLightMode/mode-toggle";
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/Redux/features/auth/auth.api";
import { useAppDispatch } from "@/Redux/hooks";
import { toast } from "sonner";
import { role } from "@/constants/role";
// import { role } from "@/constants/role";





// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", role:"PUBLIC" },
  { href: "/features", label: "Features" , role:"PUBLIC" },
  { href: "/about", label: "About"  , role:"PUBLIC"},
  { href: "/contact", label: "Contact" , role:"PUBLIC"},
  { href: "/faq", label: "FAQ" , role:"PUBLIC"},
    { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/agent", label: "Dashboard", role: role.agent },
  { href: "/user", label: "Dashboard", role: role.user},
];



export default function Navbar() {
   const [logout]=useLogoutMutation()
  const { data } = useUserInfoQuery(undefined);
    const dispatch=useAppDispatch()
const LogOuthandel = async () => {
  try {
    await logout(undefined).unwrap();
    dispatch(authApi.util.resetApiState()); 
    toast.success("LogOut in successfully");
  } catch (err) {
    console.error("Logout failed", err);
  }
};
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col  items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="py-1.5"
                      
                        asChild
                      >
                        <NavLink 
                     
                      
           to={link.href}>{link.label}</NavLink>
  
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90 hidden lg:block ">
              <Logo />
            </Link>
            <div className="flex flex-row gap-2">
              <Link
                to="/"
                className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 leading-[0.9] "
              >
                Mona
              </Link>
              <span className="text-yellow-400  text-2xl font-extrabold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text  hover:scale-105 transition-transform duration-300 leading-[0.9] ">
                Wallet
              </span>
            </div>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden px-[150px]">
              <NavigationMenuList className="gap-5">
                {navigationLinks.map((link, index) => (
                  <>
                    {link.role === "PUBLIC" && (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          asChild
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                    {link.role === data?.data?.role && (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          asChild
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                  </>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
        {  data?.data?.email && <Button onClick={LogOuthandel} className="text-sm cursor-pointer" >
         Logout
        </Button>}
       {
        !data?.data?.email &&   <Button  className="text-sm cursor-pointer">
            <Link to="/login"> Sign In</Link>
          </Button>
       }
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
