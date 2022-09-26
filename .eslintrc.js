module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'airbnb',
    'plugin:react/jsx-runtime',
    'eslint:recommended',
  ],
  plugins: ['react', 'testing-library', 'jest-dom'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'comma-dangle': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'jsx-quotes': 'off',
    'no-debugger': 'warn'
  },
}
