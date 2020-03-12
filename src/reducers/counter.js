const initialState = {
  count: 0,
  numberInputted: 0,
  trackClicks: 0
};
// const clickReset = {
//   reset: 0
//};
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        trackClicks: state.trackClicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        trackClicks: state.trackClicks + 1
      };
    case 'INPUT_NUMBER_CHANGE':
      return {
        ...state,
        numberInputted: action.number,
        count: state.count,
        trackClicks: 0 //reset.reset
      };
    case 'INPUT_NUMBER':
      return {
        ...state,
        count: parseInt(state.numberInputted),
        numberInputted: state.numberInputted
      };
    default:
      return state;
  }
}
export default counterReducer;