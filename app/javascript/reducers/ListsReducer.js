
const state = [{title: "List 1", board_id: 1}]
export default function listsReducer(state, action) {
  if (action.type === 'CREATE_LIST_SUCCESS') {
    return state.concat(action.list);
  } else {
    return state;
  }
}
