module.exports = ({ env }) => ({
  proxy: true,
  url: env("heroku-strapi-learn.herokuapp.com"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
