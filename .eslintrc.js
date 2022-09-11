// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'warn',
    'react/prop-types': 0,
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'ignore',
      },
    ],
    'react/destructuring-assignment': 'warn',
    'react/button-has-type': 'warn',
    'no-unused-vars': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/prefer-default-export': 'warn',
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
  },
};
