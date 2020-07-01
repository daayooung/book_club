import React from "react";
import Search from "./Search";
import "./Home.css";

class Home extends React.Component {
  keywordCreateHandler = (data) => {
    console.log(data);
  }
  render() {
    const {keywordCreateHandler} = this
    return (
      <section className="container">
        <Search onCreate={keywordCreateHandler} />
      </section>
)}}

export default Home;
