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

  componentDidMount = () => {
    allMovies()
      .then(data => this.setState({ movies: data.movies}))
  }

  findMovie = (id) => {
    // console.log('id <<<<<<:', id);
    this.setState({movieID: id})// changes the conditional rendering for movieContainer
    this.hanldeSingleMovie(id)
  }
  
  hanldeSingleMovie = (id) => {
    singleMovie(id)
      // .then(data => data)
      .then(data => this.setState({ movie: data.movie}))
      // .then(data => console.log(data, ': DATA INSIDE HANDLESINGLEMOVIE'))
      // .then(data => this.setState({ singleMovie: data }))
      // .then(console.log(this.state.singleMovie))
  }

  render() {
    return (
      <main>
        <Header />
        {!this.state.movieID &&  <MoviesContainer movies={this.state.movies} findMovie={this.findMovie} />}
        {this.state.movieID && <MovieDetailer movie={this.state.movie} />}
      </main>
    );
  }
}

export default App;
