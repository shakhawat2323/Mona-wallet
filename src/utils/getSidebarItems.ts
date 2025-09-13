import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routers/adminSidebarItems";

import type { TRole } from "@/Types";
import { userSidebarItems } from "@/routers/userSidebarItems";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.agent:
      return [...adminSidebarItems];
    case role.admin:
      return [...adminSidebarItems];
    case role.user:
      return [...userSidebarItems];
    default:
      return [];
  }
};
