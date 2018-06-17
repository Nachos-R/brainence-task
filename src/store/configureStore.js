import { createStore, combineReducers } from 'redux';
import addReducer from '../reducers/add';
import selectReducer from '../reducers/select';
import loginReducer from '../reducers/login';
import getDataReducer from '../reducers/get';
import showDataReducer from '../reducers/show';
import photosReducer from '../reducers/photos';
import randPhotosReducer from '../reducers/randPhotos';

export default () => {
  const store = createStore(
    combineReducers({
      added: addReducer,
      select: selectReducer,
      login: loginReducer,
      getData: getDataReducer,
      showData: showDataReducer,
      photos: photosReducer,
      randPhotos: randPhotosReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};