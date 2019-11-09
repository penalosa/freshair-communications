module.exports = {
  domain: "freshair.org.uk",
  namespaces: ["secrets"],
  dependencies: {
    twit: "^2.2.11"
  },
  handlers: ({ json, html, text }, { secrets }, { twit: Twit }) => ({
    get: {},
    put: {
      "/tweet": async (req, _, log) => {
        let body = await req.json();

        const T = new Twit({
          consumer_key: await secrets.get("twitter_api_key"),
          consumer_secret: await secrets.get("twitter_api_secret_key"),
          access_token: await secrets.get("twitter_access_token"),
          access_token_secret: await secrets.get("twitter_access_token_secret")
        });

        T.post(
          "statuses/update",
          { status: `Live now: ${body.show_name}` },
          function(err, data, response) {
            console.log(data);
          }
        );
      }
    }
  })
};
