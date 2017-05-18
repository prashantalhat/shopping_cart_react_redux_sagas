# 0.2.3 (15/05/2017)

- Change linting to use npm packages for CrownBet for ESLint and stylelint

# 0.2.2 (30/03/2017)

- Change license to `UNLICENSED`
- Updated utils-test and crownbet-frontend versions to be the latest
- Updated ESLint version to prevent issues with Airbnb config
- Downgraded `eslint-plugin-jsx-a11y` version to prevent issues with airbnb
- Updated `.editorconfig` to ensure json files use 2 spaces for indentation
- Locked version of Airbnb config
- Updated `.stylelintrc` file to remove commented out things which were invalid JSON
- Updated ESLint config to allow long lines in `it()` test cases
- Updated ESLint config to require parenthesis for arrow functions using `{}`
- Updated ESLint config to not require descriptions for params and return JSDoc statements
- Updated ESLint config to allow `object` and `array` PropTypes, but disallow `any` PropTypes

# 0.2.1 (07/03/2017)

- Added Nyc/istanbull coverage reporter
- Updated esdoc auto documentation defaults

# 0.2.0 (21/02/2017)

##  DevDependencies added/updated

- Added husky npm package
- updated eslint
- updated eslint-loader
- updated eslint-plugin-import
- updated eslint-plugin-react

# 0.1.3 (27/02/2016)

Features:

- Added utils-test npm package
- Removed css null compiler and used test-ignore in mocha.opts

# 0.1.1 (8/07/2016)

Fixes:

- Added release and publish instructions
- Re-added superagent, since removing it broke mocks

# 0.1.0 (30/06/2016)

Features:

- Starting POC application based on "Racing"
- React
- Redux
- Sagas
- Mocha and Chai for testing
- Simple table components
- Webpack configs for dev and production
- ESDoc generator
- No more react-router (not necessary for now)
- Less preprocessor
- Basic less styles
- Main.js for testing, and a public index.html file for testing

## Dependencies removed from the previous version

Dependencies

- moment
- moment-duration-format

DevDependencies

- extract-text-webpack-plugin
- rimraf
