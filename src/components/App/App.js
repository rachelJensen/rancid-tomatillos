import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetailer from '../MovieDetailer/MovieDetailer';
import Error404 from '../Error404/Error404';
import { allMovies, singleMovie, singleMoviesVideos } from '../../apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';

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
      <main className="main">
        <Header  /> 
        <Switch>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
          <Route exact path='/movies' render={() => 
            <MoviesContainer movies={this.state.movies} findMovie={this.findMovie} />} />
          <Route exact path='/movies/:id' render={({ match }) => 
            <MovieDetailer movie={this.state.movie} hanldeSingleMovie={this.hanldeSingleMovie} location={match.params.id} /> }/>
          <Route path='*' render={() => 
            <Error404 />} />
        </Switch>
      </main>
    );
  }
}

export default App;
