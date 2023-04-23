import React from "react";
import Link from "next/link";

import { AppClientConfig } from "@/config/app";
import cn from "@/utils/cn";

export type LogoProps = {
  href?: string;
  className?: string;
  textClassName?: string;
};

const Logo: React.FC<LogoProps> = ({
  className,
  href = "/",
  textClassName,
}) => (
  <Link href={href} className={className}>
    <h1
      className={cn(
        "font-display text-2xl font-extrabold text-blue-500 lg:text-4xl",
        textClassName
      )}
    >
      {AppClientConfig.name}
    </h1>
  </Link>
);

export default Logo;
