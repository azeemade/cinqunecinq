import { usePathname } from "next/navigation";
export const currentView = () => {
  const currentRoute = usePathname();
  return currentRoute === "/admin" ? "admin" : "guest";
};
