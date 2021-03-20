module.exports = {
  mount: {
    src: {
      url: '/dist'
    },
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations:
    public: {
      url: '/',
      static: true,
      resolve: false
    }
  },
  buildOptions: {
    baseUrl: '/tictactoe'
  },
  alias: {
    'src/': './src/',
    types: './types'
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh'
  ]
}
