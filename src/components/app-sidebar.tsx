
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
// } from "@/components/ui/sidebar"
// import Logo from "@/assets/Icons/Logo"
// import Monawallet from "./Layout/Monawallet"

// import { useUserInfoQuery } from "@/Redux/features/auth/auth.api";
// import { getSidebarItems } from "@/utils/getSidebarItems";
// import { Link, NavLink } from "react-router";

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   const { data: userData } = useUserInfoQuery(undefined);

//   const navMain = getSidebarItems(userData?.data?.role);

//   return (
//     <Sidebar {...props}>
//       <SidebarHeader>
//         <div className="flex flex-row justify-center items-center gap-3 py-3">
//           <Logo />
//           <Monawallet />
//         </div>
//       </SidebarHeader>

//       <SidebarContent className="bg-[#0F1535]">
//         {navMain.map((group) => (
//           <SidebarGroup key={group.title}>
//             <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {group.items.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild>
//                       <Link to={item.url} className="flex items-center gap-2">
//                         <item.icon className="w-4 h-4" />
//                         {item.title}
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         ))}
//         <div className="flex flex-col justify-center  px-5 gap-5">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/features">Features</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//         <NavLink to="/faq">FAQ</NavLink>
//         <NavLink to="/login">LoginPage</NavLink>
//         <NavLink to="/register">RegisterPage</NavLink>
//       </div>
//       </SidebarContent>
   

//       <SidebarRail />


//     </Sidebar>
//   );
// }
// #################### Secend code 
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

import { useUserInfoQuery } from "@/Redux/features/auth/auth.api";
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
    const handleLogout = () => {
    // example: dispatch(logoutUser())
    console.log("Logging out...");
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
                        className="flex items-center gap-2 hover:text-blue-400 transition"
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
                        `flex items-center gap-2 rounded-md px-2 py-1 transition ${
                          isActive
                            ? `${item.color} font-semibold`
                            : "text-gray-300 hover:text-white"
                        }`
                      }
                    >
                      <item.icon className={`w-4 h-4 ${item.color}`} />
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
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>

      <SidebarRail />
    </Sidebar>
  );
}
