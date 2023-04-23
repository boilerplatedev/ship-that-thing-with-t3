/* eslint-disable no-void */
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export type WithAuthOptions = {
  LoadingComponent?: React.ComponentType<JSX.IntrinsicAttributes>;
  redirectTo?: string;
};

export const withAuth = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  options?: WithAuthOptions
) => {
  const WithAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const session = useSession();

    useEffect(() => {
      if (!session.data && session.status !== "loading") {
        void router.replace(options?.redirectTo || "/api/auth/signin");
      }
    }, [session, router]);

    if (session.status === "loading") {
      return options?.LoadingComponent ? (
        <options.LoadingComponent />
      ) : (
        // @note: replace with your own catch-all loading component
        <div>Loading</div>
      );
    }

    return session.data ? <Component {...props} /> : null;
  };

  return WithAuth;
};

export const withNoAuth = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  options?: WithAuthOptions
) => {
  const WithNoAuth: React.FC<P> = (props) => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
      if (session.status !== "loading" && session.data) {
        void router.replace(options?.redirectTo || "/");
      }
    }, [session, router]);

    if (session.status === "loading") {
      return options?.LoadingComponent ? (
        <options.LoadingComponent />
      ) : (
        // @note: replace with your own catch-all loading component
        <div>Loading</div>
      );
    }

    return !session.data ? <Component {...props} /> : null;
  };

  return WithNoAuth;
};
