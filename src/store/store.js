import { compose, applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root.saga";

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const sagaMiddleware = createSagaMiddleware();
const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
