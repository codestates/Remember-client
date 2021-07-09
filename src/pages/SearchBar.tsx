import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

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
    <section id="search">
      <form onSubmit={onSubmit}>
        <div className="search__container">
          <input
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
          ></button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
