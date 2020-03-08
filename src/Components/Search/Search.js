import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import '../MovieDetails/MovieDetails.css';
import MovieDetails from '../MovieDetails/MovieDetails';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { movieName: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ movieName: event.target.value });
  }

  handleSubmit(event) {
    const { movieName } = this.state;
    const { getMovieId } = this.props;
    event.preventDefault();

    if (!movieName) return;

    getMovieId(movieName);
  }


  render() {
    const { movieName } = this.state;
    const { msg, movieId } = this.props;
    return (
      <React.Fragment>
        <div className="searchbar">
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="search" name="search" value={movieName} onChange={this.handleChange} />
            <button id="searchBtn" type="submit">Search</button>
          </form>
        </div>
        <section className="MovieDetails">
          <MovieDetails movieId={movieId} />
        </section>
        <section className="errorSection">
          {
          msg ? (

            <div className="error-msg">{msg}</div>

          ) : null
        }
        </section>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  getMovieId: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
  msg: PropTypes.string,
};

Search.defaultProps = {
  msg: undefined,
};

export default Search;
