import React, { Component } from 'react';
import axios from "axios";
import './Search.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: ''
    }
  }
  //  input의 value값을 keyword로 준다.
  // input에 onChange
  // form에 onsubmit
  //  keyword는 Home.js 의 getBooks 함수에 query값으로 전달

  keywordChangeHandler = (e) => {
    this.setState({
      keyword: e.target.value
    })
    console.log(this.props.keyword)
  }
  
  keywordSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);

    // 상태값을 onCreate 통하여 부모(Home Component)에게 전달

    this.setState({
      keyword: ''
    })
    // 상태 초기화
    
  }
  
  getBooks = async() => {
    const { keyword } = this.state
    const {
      data: { documents }
    } = await axios.get(
      'https://dapi.kakao.com/v3/search/book.json',{

      params: {
        query: {keyword},
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
  }

  componentDidMount() {
    this.getBooks();
  }

  render () {
    const { keyword } = this.props
    const { keywordSubmitHandler } = this
    const { keywordChangeHandler } = this
    return (
      <section className="search">
        <div className="search_inner_wrap">
          <form onSubmit={keywordSubmitHandler.bind(this)}>
            <input type="text" name="search" placeholder="검색어를 입력하세요." value={keyword} onChange={keywordChangeHandler.bind(this)}></input>
            <button type="submit" className="btn_search">
              <svg data-v-28783d35="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle data-v-28783d35="" cx="11" cy="11" r="6" stroke="#666666" stroke-width="2"></circle>
                <path data-v-28783d35="" d="M16 16L19 19" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </form>
        </div>
      </section>
    );
  }
}
export default Search;

// Home Component에 있던 getBooks function을 Search로 옮겨왔다. (검색결과를 받아 책 목록을 출력할 데이터이기 때문)