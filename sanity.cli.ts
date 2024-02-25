import { defineCliConfig } from "sanity/cli";
import { env } from "@/env.mjs";

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
