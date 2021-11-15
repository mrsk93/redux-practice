import React from "react";
import { Switch,  Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
// import { Book } from "./components/Book";
import {Book} from "@redux-practice/shared";
import { BooksList } from "./components/BooksList";
import Activity from "./components/Activity";

function App() {
  // React.useEffect(()=>{alert('Hi from sumits react app')})
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Book />
        </Route>
        <Route path="/books">
          <BooksList />
        </Route>
        <Route path="/activity">
          <Activity />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
