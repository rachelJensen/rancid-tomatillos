import './MovieDetailer.css';
import React, { Component } from 'react';
import { fetchData } from '../../apiCalls';
import { formatMovieDetails } from '../../Utils';
import { Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';

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
    // .then(data => console.log(this.state.video, ' :data inside moveidetailer'))
      .catch(err => console.log(err))
      //decide how to handle if no video data comes back
  }

  // componentDidUpdate = () => {
  //   if(this.state.video) {
  //     console.log(this.state.video, ' :videostate inside if conditional')
  //     console.log('videoExist logged if conditional');
  //     return 
  //   } else {
  //     console.log(this.state.video, 'videoExist logged else conditional');
      
  //     return <ReactPlayer url={`https://www.youtube.com/watch?v=${this.state.video[0].key}`} />
  //   }
  // }
 
  render = () => {
    if (this.props.id === NaN || this.state.error) {
      return  <Redirect to='/not-found' />
    }
    // 01ON04GCwKs
    return (
      <section className='movie-info'>
        {console.log(this.state.video[0], 'this.state.video inside moviedetailer render')} 
        {/* {this.videoExist()} */}
        <ReactPlayer url={`https://www.youtube.com/watch?v=01ON04GCwKs`} />
        <img className='backdrop' src={this.state.movie.backdrop_path} alt={this.state.movie.title}/>
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
      </section>
    )
  }
}

export default MovieDetailer;