module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-logical': {
      preserve: true,
    },
    'postcss-pxtorem': {
      propList: ['*'],
      minPixelValue: 4,
    },
  },
};
