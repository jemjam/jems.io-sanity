import React from "react";

export default {
  title: "Image with Alt",
  name: "imageWithAlt",
  type: "object",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "cloudinary.asset",
    },
    {
      title: "Alt",
      name: "alt",
      type: "string",
    },
    {
      title: "Caption",
      name: "caption",
      type: "string",
    }
  ],
  preview: {
    prepare(selection) {
      const { alt, caption, image = {} } = selection;
      // This is coming from the cloudinary image asset field
      const { secure_url = "", derived = [] } = image;
      // Get first derived image if it exists, otherwise use the main image
      const imageUrl = derived?.[0]?.secure_url ?? secure_url;
      return {
        title: caption,
        subtitle: alt,
        media: imageUrl ? <img src={imageUrl} alt="mainImage" /> : null,
      };
    },
    select: {
      image: 'image',
      alt: 'alt',
      caption: 'caption',
    }
  }
}