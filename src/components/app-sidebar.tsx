
// // import { VersionSwitcher } from "@/components/version-switcher"
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

// import { useUserInfoQuery } from "@/Redux/features/auth/auth.api";
// import { getSidebarItems } from './../utils/getSidebarItems';
// import { Link } from "react-router";
// import Monawallet from "./Layout/Monawallet";


// // This is sample data.

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//     const { data: userData } = useUserInfoQuery(undefined);

//   const data = {
//     navMain: getSidebarItems(userData?.data?.role),
//   };
//   return (
//     <div className="">
//           <Sidebar {...props}>
//       <SidebarHeader className="">

//        <div className="flex flex-row justify-center items-center gap-3 py-3">
//          <Logo/>
//          <Monawallet/>
//        </div>
    
//       </SidebarHeader>
//       <SidebarContent>
//         {/* We create a SidebarGroup for each parent. */}
//        {data.navMain.map((item) => (
//           <SidebarGroup key={item.title}>
//             <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {item.items.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild>
//                       <Link to={item.url}>{item.title}</Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         ))}
//       </SidebarContent>
//       <SidebarRail />
//     </Sidebar>
//     </div>

//   )
// }
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
import { Link } from "react-router";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);

  const navMain = getSidebarItems(userData?.data?.role);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex flex-row justify-center items-center gap-3 py-3">
          <Logo />
          <Monawallet />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#0F1535]">
        {navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="flex items-center gap-2">
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
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
