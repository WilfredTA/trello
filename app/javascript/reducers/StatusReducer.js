export default function statusReducer(state, action) {
  if (action.type === 'FETCH_BOARDS_REQUEST') {
    return 'FETCHING_BOARDS';
  } else if (action.type === 'FETCH_BOARDS_SUCCESS') {
    return 'BOARDS_FETCHED_SUCCESSFULLY';
  } else if (action.type === 'FETCH_LISTS_REQUEST') {
    return 'FETCHING_LISTS';
  } else {
    return state;
  }
};
