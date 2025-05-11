const { createRequestHandler } = require('@expo/server/adapter/vercel');

export const maxDuration = 5; // This function can run for a maximum of 5 seconds


module.exports = createRequestHandler({
  build: require('path').join(__dirname, '../dist/server'),
});
