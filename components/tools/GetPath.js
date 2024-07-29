import { usePathname } from "next/navigation";

export const GetPath = () => {
  const path = usePathname();
  const complete = path.split("/").filter((segment) => segment);
  const last = complete[complete.length - 1];
  return { complete, last };
};
