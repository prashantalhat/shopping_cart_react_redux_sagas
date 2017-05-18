# React Starter Kit: 0.1.2

React Starter Kit is a barebones React, Redux and Saga implementation for getting started with a new
project.

## Instructions

Please follow the guide in Confluence, listed here:
https://conflu.beteasy.be/display/DEV/Getting+Started

There includes an automated tool for generating new modules based on the starter kit, and a manual
step-by-step process as well.

Please ensure you install node via NVM as listed in the pre-requisites, otherwise you could run into
permission issues.

## Development

To get started, the places to look first are:

- `src/main.js`: Main entry point for your react app for running in isolation (when using `npm run dev`)
- `public/index.html`: Standard HTML file for testing in isolation, which your react app will run in
- `src/index.js`: The main export point for the name, container component and store (when
    integrating with cb-host and doing `npm publish`)
- `src/containers/TemplateContainer.js`: The main container component that will connect your redux
store with your react components
- `src/components`: Your react components (should not use `connect` from redux with these ones,
    leave that to the container)
- `src/reducers`: Reducers handle updates to the store data via actions
- `src/actions`: Events that are handled by reducers to update the store
- `src/api`: The ajax request handlers for talking to the api
- `src/sagas`: The sagas that connect API requests with the Redux store

For more information, please check out these docs:
- [React + Redux](https://conflu.beteasy.be/pages/viewpage.action?pageId=13240870)
- [Troubleshooting and common problems](https://conflu.beteasy.be/pages/viewpage.action?pageId=14615025)
- [Unit Testing with Mocha and Chai](https://conflu.beteasy.be/display/DEV/Unit+Testing+with+Mocha+and+Chai)
- [NPM Enterprise Server](https://conflu.beteasy.be/display/DEV/NPM+Enterprise+Server)

If you're developing on this starter kit, this functions just like any module, but comes with a
really simple fake "racing page" POC app to test stuff with.  If you add things to this starter kit,
it is highly recommended that you also update the example app to make use of the addition in some
simple way.  If you're developing a module from this starter kit, here are the commands available
to you:

### Install Node packages

```
npm install
```

### Running in the browser

```
npm start
```

Open your browser and load http://127.0.0.1:3000


### Run unit/integration tests

```
npm run test:watch
```

### Run and open docs in browser (using ESDoc)

```
npm run docs
```

### Cleaning out node_modules and dist

```
npm run purge
```

### Running a clean smoke test

```
npm run smoketest
```

### lint all files in your src folder

```
npm run lint
```

### automatically fix JavaScript linting errors

```
npm run lintfix:js
```

## Testing

The main entry points for testing in isolation (before integration) are `src/main.js` and
`public/index.html` - these files are purely for testing purposes.  `main.js` is where you will set
up a store, import your container component and reducers and sagas, combine them and then use React
DOM to render directly into the "root" div in `index.html`.

### Lint all js files inside `/src`

```
npm run lint
```

## Linting

**COMMITS THAT DON'T PASS LINTING WILL BE PREVENTED.**

The file `.eslintrc` is the config file for linting.  Linting works on all files inside `src/` on
every commit and push.  `git commit` and `git push` will be prevented if the linter finds
errors.  You can delete `"precommit": "npm run lint",` in `package.json` if you wish commits to go
ahead despite lint errors.  Feel free to edit the eslintrc file and add a pull request to this
starter kit if you think a rule should be changed.

The eslint packages were up-to-date on 21/02/2017. The husky module was added to `package.json` to
allow precommit hooks.

You will get `npm ERR` in the log if eslint finds errors.

Feel free to customise your npm run commands, for example if you are comfortable linting and
formating on every commit, in package.json:

change this:
    `"precommit": "npm run lint",`
to this:
    `"precommit": "npm run format",`

## Publishing/Releasing

To create a release and publish a module to NPM:

- Ensure you are on a `release` branch that is created based on the latest code from `develop`
branch (i.e `releases/0.1.0`)
- Update the `CHANGELOG.md` file with all the latest changes included in this release
- Update the `README.md` if necessary
- Run the `npm run smoketest` command, which will delete `node_modules` and `dist`, reinstall
dependencies and run `npm run dev`
- Run `npm run test` to make sure all tests pass
- Ensure you have done a manual (or automated) integration test of this module with `cb-host`
- Increment the version with `npm version patch` or `npm version minor` depending on your needs
- Commit, push, and create a PR to `master` branch
- If approved, merge into `master`, and also merge into `develop`
- Checkout `master` branch and run `npm publish` which will run the `npm prepublish` script defined
in package.json (typically runs the build script)

Before publishing this as a real module to be used by cb-host app, you need to make sure your
`src/index.js` file contains everything that is needed.  Similar to `main.js`, except it doesn't
render directly to any div.  Rather, your `index.js` needs to export an object with 3 properties:
`name`, `container` and `store`, which the cb-host app will use to render it into a real
application.  Take a look at the example and compare the differences with the example `main.js` file
to get a better idea.  If you decide not to use a store in your module, you can just leave the
`store` property as an empty object literal.
