import movieData from '../../movieData';
import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    };
  }

  render() {
    return (
      <main>
        <Header />
        <MoviesContainer movies={this.state.movies} />
      </main>
    );
  }
}

export default App;
