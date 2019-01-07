import pxtorem from 'postcss-pxtorem';

export default {
  entry: 'src/index.js',
  disableCSSModules: false,
  publicPath: '/',
  outputPath: './dist',
  // theme: './src/theme.js',
  hash: true,
  // 默认情况下直接支持less, 使用sass, 需要安装node-sass sass-loader
  sass: {},
  // autoprefixer: {
  //     browsers: ['iOS >= 8', 'Android >= 4']
  // },
  // cssModulesExcludes: ['./src/index.css'],
  extraBabelPlugins: [
    'transform-runtime',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ],
  // extraPostCSSPlugins: [
  //     pxtorem({
  //         rootValue: 14,
  //         propWhiteList: []
  //     })
  // ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr']
    }
  }
};
