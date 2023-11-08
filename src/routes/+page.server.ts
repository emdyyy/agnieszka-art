import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types.js";

const client = createClient({
  projectId: "ln2b6gii",
  dataset: "production",
  apiVersion: "2023-11-08",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function load({ params }) {
  const headerImageGalleryData: Array<{
    imageTitle: string;
    headerGalleryImage: SanityImageSource;
  }> = await client.fetch(`*[_type == "header-gallery"]{
    imageTitle,
    headerGalleryImage
  }`);

  const mainImageGalleryData: Array<{
    imageTitle: string;
    mainGalleryImage: SanityImageSource;
  }> =
    await client.fetch(`*[_type == "main-gallery"] | order(_createdAt desc) [0...12]{
    imageTitle,
    mainGalleryImage
  }`);

  const headerImageGallery = headerImageGalleryData.map((entry) => ({
    imageTitle: entry.imageTitle,
    imageUrl: urlFor(entry.headerGalleryImage).url(),
  }));

  const mainImageGallery = mainImageGalleryData.map((entry) => ({
    imageTitle: entry.imageTitle,
    imageUrl: urlFor(entry.mainGalleryImage).url(),
  }));

  if (headerImageGallery && mainImageGallery) {
    return {
      headerGalleryImages: headerImageGallery,
      mainGalleryImages: mainImageGallery,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
}
