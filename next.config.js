const withImages = require('next-images')

module.exports = withImages({
    esModule: true
})

module.exports = {
    async headers() {
        return [
          {
            source: '/signinTest',
            headers: [
              {
                key: 'withCredentials',
                value: 'true',
              },
            ],
          },
        ]
      }
}
