module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                }
            }
        },
    ],
    siteMetadata: {
        title: 'Hello API Documentation',
        description: 'Hosted API documentation for Swagger spec out there'
    }
};
