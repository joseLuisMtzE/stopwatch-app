// jest.config.js

module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/react-native/dont-cleanup-after-each"],
  // Otros ajustes de configuración de Jest si los tienes
};
