import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation () {
    return (
        <div>
            <Link to="/">서평</Link>
            <Link to="/search">검색</Link>
            <Link to="/mypage">관리</Link>
        </div>
        

    )
}

export default Navigation;