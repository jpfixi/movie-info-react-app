import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Video.css';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youTubeVideoId: undefined,
    };
  }

  componentDidMount() {
    this.getVideoInfo();
  }

  componentDidUpdate(prevProps) {
    const { movieId } = this.props;
    if (movieId && prevProps.movieId !== movieId) {
      this.getVideoInfo();
    }
  }

  // Back up Api_key =edca572261b28b22606113949fb5ce9c
  getVideoInfo() {
    const { movieId } = this.props;
    if (movieId) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb`;
      fetch(url)
        .then(res => res.json())
        .then((r) => {
          this.setState({
            youTubeVideoId: (r.results[0] ? r.results[0].key : undefined),
          });
        });
    }
  }

  render() {
    const { youTubeVideoId } = this.state;
    if (!youTubeVideoId) return null;
    const trailerVideoUrl = `https://www.youtube.com/embed/${youTubeVideoId}`;
    return (
      <section className="Video">
        <h3 className="title">Trailer</h3>
        <iframe title="youTubeVideo" src={trailerVideoUrl} />
      </section>
    );
  }
}

Video.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Video;
