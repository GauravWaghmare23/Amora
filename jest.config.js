module.exports = {
  // This is the essential line:
  preset: 'react-native',
  
  // This is the fix:
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};