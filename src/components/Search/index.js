// @author: wilpola
// @desc: This file contains the Search bar component

import { useState } from "react";

// Search bar component
const SearchBar = () => {
  const [search, setSearch] = useState("");

  // All rendered content
  return (
    <div className="search-container">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
