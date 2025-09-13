import Bookings from "@/components/pages/Admin/Bookings";
import type { ISidebarItem } from "@/Types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Bookings",
        url: "/user/bookings",
        component: Bookings,
      },
    ],
  },
];
