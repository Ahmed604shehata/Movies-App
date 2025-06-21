import React from "react";
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
const NavBar = ({ search }) => {

  const onSearch = (word) => {
    search(word)
  }
  return (
    <div className="nav-style w-100">

      <div className="container">
        <div className="row pt-2">
          <div className="col-md-4">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </div>
          <div className="col-md-8 d-flex align-items-center">
                        <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="بحث" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
