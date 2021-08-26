import movieData from '../../movieData';
import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetailer from '../MovieDetailer/MovieDetailer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      movieID: 0
    };
  }

  findMovie = (id) => {
    this.setState({movieID: id})
  }

  render() {
    return (
      <main>
        <Header />
        {!this.state.movieID &&  <MoviesContainer movies={this.state.movies} findMovie={this.findMovie} />}
        {this.state.movieID && <MovieDetailer />}
      </main>
    );
  }
}

export default App;
