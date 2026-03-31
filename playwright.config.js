// @ts-check
import { defineConfig, devices } from '@playwright/test';
// module.exports = config;
export default defineConfig({
  testDir: './tests',
  timeout: 100000,
  expect: {
    timeout: 5000,
    
  },
  reporter: [['allure-playwright'], ['html'], ['list']],

//retries: 1,         // Retry the test 1 time if it fails.

  projects: [
    {
      name: 'Desktop Chrome', 
      use: {
        headless: false,                                    // Run the browser in headless mode
        video: 'retain-on-failure',                        // Keep the video on failure
        screenshot: 'only-on-failure',                    // Capture screenshot only on failure
        //trace : 'on',                                  // It will keep the record for all the test cases.
        trace: "retain-on-failure",                     // It will keep a record for only failed Test Cases.
        browserName: 'chromium',                       // Use Chromium browser
        //viewport : { width: 720, height: 720 }      
        // ...devices['Galaxy S8'],                     // Use Galaxy S8 device
        ignoreHTTPSErrors: true,            // Ignore HTTPS errors or Certificate errors
        permissions: ['geolocation']                
      }

    }
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     headless: false,
    //     video: 'retain-on-failure',
    //     screenshot: 'only-on-failure',    // Capture screenshot only on failure
    //     //trace : 'on',                 // It will keep the record for all the test cases.
    //     trace: "retain-on-failure",     // It will keep a record for only failed Test Cases.
    //     browserName: 'webkit',
    //     // ...devices['iPhone 13'],
    //     ignoreHTTPSErrors: true,  
    //     permissions: ['geolocation']      
    //   }

    // }
  ],

});