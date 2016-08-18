export function selectBook(book) {
  //selectbook is an action creator, it needs to return an action
  //an action is an object with a type property (type, and a payload)
  //payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
