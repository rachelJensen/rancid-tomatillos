// import movieData from '../../movieData';
import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetailer from '../MovieDetailer/MovieDetailer';
import { allMovies, singleMovie } from '../../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieID: 0,
      movie: {}
    };
  }

  reload = () => {
    this.setState({ movieID: 0 })
  }

  componentDidMount = () => {
    allMovies()
      .then(data => this.setState({ movies: data.movies}))
  }

  findMovie = (id) => {
    this.setState({movieID: id})
    this.hanldeSingleMovie(id)
  }
  
  hanldeSingleMovie = (id) => {
    singleMovie(id)
      .then(data => this.setState({ movie: data.movie}))
  }

  render() {
    return (
      <main>
        <Header reload={this.reload} />
        {!this.state.movieID &&  <MoviesContainer movies={this.state.movies} findMovie={this.findMovie} />}
        {this.state.movieID && <MovieDetailer movie={this.state.movie} />}
      </main>
    );
  }
}

export default App;
