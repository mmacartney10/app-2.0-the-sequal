module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        cwd: 'babelrc',
        loglevel: 'verbose'
      }
    ]
  ]
};
