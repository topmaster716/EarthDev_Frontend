import Constants from "../constants";

const initialState = {
  socket: null,
  channel: null,
  markers: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.SET_MARKERS:
      return Object.assign({}, state, {
        socket: action.socket,
        channel: action.channel
      });

    case Constants.RESET_MARKERS:
      return initialState;

    default:
      return state;
  }
}
