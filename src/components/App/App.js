import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetailer from '../MovieDetailer/MovieDetailer';
import Error404 from '../Error404/Error404';
import { fetchData } from '../../apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import {formatMovieDetails} from '../../Utils'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieID: '',
      movie: {},
      movieVideos: {},
      error: ''
    };
  }

  componentDidMount = () => {
    fetchData()
      .then(data => this.setState({ movies: data.movies}))
      .catch(err => console.log(err, ' :err from app.js'))
    }
    
  findMovie = (id) => {
      this.setState({movieID: id})
    }
    
  hanldeSingleMovie = (id) => {
      fetchData(id)
        .then(data => this.setState({ movie: data.movie}))
        .catch(err => console.log(err))
      fetchData(`${id}/videos`)
        .then(data => this.setState({ movieVideos: data}))
  }

  // fetchSingleMovieVideos = (id) => {
  //   fetchData(`${id}/videos`)
  //       .then(data => this.setState({ movieVideos: data}))
  // }
  // formatData = () => {
  //   console.log('EUREKA')
  //   // formatMovieDetails(this.state.movie)
  // }

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
            <MovieDetailer movie={(this.state.movie)} videos={this.state.movieVideos} hanldeSingleMovie={this.hanldeSingleMovie} location={match.params.id} /> }/>
          <Route path='*' render={() => 
            <Error404 />} />
        </Switch>
      </main>
    );
  }
}

export default App;