

export default function listsReducer(state = [], action) {
  if (action.type === 'CREATE_LIST_SUCCESS') {
    return state.concat(action.list);
  } else if (action.type === "FETCH_BOARD_SUCCESS") {
    return action.board.lists;
  }else {
    return state;
  }
}
