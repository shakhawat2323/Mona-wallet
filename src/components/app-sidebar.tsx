
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Logo from "@/assets/Icons/Logo"
import Monawallet from "./Layout/Monawallet"

import { authApi, useLogoutMutation, useUserInfoQuery } from "@/Redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Link, NavLink } from "react-router";
import {
  Home,
  Star,
  Info,
  Mail,
  HelpCircle,
  LogIn,
  UserPlus,
  LogOut,
} from "lucide-react";
import { useAppDispatch } from "@/Redux/hooks";
import { toast } from "sonner";



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);
  const navMain = getSidebarItems(userData?.data?.role);

  // Public navigation with icons
  const publicNav = [
    { title: "Home", url: "/", icon: Home, color: "text-blue-400" },
    { title: "Features", url: "/features", icon: Star, color: "text-purple-400" },
    { title: "About", url: "/about", icon: Info, color: "text-green-400" },
    { title: "Contact", url: "/contact", icon: Mail, color: "text-yellow-400" },
    { title: "FAQ", url: "/faq", icon: HelpCircle, color: "text-pink-400" },
    { title: "Login", url: "/login", icon: LogIn, color: "text-cyan-400" },
    { title: "Register", url: "/register", icon: UserPlus, color: "text-red-400" },
  ];
 const [logout]=useLogoutMutation()
     const dispatch=useAppDispatch()
  const handleLogout = async () => {
  try {
    await logout(undefined).unwrap();
    dispatch(authApi.util.resetApiState()); 
    toast.success("LogOut in successfully");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err:any) {
     toast.error("Logout failed",err);
  }

  };

  return (
    <Sidebar {...props}>
      {/* Header with Logo */}
      <SidebarHeader>
        <div className="flex flex-row justify-center items-center gap-3 py-3">
          <Logo />
          <Monawallet />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#0F1535] text-gray-200">
        {/* Role-based Items */}
        {navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className="flex cursor-pointer items-center gap-2 hover:text-blue-400 transition"
                      >
                        <item.icon className="w-4 h-4" />
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* Public Nav */}
        <SidebarGroup>
          <SidebarGroupLabel>Public</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {publicNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center  gap-2 cursor-pointer rounded-md px-2 py-1 transition ${
                          isActive
                            ? `${item.color} font-semibold`
                            : "text-gray-300 hover:text-white"
                        }`
                      }
                    >
                      <item.icon className={`w-4 h-4 cursor-pointer ${item.color}`} />
                      {item.title}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
        {/* 🚪 Logout Section */}
        <div className="mb-5 px-3">
          <button
            onClick={handleLogout}
            className="w-full cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>

          </button>
        </div>

      <SidebarRail />
    </Sidebar>
  );
}
