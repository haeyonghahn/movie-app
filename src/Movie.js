import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesElipsis from 'react-lines-ellipsis';

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
function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Moive_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    <LinesElipsis 
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    );
}

// stateless functional
function MoviePoster({ poster, alt }) {
    return (
        <img src={poster} alt="Movie Poster" title={alt} className="Movie_Poster" />
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;