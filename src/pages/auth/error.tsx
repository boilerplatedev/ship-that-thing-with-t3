import React from "react";
import type { NextPage } from "next";
import { type ErrorType } from "next-auth/core/pages/error";
import Link from "next/link";

import Logo from "@/client/components/common/logo";
import Page from "@/client/components/layouts/page";
import useRouterParams from "@/client/hooks/use-router-params";

const NextAuthError: NextPage = () => {
  const { error } = useRouterParams();

  const errors: Record<
    ErrorType,
    {
      heading: string;
      message: JSX.Element;
    }
  > = {
    default: {
      heading: "Oops!",
      message: (
        <div className="text-center">
          <p>
            An unexpected error has occurred. Please try again or contact
            support.
          </p>
        </div>
      ),
    },
    configuration: {
      heading: "Server error",
      message: (
        <div className="text-center">
          <p>There is a problem with the server configuration.</p>
          <p>Check the server logs for more information.</p>
        </div>
      ),
    },
    accessdenied: {
      heading: "Access Denied",
      message: (
        <div className="text-center">
          <p>You do not have permission to sign in.</p>
        </div>
      ),
    },
    verification: {
      heading: "Unable to sign in",
      message: (
        <div className="text-center">
          <p>The sign in link is no longer valid.</p>
          <p>It may have been used already or it may have expired.</p>
        </div>
      ),
    },
  };

  const { heading, message } =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    errors[
      (typeof error === "string"
        ? error
        : error?.[0]
      )?.toLowerCase() as ErrorType
    ] ?? errors.default;

  return (
    <Page
      title={heading}
      className="animate-background flex min-h-screen w-full items-center justify-center bg-gray-50"
    >
      <div className="flex flex-col space-y-4">
        <Logo className="text-center" />
        <div className="flex min-w-[400px] flex-col space-y-4 rounded bg-white px-8 py-6 shadow">
          <h2 className="text-center text-2xl font-bold">{heading}</h2>
          {message}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default NextAuthError;
