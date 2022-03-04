module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b4667dfee8a7d1b990abc4c0434abf03'),
  },
});
