export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy', // Mock CSS imports
      '^@/(.*)$': '<rootDir>/src/$1'        // Alias for src
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
  };