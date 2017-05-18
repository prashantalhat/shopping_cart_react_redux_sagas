# Shopping Cart Using React Redux and Sagas

Sample code to get started with React Redux and Sagas.

## Instructions

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
- `src/services`: The ajax request handlers for talking to the api
- `src/sagas`: The sagas that connect API requests with the Redux store

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
