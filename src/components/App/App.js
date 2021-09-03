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
    };
  }

  componentDidMount = () => {
    fetchData()
      .then(data => this.setState({ movies: data.movies}))
      .catch(err => console.log(err, ' :err from app.js'))
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
            <MovieDetailer id={parseInt(match.params.id)}/> }/>
          <Route path='*' render={() => 
            <Error404 />} />
        </Switch>
      </main>
    );
  }
}

export default App;


// - Styling for home page (Neon Lights)
// - Refactor ApiCalls to one function
// - Error Handling for ApiCalls
// - Scrub Data off api call method inside app.js?
// - Add videos to movieDetailer.js 
// - Remove useEffect() from movieDetailer.js


// findMovie = (id) => {
//     this.setState({movieID: id})
//   }
  
// hanldeSingleMovie = (id) => {
//     fetchData(id)
//       .then(data => this.setState({ movie: data.movie}))
//       .catch(err => this.setState({error: err}))
//     fetchData(`${id}/videos`)
//       .then(data => console.log(data, ' :video data'))
// }

// error500 = () => {
//   return ( 
//     <h1>There is a problem with the server. Please reload or check back at a later time.</h1>//style me
//   )
// }