module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  bracketSpacing: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ['^react$', '<THIRD_PARTY_MODULES>', '^[./]'],
};
