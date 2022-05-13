import * as React from "react";

export default {
  name: "post",
  title: "Post",
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
      type: "cloudinary.asset",
    },
    {
      name: "relatedTopics",
      title: "Topics",
      description: "Topics (tags) that this post is related to",
      type: "array",
      layout: "tags",
      of: [
        {
          type: "reference",
          to: { type: "topic" },
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
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
      const { secure_url = "", derived = [] } = mainImage;
      // Get first derived image if it exists, otherwise use the main image
      const imageUrl = derived?.[0]?.secure_url ?? secure_url;
      return {
        title: title,
        subtitle: slug.current,
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
