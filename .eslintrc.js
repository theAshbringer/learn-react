// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'warn',
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
  },
};
