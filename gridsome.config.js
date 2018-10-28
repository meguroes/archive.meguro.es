module.exports = {
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'q7057uwnn7gw',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: 'next.meguro.es',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]}
