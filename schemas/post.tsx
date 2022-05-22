import commonDocument from "./_commonDocument";

export default commonDocument("Post", [
  {
    name: "relatedTopics",
    title: "Topics",
    description:
      "Topic (references) that this post is related to. This is used to find and filter posts by topic.",
    type: "array",
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
    description:
      "A date and time when this post is available (unavailable until then).",
  },
]);
