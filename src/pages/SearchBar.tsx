import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <section id="search">
      <div className="search__container">
        <input
          type="text"
          className="search__input"
          placeholder="&#x270e; 사건 사고들을 작성해주세요!"
        ></input>
      </div>
    </section>
  );
};

export default SearchBar;
