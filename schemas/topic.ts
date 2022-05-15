export default {
  name: "topic",
  title: "Topic",
  type: "document",
  fields: [
    {
      name: "Title",
      title: "Title (label)",
      type: "string",
      description: "Title as displayed in tag and topic pages.",
    },
    {
      name: "slug",
      title: "Slug (value)",
      type: "slug",
      description: "Slug used as reference or for part of the topic URL.",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      description: "A brief description of the topic displayed on topic pages.",
      type: "text",
    },
  ],
};
