import { HiExternalLink } from "react-icons/hi";
import { RiLinkUnlink, RiLinkUnlinkM } from "react-icons/ri";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Strike", value: "strike-through" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "link",
            type: "object",
            title: "External link",
            blockEditor: { icon: HiExternalLink },
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                description: "A remote link to content on a different website.",
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            blockEditor: { icon: RiLinkUnlinkM },
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                description: "A reference to content in this site",
                to: [
                  { type: "post" },
                  { type: "page" },
                  // other types you may want to link to
                ],
              },
            ],
          },
          {
            name: "localLink",
            type: "object",
            title: "Local link",
            blockEditor: { icon: RiLinkUnlink },
            fields: [
              {
                name: "href",
                type: "string",
                title: "Path (href)",
                description:
                  "A string representing the location pathname (with optional search and hash)",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      title: "Image with Alt",
      type: "imageWithAlt",
      description: "Link an asset from cloudinary and add optional alt text",
    },
  ],
};
