import React from 'react'
import PropTypes from "prop-types";
import "./Book.css";

function Book ({id, title, authors, publisher, Publication_date, contents, price, bookcover}) {
  return (
  <li className="book">
    <img src={bookcover} onerror="this.style.display='none'" alt={title} title={title} />
    <div className="book__data">
      <h2 className="book__title">{ title }</h2>
      <h2 className="book__authors">{ authors }</h2>
    </div>
  </li>
  );
}

// Book component : 도서 검색 부분에 그릴 화면.

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  publisher: PropTypes.string.isRequired,
  publication_date: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bookcover: PropTypes.string.isRequired
}

export default Book;