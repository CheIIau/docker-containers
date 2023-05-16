module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['solid'],
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:solid/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: ['tsconfig.json']
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'warn',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-extra-boolean-cast': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true
      }
    ]
    // '@typescript-eslint/no-misused-promises': [
    //   'error',
    //   {
    //     checksVoidReturn: {
    //       attributes: false
    //     }
    //   }
    // ]
  }
}
