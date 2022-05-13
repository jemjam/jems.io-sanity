const siteSettings = {
  title: "Site Settings",
  name: "siteSettings",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Home Page",
      name: "home",
      type: "reference",
      description: "Select a page to use as the homepage.",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      description: "A short description of this site generally.",
    },
  ],
};

export default siteSettings;
