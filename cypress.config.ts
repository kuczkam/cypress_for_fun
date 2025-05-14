import { defineConfig } from 'cypress';

export default defineConfig({
    env: {
        username: 'e2e@baselinker.com',
        password: 'TsYJh3QSYq5tPTL4kAXp$',
    },
    video: false,
    numTestsKeptInMemory: 1,
    viewportHeight: 1280,
    viewportWidth: 1920,
    chromeWebSecurity: false,
    scrollBehavior: 'center',
    downloadsFolder: 'cypress/fixtures/downloads',
    trashAssetsBeforeRuns: true,
    e2e: {
        baseUrl: 'https://panel-180.staging.bl-sandbox.com',
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
        retries: {
            runMode: 1,
        },
    },
});
