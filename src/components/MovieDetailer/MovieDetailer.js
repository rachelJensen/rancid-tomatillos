import './MovieDetailer.css';
import React, { Component } from 'react';
import { fetchData } from '../../apiCalls';
import { formatMovieDetails } from '../../Utils';
import { Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import Error404 from '../Error404/Error404';

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
      .then(data => this.setState({ movie: formatMovieDetails(data.movie)}))
      .catch(err => this.setState({ error: err }))
    fetchData(`${this.props.id}/videos`)
      .then(data => this.setState({ video: data.videos}))
      .catch(err => console.log(err))
  }

 
  render = () => {
    if (this.props.id === NaN || this.state.error) {
      return  <Error404 errorType={this.state.error} />
    }

    return (
      <section className='movie-info'>
        <img className='backdrop' src={this.state.movie.backdrop_path} alt={this.state.movie.title}/>
        <div className='details-container'>
          <div className='details-box'>
            <h2>{this.state.movie.title}</h2>
            <p className='tagline'>{this.state.movie.tagline}</p>
            <p className='genres'>{this.state.movie.genres}</p>
            <p className='release'>{this.state.movie.release_date}</p>
            <p className='overview'>{this.state.movie.overview}</p>
            <p className='rating'>Average Rating {this.state.movie.average_rating}</p>
            <p className='budget'>{this.state.movie.budget}</p>
            <p className='revenue'>{this.state.movie.revenue}</p>
            <p className='runtime'>{this.state.movie.runtime}</p>
          </div> 
          {this.state.video[0] && 
          <div className='video-wrapper'>
            <ReactPlayer 
              className='react-player'
              url={`https://www.youtube.com/watch?v=${this.state.video[0].key}`}
              width='100%'
              height='100%' />
          </div>}
        </div>
      </section>
    )
  }
}

export default MovieDetailer;