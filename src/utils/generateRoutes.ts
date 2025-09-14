import type { ISidebarItem } from "@/Types";

export const generateRoutes = (sidebarItems: ISidebarItem[]) => {
  return sidebarItems.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
      Component: route.component,
      icon: route.icon,
    }))
  );
};
