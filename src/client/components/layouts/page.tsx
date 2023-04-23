import React, { type ReactNode } from "react";
import Head from "next/head";

import { AppClientConfig } from "@/config/app";
import cn from "@/utils/cn";

export type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

const Page: React.FC<PageProps> = ({
  title,
  description = AppClientConfig.description,
  children,
  className = "",
}) => (
  <>
    <Head>
      {/* Ref: https://github.com/vercel/next.js/discussions/38256#discussioncomment-3070196 */}
      <title>{`${title} - ${AppClientConfig.name}`}</title>
      {!!description && <meta name="description" content={description} />}
    </Head>
    <div
      className={cn(
        "h-full scroll-smooth bg-white font-sans antialiased",
        className
      )}
    >
      <div className="flex h-full flex-col">{children}</div>
    </div>
  </>
);

export default Page;
