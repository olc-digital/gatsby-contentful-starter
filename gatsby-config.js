/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'fs49q9bbfljm',
        accessToken: 'S47diAbSlT3ovhvTwXgq_Om5wis_coQQV21c3KVkfBc',
      },
    },
  ],
};
