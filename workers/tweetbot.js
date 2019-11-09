module.exports = {
  domain: "freshair.org.uk",
  namespaces: ["secrets"],
  handlers: ({ json, html, text }, { secrets }) => ({
    get: {
      "/": async (req, _, log) => {
        return text("Hello World");
      }
    }
  })
};
