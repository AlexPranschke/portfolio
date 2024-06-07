import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { sections } from "@/components/ProgressBar";

export function useScrollProgress(): number {
  const pathname = usePathname();

  const progress = useMemo(() => {
    const section = sections.find(section => section.path === pathname);
    if (section) {
        
      return (section.position / (sections.length - 1)) * 100;
    }
    return 0; // Default to 0 if no matching section
  }, [pathname]);

  return progress;
}