import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./App";
import { indexTodo } from "./apis/index";

import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(indexTodo());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
