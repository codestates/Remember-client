import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";
import styled from "styled-components";

interface SearchBarProps {
  searchTerm: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm }) => {
  const [text, setText] = useState("");
  const history = useHistory();

  const onSubmit = (e: any) => {
    e.preventDefault();
    searchTerm(text);
  };

  return (
    <div id="search">
      <form onSubmit={onSubmit}>
        <div className="">
          {/* <input
            // onChange={(e) => searchTerm(e.target.value)}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="search__input"
            placeholder="&#x270e; 검색어를 입력하고 Enter를 누르세요!"
          ></input>
          <button
            className="search__btn"
            type="submit"
            onClick={() => history.push("/accident")}
          ></button> */}
          <Search>
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="searchbar">
                  <input className="search_input" type="text" placeholder="제목을 입력하고 Enter키를 눌러주세요!"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button className="search_icon" type="submit" onClick={() => history.push("/accident")}>
                    <i className="fas fa-search" ></i>
                  </button>
                </div>
              </div>
            </div>
          </Search>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

const Search = styled.div`
  body,html{
    margin: 0;
    padding: 0;
    }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;
  }

  .searchbar{
  margin-bottom: auto;
  margin-top: auto;
  height: 60px;
  background-color: #81c784;
  border-radius: 30px;
  padding: 11px 11px 9px 9px;
  }

  .search_input{
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  caret-color: transparent;
  line-height: 40px;
  transition: width 0.4s linear;
  }
  
  .search_input::placeholder {
    color: white;
  }

  .searchbar:hover > .search_input{
  padding: 0 10px;
  width: 450px;
  caret-color: #00701a;
  transition: width 0.4s linear;
  color: white;
  }

  i {
    color: white;
  }

  .search_icon{
  height: 40px;
  width: 40px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  background-color: none;
  }
`