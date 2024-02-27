import { env } from "@/env.mjs";
import { createClient } from "next-sanity";

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token:
    "skZ27nRXe8s90hGRW0NtbTIQ3dN3Ag98wXmYmW4XWKNyf3olaGVAV20x1TLW2J5Oz87tUQHn7vUfJaKt7RRNLbLDbMb0NsxbXEUBMyFdefooCEXYEMSXJ9vmHPGZhRH1STBAHTQsNzU0yIkZM1E9wpftspb9UdpLUZaFhFy5ALpIvFRRoo3B",
});
