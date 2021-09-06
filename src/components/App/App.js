import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetailer from '../MovieDetailer/MovieDetailer';
import Error404 from '../Error404/Error404';
import { fetchData } from '../../apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loadingError: ''
    };
  }

  componentDidMount = () => {
    fetchData()
      .then(data => this.setState({ movies: data.movies}))
      .catch(err => this.setState({ loadingError: err.message }))
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
            <MoviesContainer movies={this.state.movies} loadingError={this.state.loadingError}/>} />
          <Route exact path='/movies/:id' render={({ match }) => 
            <MovieDetailer id={parseInt(match.params.id)}/> }/>
          <Route exact path='/not-found' render={() => 
            <Error404 />} />
          <Route path='*' render={() => 
            <Error404 />} />
        </Switch>
      </main>
    );
  }
}

export default App;

// Rachel - error handling (stlying eror page)
// Steven - stlying on home page with neon 
// Steven - embed movies onto page
// Rachel - cypress testing
// - proptypes