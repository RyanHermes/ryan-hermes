const { FlatCompat } = require('@eslint/eslintrc')
const nextPlugin = require('eslint-config-next')
const path = require('path')
const compat = new FlatCompat({
  resolvePluginsRelativeTo: path.dirname(
    require.resolve('eslint-config-next/package.json'),
  ),
})

module.exports = [
  ...compat.config(nextPlugin),
  {
    rules: {
      // Your custom rules here
    },
  },
]
