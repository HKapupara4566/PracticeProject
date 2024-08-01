module.exports = {
  root: true,
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'eslint:recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'unused-imports',
    'import',
    'react-native',
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@globalStyles', './src/globalStyles'],
          ['@constants', './src/constants'],
          ['@screens', './src/screens'],
          ['@styles', './src/styles'],
          ['@redux', './src/redux'],
          ['@navigations', './src/navigations'],
          ['@services', './src/services'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
      },
    ],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': ['off'],
    'import/extensions': 0,
    'react/jsx-filename-extension': [1, {extensions: ['tsx', 'js', 'jsx']}],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
  globals: {
    JSX: true,
  },
};
