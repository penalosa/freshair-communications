const Twit = require("twit");

module.exports = {
  domain: "freshair.org.uk",
  namespaces: ["secrets"],
  handlers: ({ json, html, text }, { secrets }) => ({
    get: {
      "/": async (req, _, log) => {
        const T = new Twit({
          consumer_key: await secrets.get("twitter_api_key"),
          consumer_secret: await secrets.get("twitter_api_secret_key"),
          access_token: await secrets.get("twitter_access_token"),
          access_token_secret: await secrets.get("twitter_access_token_secret")
        });
        T.post("statuses/update", { status: "hello world!" }, function(
          err,
          data,
          response
        ) {
          console.log(data);
        });
      }
    }
  })
};
