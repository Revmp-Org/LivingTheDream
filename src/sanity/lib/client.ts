import { createClient } from 'next-sanity'
import { getSanityEnv } from "../env";

const { projectId, dataset, apiVersion } = getSanityEnv();

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
})
