import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*
smart component

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
*/

/*
 smart vs dumb

 smart component : 
 state와 props를 가지고 있다.

 dumb component(stateless functional) : 
 1. props만 가지고 있다. state를 필요로 하지 않는다.
 2. function render도 없고, 라이프 사이클도 없다.
 3. 클래스가 아니므로 this.props를 삭제해줘야 한다.
*/

// stateless functional
function Movie({ title, poster }) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
}

// stateless functional
function MoviePoster({ poster }) {
    return (
        <img src={poster} alt="Movie Poster" />
    );
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;