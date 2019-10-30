import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails";
import FilmListing from "./FilmListing";

class App extends Component {
  render() {
    const { films } = this.props;

    return (
      <div className="film-library">
        <FilmListing films={films} />
        <FilmDetails />
      </div>
    );
  }
}

export default App;
