Different command line options 

Run a specific test 
npx playwright test <filepath>

Tags
include the tag @smoke/@reg
npx playwright test --grep "smoke"

skip the tagged tests
npx playwright test --grep-invert "smoke"

Run a test in headed mode
npx playwright test <filepath> --headed

Run a test in specific browser
npx playwright test <filepath> --project chromium

Run the code in debug
npx  playwright test <file path> --debug

retries
You can set all these options in playwright.config.js
npx  playwright test <file path> --project chromium --headed --retries 1


trace:
You can set all these options in playwright.config.js
npx  playwright test <file path> --project chromium --headed --trace off
npx  playwright test <file path> --project chromium --headed --trace on
npx  playwright test <file path> --project chromium --headed --trace on-first-retry

Code generator
npx playwright codegen

code generator with a url
npx playwright codegen google.com