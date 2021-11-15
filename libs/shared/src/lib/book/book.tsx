import React from "react";
import{useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNewBook, deleteLastAddedBook } from "../reducers/add-book-slice";
import {RootState} from '../redux/store'
export function Book() {
const history = useHistory();
  const books = useSelector((state:RootState) => state.books);
  console.log(books)
  const dispatch = useDispatch();
  return (
    <div>
      Books listings are : -
      <div>
        {books.map((book) => {
          return (
            <React.Fragment key={book.createdAt}>
              <span>{book.name}</span> -
              <span>{book.author}</span> -
              <span>{book.publisher}</span> -
              <span>{book.pages}</span> -
              <span>{book.createdAt}</span> -
            </React.Fragment>
          );
        })}
      </div>
      <button
        aria-label="addNewBook"
        onClick={() => dispatch(addNewBook({
          name:"",
          author:"",
          pages:0,
          publisher: "string",
          createdAt: 0
        }))}
      >
        addNewBook
      </button>
      <button
        aria-label="deleteLastAddedBook"
        onClick={() => dispatch(deleteLastAddedBook())}
      >
        deleteLastAddedBook
      </button>
      <button
        aria-label="gotobookList"
        onClick={() => {history.push('/books')}}
      >
        gotobookList
      </button>
      <button
        aria-label="gotoactivity"
        onClick={() => {history.push('/activity')}}
      >
        gotoActivity
      </button>
    </div>
  );
}

export default Book;
