module.exports = ({ env }) => ({
  proxy: true,
  url: env("heroku-strapi-learn.herokuapp.com"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
