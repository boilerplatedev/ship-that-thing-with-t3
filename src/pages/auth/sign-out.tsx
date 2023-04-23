import React, { useEffect, useRef } from "react";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";

import Logo from "@/client/components/common/logo";
import Page from "@/client/components/layouts/page";
import { withAuth } from "@/client/hooks/with-auth";

const SignOut = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (form.current) form.current.submit();
  }, []);

  return (
    <Page
      title="Are you sure you want to sign out?"
      className="animate-background flex min-h-screen w-full items-center justify-center bg-gray-50"
    >
      <div className="flex flex-col space-y-4">
        <Logo className="text-center" />
        <div className="flex items-center justify-center space-x-1">
          <p className="text-xl">Logging you out</p>
        </div>
        <form
          ref={form}
          action="/api/auth/signout"
          method="POST"
          className="hidden"
        >
          <input type="hidden" name="csrfToken" value={csrfToken} />
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

export default withAuth(SignOut);
