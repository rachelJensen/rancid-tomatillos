import './MovieDetailer.css';
import React, { Component } from 'react';
import { fetchData } from '../../apiCalls';

class MovieDetailer extends Component { 
  constructor() {
    super();
    this.state = {
      movie: {},
      video: [],
      error: '',
    }
  }

  componentDidMount = () => {
    fetchData(this.props.id)
        .then(data => this.setState({ movie: data.movie}))
        .catch(err => this.setState({ error: err }))
    fetchData(`${this.props.id}/videos`)
        .then(data => console.log(data, ' :video data'))
        .catch(err => console.log(err))
        //decide how to handle if no video data comes back
  }
 
  render = () => {
    
    return (
      <section className='movie-info'>
        <img className='backdrop' src={this.state.movie.backdrop_path} alt={this.state.movie.title}/>
        <div className='details-box'>
          <h2>{this.state.movie.title}</h2>
          <p className='tagline'>{this.state.movie.tagline}</p>
          <p className='genres'>Drama, Comedy, Whatever</p>
          <p className='release'>{this.state.movie.release_date}</p>
          <p className='overview'>{this.state.movie.overview}</p>
          <p className='rating'>{this.state.movie.average_rating}</p>
          <p className='budget'>{this.state.movie.budget}</p>
          <p className='runtime'>Runtime: {this.state.movie.runtime} min</p>
        </div> 
      </section>
    )
  }
}

export default MovieDetailer;