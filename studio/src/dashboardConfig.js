export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "620a8566fa2fee33abb0a253",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-bxa7xkfc",
                  apiId: "63ba2632-9a40-46d0-b88a-88f0d34724aa",
                },
                {
                  buildHookId: "620a8566c1c59f3a94ea6681",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-g9sgtumi",
                  apiId: "3ec062ed-e484-4b4e-b440-7cc0b369241b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/AmirAbbas44m/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-g9sgtumi.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
