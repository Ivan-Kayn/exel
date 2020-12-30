// similar to observer pattern, it's function because of function closure
export function createStore(rootReducer, initialState) {
  // this vars are private, in js there no private vars so we need closure for that
  let state = rootReducer({...initialState}, {type: '__INIT__'});
  let listeners = [];


  return { // return public methods
    subscribe(fn) {
      listeners.push(fn);
      return {
        unsubscribe() {
          listeners = listeners.filter(listener => listener !== fn); // fn to unsubscribe from listener
        }
      };
    },
    dispatch(action) { // 'action' is js object with key type for listener we need to use
      state = rootReducer(state, action);
      listeners.forEach(listener => listener(state));
    },
    getState() {
      // to have a new obj, useful because don't let data mute but working with simple obj structures
      return JSON.parse(JSON.stringify(state));
    }
  };
}
