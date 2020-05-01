import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  /*
  Render : 
  1. componentWillMount() :
  만약 영화 어플리케이션을 만들면서 will mount를 진행할 때 api에 작업을 요청하는 부분이다.
  2. render() : 
  3. componentDidMount() :
  render에서 작업 수행이 완료되면, 데이터 관련된 작업을 진행하는 부분이다.

  Update : 
  1. componentWillReceiveProps() : 컴포넌트가 새로운 props를 받았다는 의미이다.
  2. shouldComponentUpdate() : 리액트는 old props, 새로운 props를 살펴본 다음에 이전과 새로운 props가 다르면,
  리액트는 '업데이트 = true'라고 생각한다. shouldComponentUpdate() == true. 그러면 componentWillUpdate로 넘어간다.
  3. componentWillUpdate() :
  예를 들어, 이 부분에서 어플리케이션에 spinner를 붙일 수 있다.
  4. render() 
  5. componentDidUpdate() :
  예를 들어, 이 부분에서 업데이트 이후에는 spinner하던 '로딩 중' 메세지나 아이콘을 숨긴다.
  */

  // state를 변경하면 새로운 state와 함께 render가 다시 작동된다.
  state = {

  }

  componentDidMount() {
    setTimeout(() => {
      // state를 업데이트하려면 setState()를 사용해야 한다.

      /*
      '...'의 의미는 이전 것을 남기고 movies를 추가할 수 있도록 한다.
      이것을 이용해 페이스북이나 인스타그램처럼 무한 스크롤을 생성할 수 있다.
      */
      // ...this.state.movies,

      /*
      {
        title: "Matrix",
        poster: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/neo-trinity-the-matrix-1566335316.jpg?crop=0.488xw:0.976xh;0,0&resize=768:*"
      },
      */
      this._getMovies();

    }, 5000);
  }

  // 언더바는 리액트 기능과 유저 기능에 차이를 표시하기 위함이다.
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie
        title={movie.title} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  // async : 비동기 방식으로 함수를 실행한다.
  _getMovies = async () => {
    /*
    _callApi 작업이 '성공적 수행'이 아니라 
    작업이 '완료'되기 전까지 return 값이 무엇이든 movies에 설정된다.
    그리고나서 App 컴포넌트의 setState를 movie로 한다.
    setState은 _callApi 작업이 완료되기 전까지는 실행되지 않는다.
    */
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    /*
    fetch : 뭔가를 잡는다.
    Promise : 비동기 방식으로 다른 작업을 계속 스케줄할 수 있도록 한다.
    영화 api 사이트 : https://yts.mx/api#list_movies
    */
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count")
            // then은 fetch가 성공적으로 완료되면 수행된다. 
            .then(photato => photato.json())
            .then(json => json.data.movies)
            // catch는 위에서 오류가 발생하면 수행된다.
            .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {/* 데이터가 없을 때 'Loading을 띄우고, 있으면 영화정보가 보이도록 한다. */}
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }

}

export default App;
