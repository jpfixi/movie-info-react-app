import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CastAndCrew from '../CastAndCrew/CastAndCrew';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      movieDetails: null,
      genres: [],
      cast: [],
      crew: [],
    };

    this.state = this.initialState;
  }

  componentDidMount() {
    this.getCastAndCrewInfo();
    this.getMovieFullInfo();
  }

  componentDidUpdate(prevProps) {
    const { movieId } = this.props;
    if (movieId && prevProps.movieId !== movieId) {
      this.getCastAndCrewInfo();
      this.getMovieFullInfo();
    }
  }

  // Api key -edca572261b28b22606113949fb5ce9c
  // 15d2ea6d0dc1d476efbca3eba2b9bbfb
  getCastAndCrewInfo() {
    const { movieId } = this.props;
    if (movieId) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=edca572261b28b22606113949fb5ce9c`;
      fetch(url)
        .then(res => res.json())
        .then((r) => {
          this.setState({
            cast: r.cast ? r.cast : [],
            crew: r.crew ? r.crew : [],
          });
        });
    }
  }

  getMovieFullInfo() {
    const { movieId } = this.props;
    if (movieId) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=edca572261b28b22606113949fb5ce9c&append_to_response=videos,images`;
      fetch(url)
        .then(res => res.json())
        .then((r) => {
          this.setState({
            movieDetails: r,
            genres: r.genres ? r.genres : [],
          });
        });
    }
  }

  render() {
    const {
      movieDetails, genres, cast, crew,
    } = this.state;
    const castDetails = cast.slice(0, 5);
    if (!movieDetails) return null;

    const posterUrl = `https://image.tmdb.org/t/p/w500${
      movieDetails.poster_path
    }`;

    return (
      <section className="MovieDetails">
        <img src={posterUrl} alt="Not available" />
        <article>
          <p>
            <strong className="header">Title: </strong>
            {movieDetails.title}
          </p>
          <p>
            <strong className="header">Overview: </strong>
            {movieDetails.overview}
          </p>
          <div className="metrics">
            <p>
              <strong className="header">Ratings: </strong>
              {movieDetails.vote_average}
            </p>
            <p>
              <strong className="header">Votes: </strong>
              {movieDetails.vote_count}
            </p>
          </div>
          <div className="metrics">
            <p>
              <strong className="header">Budget: </strong>
              {movieDetails.budget}
            </p>
            <p>
              <strong className="header">Revenue: </strong>
              {movieDetails.revenue}
            </p>
          </div>
          <div className="metrics">
            <p>
              <strong className="header">Release Date: </strong>
              {movieDetails.release_date}
            </p>
            <p>
              <strong className="header">Duration:</strong>
              {movieDetails.runtime}
            </p>
          </div>

          <div className="genres-container">
            <strong className="header"> Genres:</strong>
            <div className="genres">
              {genres.map(r => (
                <p key={r.id}>{`${r.name} |`}</p>
              ))}
            </div>
          </div>
        </article>
        <CastAndCrew cast={castDetails} crew={crew} />
      </section>
    );
  }
}

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetails;
