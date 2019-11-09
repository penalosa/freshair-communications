module.exports = {
  domain: "example.com",
  namespaces: ["secrets"],
  handlers: ({ json, html, text }, { secrets }) => ({
    get: {
      "/": async (req, _, log) => {
        return text("Hello World");
      }
    }
  })
};
