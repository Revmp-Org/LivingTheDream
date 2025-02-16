function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}

export function getSanityEnv() {
  const apiVersion = assertValue(
    process.env.SANITY_STUDIO_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-06",
    "Missing environment variable: SANITY_STUDIO_API_VERSION"
  );

  const dataset = assertValue(
    process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
    "Missing environment variable: SANITY_STUDIO_DATASET"
  );

  const projectId = assertValue(
    process.env.SANITY_STUDIO_ROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    "Missing environment variable: SANITY_STUDIO_ROJECT_ID"
  );

  return {
    apiVersion,
    dataset,
    projectId,
  };
}
