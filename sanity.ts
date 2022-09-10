import sanityClient from "@sanity/client";
import sanityUrlBuilder from "@sanity/image-url";
import sanityJson from "./sanity/sanity.json";

export const client = sanityClient({
  projectId: sanityJson.api.projectId,
  dataset: sanityJson.api.dataset,
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = sanityUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
