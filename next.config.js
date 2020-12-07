// Load env variables automatically (from next secrets or env)
require('dotenv').config();
const withPWA = require('next-pwa');

const getSecret = (key) => {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`ERROR: ${key} is not set.`);
  }

  return process.env[key];
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  publicRuntimeConfig: {
    BASE_URL: getSecret('BASE_URL'),
  },
});
