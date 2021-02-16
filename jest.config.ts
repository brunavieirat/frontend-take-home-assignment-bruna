module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  // "setupFiles": ["<rootDir>/src/setupTests.ts"],
  "testEnvironment": "jest-environment-jsdom-fifteen",
  "transform": {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.(svg|svg|ttf|png|jpg|jpeg|webp)$':
      '<rootDir>/src/Tests.FileTransformer.js',
    '^.+\\.jsx?$': 'babel-jest',
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
}