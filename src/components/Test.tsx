import type { PropsWithChildren } from "react";

export const Test: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};
