module.exports = {
  'extends': '@supple-kit/stylelint-config-supple',
  'plugins': [
    'stylelint-use-logical',
  ],
  'rules': {
    'csstools/use-logical': true,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }]
  },
};
