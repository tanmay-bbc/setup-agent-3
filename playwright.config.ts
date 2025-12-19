import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  workers: 1,
  reporter: [],
  projects: [
    { name: 'main', use: { browserName: 'chromium', baseURL: 'https://perflow.brownboxconsulting.com' } },
    { name: 'develop', use: { browserName: 'chromium', baseURL: 'https://preview--perflow.lovable.app/auth' } }
  ],
});
