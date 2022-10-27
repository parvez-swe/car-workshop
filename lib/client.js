import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export default sanityClient({
  projectId: "xwx01q1k",
  dataset: "ecommerce",
  useCdn: true,
  apiVersion: "2022-07-15",

  token:
    "skueBRf0b08T4b9swlTCArvyBnRc8A8LypCprBbAyK1Gxpe0YAHKQsLY4H623DgZAIPhVdn78QgX2DAbyebQpo67efEqjpYyfvuUMjPj3H7HimWIFoqYATW9yL8imsIvq0rhPZQJycS125uD69rYEKtd6M0Z7Q0VLRww8nwZna8FZjtenLNX",
});

// const builder = imageUrlBuilder(sanityClient);

// export const urlFor = (source) => builder.image(source);

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source) {
  return builder.image(source);
}