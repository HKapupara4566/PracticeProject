module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-private-methods', {loose: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@globalStyles': './src/globalStyles',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@redux': './src/redux',
          '@navigations': './src/navigations',
          '@services': './src/services',
        },
      },
    ],
    // ... other plugins
  ],
};
