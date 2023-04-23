import { useMemo } from "react";
import { useRouter } from "next/router";

const useRouterParams = () => {
  const router = useRouter();

  const error = useMemo(() => router.query.error || null, [router.query.error]);

  return { query: router.query, error, path: router.pathname };
};

export default useRouterParams;
