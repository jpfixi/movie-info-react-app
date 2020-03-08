import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './Components/Search/Search';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Video from './Components/Video/Video';
import Reviews from './Components/Reviews/Reviews';
import logo from './Logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      movieId: undefined,
      msg: undefined,
    };

    this.state = this.initialState;
    this.getMovieId = this.getMovieId.bind(this);
  }

  getMovieId(movieName) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=edca572261b28b22606113949fb5ce9c&query=${movieName}`;
    fetch(url)
      .then(res => res.json())
      .then((r) => {
        if (r.results.length === 0) {
          const message = 'Sorry :(!!!... Not Avaiable!!!!';
          this.setState({
            ...this.initialState,
            msg: message,
          });
        } else {
          this.setState({
            movieId: r.results[0] ? r.results[0].id : undefined,
            msg: undefined,
          });
        }
      });
  }

  render() {
    const { msg, movieId } = this.state;
    return (
      <div className="App">

        <BrowserRouter>
          <React.Fragment>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* <li>
                  <Link to="/movieDetails">Movie Details</Link>
                </li> */}
                <li>
                  <Link to="/video">Video</Link>
                </li>
                <li>
                  <Link to="/review">Review and Comments</Link>
                </li>
              </ul>
            </nav>
            <div className="mainTitle">
              <img className="logo" src={logo} alt="logo" />
              <h1>Movie Review & Info App</h1>
            </div>
            <Search getMovieId={this.getMovieId} movieId={movieId} msg={msg} />
            {/* <Route path="/movieDetails" render={props => <MovieDetails {...props} movieId={movieId} />} /> */}
            <Route path="/video" render={props => <Video {...props} movieId={movieId} />} />
            <Route path="/review" render={props => <Reviews {...props} movieId={movieId} />} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
