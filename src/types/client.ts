/* eslint-disable @typescript-eslint/no-unused-vars */
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import { type AppRouter } from "@/server/api/root";

// type inference: https://trpc.io/docs/server/infer-types#inference-helpers
type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;
