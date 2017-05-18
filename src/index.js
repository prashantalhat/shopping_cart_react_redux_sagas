// main exports should go here in the format of {container, store, name}
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import TemplateContainer from './containers/TemplateContainer';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);

// The name should be the same as what is in package.json
const name = '@crownbet/redux-starter-kit';

const container = TemplateContainer;

// If you're not gonna use a store, you can just make this an empty object
// Like {}, as the host app expects something to be here
const store = createStore(
    reducer,
    compose(
        applyMiddleware(createSagaMiddleware(watchLoadData)),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);

export default { name, container, store };
