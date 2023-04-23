import React, { type ReactNode } from "react";

import cn from "@/utils/cn";

export type ContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  className = "",
  children,
  ...props
}) => (
  <div
    className={cn("container mx-auto px-6 py-4 md:py-8 lg:px-0", className)}
    {...props}
  >
    {children}
  </div>
);

export default Container;
