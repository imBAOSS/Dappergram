import PhotoFeedReducer from '../reducers/photo_reducer';
import RootReducer from '../reducers/root_reducer';

describe('Reducers', () => {
  describe('PhotoFeedReducers', () => {
    it('exports a function', () => {
      expect(typeof PhotoFeedReducer).toEqual('function');
    });

    it('initializes with an empty state', () => {
      expect(PhotoFeedReducer(undefined, {})).toEqual({});
    });

    describe('handling of RECEIVE_PHOTOS', () => {
      let action, testPhotos

      beforeEach(() => {
        testPhotos = { 1: "hello", 2: "world" };
        action = {
          type: 'RECEIVE_PHOTOS',
          photos: testPhotos
        };
      });

      it('should replace the state with the action\'s photos', () => {
        const state = PhotoFeedReducer(undefined, action);
        expect(state).toEqual(testPhotos);
      });

      it('should not modify old state', () => {
        let oldState = { 3: "wazzupp" };
        const state = PhotoFeedReducer(oldState, action);
        expect(oldState).toEqual({ 3: "wazzupp" });
      });
    });
  });
});
