import React from "react";
import { usePathname } from "next/navigation";

export const GetPath = () => {
  const path = usePathname();
  const pathSegments = path.split("/").filter((segment) => segment);

  return pathSegments;
};
