// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true, // ✅ enable NativeWind CSS
});

module.exports = config;
