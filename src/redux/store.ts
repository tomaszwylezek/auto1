import { compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from 'redux/rootReducer';
import { IStoreState } from 'model';

const composeEnhancers: typeof compose = composeWithDevTools({});

export const createAppStore = (initialData?: IStoreState): Store<IStoreState> => {
  return createStore(rootReducer(), initialData, composeEnhancers());
};

export const store: Store<IStoreState> = createAppStore();
