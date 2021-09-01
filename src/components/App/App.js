import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetailer from '../MovieDetailer/MovieDetailer';
import { allMovies, singleMovie, singleMoviesVideos } from '../../apiCalls';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieID: '',
      movie: {},
      error: ''
    };
  }

  componentDidMount = () => {
    allMovies()
      .then(data => this.setState({ movies: data.movies}))
      .catch(err => console.log(err, ' :err from app.js'))
    }
    
  findMovie = (id) => {
      this.setState({movieID: id})
      this.hanldeSingleMovie(id)
    }
    
  hanldeSingleMovie = (id) => {
      singleMovie(id)
        .then(data => this.setState({ movie: data.movie}))
        .catch(err => console.log(err))
      singleMoviesVideos(id)
        .then(data => console.log(data, ' :video data'))
  }

  error500 = () => {
    return ( 
      <h1>There is a problem with the server. Please reload or check back at a later time.</h1>//style me
    )
  }

  render() {
    return (
      <main>
        <Header  reload={this.reload}/> 
        <Route exact path='/' render={() => <MoviesContainer movies={this.state.movies} findMovie={this.findMovie} />} />
        <Route exact path='/:id' render={() => <MovieDetailer movie={this.state.movie} hanldeSingleMovie={this.hanldeSingleMovie} />} />
      </main>
    );
  }
}

export default App;
