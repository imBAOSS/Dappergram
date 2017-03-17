import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotoFeedReducer from './photo_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photoFeed: PhotoFeedReducer,
  user: UserReducer
});

export default RootReducer;
