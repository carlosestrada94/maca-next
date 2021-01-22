import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "e9rz0o73",
  dataset: "production",
  useCdn: false,
});
