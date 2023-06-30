module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
    'warning': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        "typescript.validate.enable": false,
        "javascript.validate.enable": false,
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
