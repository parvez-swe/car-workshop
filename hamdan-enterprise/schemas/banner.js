export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "largeText2",
      title: "LargeText2",
      type: "string",
    },
    {
      name: "discount",
      title: "Discount",
      type: "string",
    },
  ],
};
