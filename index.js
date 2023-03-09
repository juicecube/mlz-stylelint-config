module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['after-same-name', 'inside-block', 'blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-no-unknown': null,
    'max-nesting-depth': [
      4,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    'function-url-quotes': null,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['/^my-/'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}
