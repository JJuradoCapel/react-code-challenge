module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: [
    'security',
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:security/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['**/*.js'],
  rules: {
    "max-len": "off",
  }
};
