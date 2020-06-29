import React from 'react';
import "./home.css";

function Home () {
  return (
    <div className="inner_wrap">
      <h1 className="home_title">읽는다</h1>
      <button className="btn_login">로그인</button>
      <a href="/" className="signup">회원가입</a>
    </div>
  )
}

export default Home;