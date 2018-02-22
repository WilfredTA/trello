export const BOARDS_INDEX_URL = '/api/boards';
export const CREATE_BOARD_URL = '/api/boards';
export const boardUrl = function(id) {
  return `/api/boards/${id}`;
}
export const CREATE_LIST_URL = '/api/lists';
export const listUrl = function(id) {
  return `/api/lists/${id}`;
}
