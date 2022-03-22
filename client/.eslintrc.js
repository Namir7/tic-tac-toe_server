module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    // using ^17 version
    'react/react-in-jsx-scope': 'off',

    'no-shadow': 'warn',

    semi: ['error', 'never'],

    // https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    '@typescript-eslint/indent': ['error', 2],
  },

  // https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-unresolved.md
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', 'jsx', '.tsx'],
      },
    },
  },
}
