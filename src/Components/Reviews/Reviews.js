import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Review.css';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    this.getReviewInfo();
  }

  componentDidUpdate(prevProps) {
    const { movieId } = this.props;
    if (movieId && prevProps.movieId !== movieId) {
      this.getReviewInfo();
    }
  }

  getReviewInfo() {
    const { movieId } = this.props;
    if (movieId) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=edca572261b28b22606113949fb5ce9c`;
      fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            reviews: data.results ? data.results : [],
          });
        });
    }
  }

  render() {
    const { reviews } = this.state;
    if (reviews.length === 0) {
      return (
        <section className="noreview">
          <h3 className="title">
         No comments found for this movie.!!!!!!!
          </h3>

        </section>

      );
    }

    return (
      <section className="review">
        <h3 className="title">
        Reviews
        </h3>
        {reviews.map(r => (
          <div key={r.id}>
            <p>{r.content}</p>
            <p className="author">
--
              {r.author}
            </p>
          </div>
        ))}
      </section>

    );
  }
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
