

export default function listsReducer(state = [], action) {
  if (action.type === 'CREATE_LIST_SUCCESS') {
    return state.concat(action.list);
  } else if (action.type === "FETCH_BOARD_SUCCESS") {
    return action.board.lists;
  }else if (action.type === "UPDATE_LIST_SUCCESS") {
    const nonUpdatedLists = state.filter(list => list.id !== action.list.id);
    const updatedLists = nonUpdatedLists.concat(action.list);
    return updatedLists;
  } else {
    return state;
  }
}
