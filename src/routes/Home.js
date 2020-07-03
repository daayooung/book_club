import React from "react";
import Search from "./Search";
import "./Home.css";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isloading: true,
      books: []
    }
  }

  keywordCreateHandler = (data) => {
    console.log(data);
  }
  render() {
    const {keywordCreateHandler} = this
    return (
      <div className="home">
        <section className="container">
          <Search onCreate={keywordCreateHandler.bind(this)} />
        </section>
      </div>
)}}

export default Home;
