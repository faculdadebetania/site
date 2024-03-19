/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next', 'prettier'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
