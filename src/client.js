import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "wqc9yul6",
  dataset: "production",
  useCdn: true,
});
