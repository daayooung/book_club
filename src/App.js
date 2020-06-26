import React from "react";
import axios from "axios";
import Book from "./Book";
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
      params: {
        query: '안녕',
        size: 50
      },
      meta: {
        total_count: 100,
        pageable_count: 100,
        is_end: false
      },
      headers: {
      Authorization: "KakaoAK da93584ea85aa1a2d72500c3bd9ed51c"
      }
    });
    console.log(documents)
    this.setState({ books : documents, isloading : false })
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    const { isloading, books } = this.state;
    return (
      <section className="container">
        {isloading 
          ? (
          <div className="loader">
            <span className="loader__text">"도서 목록을 불러오는 중입니다."</span>
          </div>
          ) : (
            <ul className="books">
              { books.map(book => (
            <Book 
              key={book.isbn} 
              id={book.isbn} 
              title={book.title} 
              authors={book.authors} 
              publisher={book.publisher} 
              publication_date={book.datetime}
              contents={book.contents}
              price={book.price}
              bookcover={book.thumbnail}
            />       
        ))}
            </ul>
          )}
      </section>
    )
  }
}

export default App;
