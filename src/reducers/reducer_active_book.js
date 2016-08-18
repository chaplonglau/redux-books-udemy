//all reducers have two arugements, current state and a action
//state arguement is not applicaiton state, only the state this reducer is responsible for
//must always return an defined value
export default function (state=null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
