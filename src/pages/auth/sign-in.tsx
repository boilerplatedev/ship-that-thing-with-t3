import React from "react";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { type SignInErrorTypes } from "next-auth/core/pages/signin";
import { getCsrfToken } from "next-auth/react";

import Logo from "@/client/components/common/logo";
import Page from "@/client/components/layouts/page";
import useRouterParams from "@/client/hooks/use-router-params";
import { withNoAuth } from "@/client/hooks/with-auth";

// Copied from: https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/core/pages/signin.tsx
const errors: Record<SignInErrorTypes, string> = {
  Signin: "Try signing in with a different account.",
  OAuthSignin: "Try signing in with a different account.",
  OAuthCallback: "Try signing in with a different account.",
  OAuthCreateAccount: "Try signing in with a different account.",
  EmailCreateAccount: "Try signing in with a different account.",
  Callback: "Try signing in with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "The e-mail could not be sent.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  SessionRequired: "Please sign in to access this page.",
  default: "Unable to sign in.",
};

const SignIn: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ csrfToken }) => {
  const { error: errorType } = useRouterParams();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const error =
    (errorType as SignInErrorTypes) &&
    (errors[errorType as SignInErrorTypes] ?? errors.default);

  return (
    <Page
      title="Sign in"
      className="animate-background flex min-h-screen w-full items-center justify-center bg-gray-50"
    >
      <div className="flex flex-col space-y-4">
        <Logo className="text-center" />
        <form
          method="post"
          action="/api/auth/signin/email"
          className="flex min-w-[400px] flex-col space-y-4 rounded bg-white px-8 py-6 shadow"
        >
          <h2 className="text-center text-2xl font-bold uppercase">
            Lets get you in
          </h2>
          {!!error && (
            <div className="rounded border border-red-200 bg-red-100 p-2 text-sm">
              {error}
            </div>
          )}
          <div className="flex w-full flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
              placeholder="john.doe@llmkit.com"
            />
          </div>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <button
            type="submit"
            className="rounded bg-blue-500 py-2 font-bold text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </Page>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}

export default withNoAuth(SignIn);
