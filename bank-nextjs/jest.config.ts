import type { Config } from "@jest/types";
export default async (): Promise<Config.InitialOptions> => {
  return {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    transform: {
      "\\.ts$": "ts-jest",
    },
    preset: "ts-jest",
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };
};
