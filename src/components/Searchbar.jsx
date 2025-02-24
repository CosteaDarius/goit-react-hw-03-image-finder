import { useState } from "react";

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!search.trim()) return;
    onSubmit(search);
    setSearch("");
  };

  return (
    <header className="searchbar">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search images..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </header>
  );
};

export default Searchbar;
