import React from "react";
import axios from "axios";
import Home from "./components/Home"
import "./App.css";

class App extends React.Component {
  state = {
    isloading: true,
    books: []
  };

  getBooks = async() => {
    const {
      data: { documents }
    } = await axios.get(
      'https://dapi.kakao.com/v3/search/book.json',{

      // 끝에 .json 을 붙힌다!
      // books.data.documents : 내가 books라고 이름지은 json정보의 .data.documents에 책 검색결과가 배열 형태로 담겨있다.
      // ES6 : { data: { documents }} = ES5 : books.data.documents

      params: {
        query: '해리포터',
        size: 50
      },
      meta: {
        total_count: 100,
        pageable_count: 100,
        is_end: false

        // 여러 page를 받아오고 싶은데, 아직 손을 못댔다.
      },
      headers: {
      Authorization: "KakaoAK da93584ea85aa1a2d72500c3bd9ed51c"
      }
    });
    console.log(documents)
    this.setState({ books : documents, isloading : false })
    // setState : 내가 활용할 정보를 원하는 정보, json으로 받아온 정보로 변경하여 다시 state에 할당
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    const { isloading } = this.state;
    return (
        <section className="container">
          {isloading 
            ? (
            <div className="loader">
              <span className="loader__text">"도서 목록을 불러오는 중입니다."</span>
            </div>
            ) : (
              <section className="home">
                <Home />
              </section> 
          )}
        </section>
)}}

export default App;
