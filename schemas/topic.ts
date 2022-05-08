export default {
  name: "topic",
  title: "Topic",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Title (label)",
      type: "string",
    },
    {
      name: "value",
      title: "Slug (value)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
