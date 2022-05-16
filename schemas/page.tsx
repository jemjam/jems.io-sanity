import * as React from "react";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "imageWithAlt",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    prepare(selection) {
      const { title, slug, mainImage = {} } = selection;
      // This is coming from the cloudinary image asset field
      const { image = {} } = mainImage;
      const { secure_url = "", derived = [] } = image;
      // Get first derived image if it exists, otherwise use the main image
      const imageUrl = derived?.[0]?.secure_url ?? secure_url;
      return {
        title: title,
        subtitle: slug?.current,
        media: imageUrl ? <img src={imageUrl} alt="mainImage" /> : null,
      };
    },
    select: {
      title: "title",
      slug: "slug",
      mainImage: "mainImage",
    },
  },
};
