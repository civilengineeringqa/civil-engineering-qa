module.exports = {
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml' },
          { key: 'X-Robots-Tag', value: 'all' },
        ],
      },
    ];
  },
};
