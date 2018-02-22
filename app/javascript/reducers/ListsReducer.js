export default function listsReducer(state = [], action) {
  if (action.type === 'CREATE_LIST_SUCCESS') {
    return state.concat(action.list);
  } else {
    return state;
  }
}
