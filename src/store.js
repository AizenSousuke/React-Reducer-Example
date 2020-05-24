import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Create the initial state
const initialState = {};

// Use thunk as the middleware 
const middleware = [thunk];

// Create the store for the whole app using the initial state and implement the middleware
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		// Add this part to allow redux dev tools to be used with the app
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
