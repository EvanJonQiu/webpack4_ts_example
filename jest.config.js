module.exports = {
  rootDir: ".",
  roots: ["<rootDir>/test/"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  testRegex: "test/(.+)\\.test\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    ".+\\.(css|less|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png)$": "<rootDir>/__mocks__/fileMock.tsx",
    "^@app/(.*)$": "<rootDir>/src/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
