import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//a function that makes sure the action flows through all the reducers
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
    debugger
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}
//anything returned from this funciton will end up as props on the booklist container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all of our reducers]
  //this method sends watches for selectBook to be called, and it sends the returned action to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote booklist form a component to a container - it needs to know aobut the new dispatch method, selectbook.
//make it available as a prop.
//connect takes a fucniton and a component and produces a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
