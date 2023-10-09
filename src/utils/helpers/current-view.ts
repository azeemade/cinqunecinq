import { usePathname } from "next/navigation";
export const CurrentView = () => {
  const pathname = usePathname();
  return pathname.includes("/admin") ? "admin" : "guest";
};
