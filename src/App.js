import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/neo-trinity-the-matrix-1566335316.jpg?crop=0.488xw:0.976xh;0,0&resize=768:*"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
  }
];

class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()

  // Update : 
  // 1. componentWillReceiveProps() : 컴포넌트가 새로운 props를 받았다는 의미이다.
  // 2. shouldComponentUpdate() : 리액트는 old props, 새로운 props를 살펴본 다음에 이전과 새로운 props가 다르면,
  // 리액트는 '업데이트 = true'라고 생각한다. shouldComponentUpdate() == true. 그러면 componentWillUpdate로 넘어간다.
  // 3. componentWillUpdate() :
  // 예를 들어, 이 부분에서 어플리케이션에 spinner를 붙일 수 있다.
  // 4. render() 
  // 5. componentDidUpdate() :
  // 예를 들어, 이 부분에서 업데이트 이후에는 spinner하던 '로딩 중' 메세지나 아이콘을 숨긴다.

  // 만약 영화 어플리케이션을 만들면서 will mount를 진행할 때
  // api에 작업을 요청하는 부분이다.
  componentWillMount() {
    console.log('will mount');
  }

  render() {
    console.log('did render');
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }

  // render에서 작업 수행이 완료되면, 데이터 관련된 작업을 진행하는 부분이다.
  componentDidMount() {
    console.log('did mount');
  }
}

export default App;
