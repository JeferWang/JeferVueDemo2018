module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': ['off', 'always'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
