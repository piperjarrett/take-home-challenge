import { useState } from "react";
import './Search.css'

const Search = ({ filterResults, articles }) => {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    filterResults(event.target.value);
  };
  const sections = articles.reduce((acc, article) => {
    if (acc[article.section]) {
      acc[article.section] += 1;
    } else {
      acc[article.section] = 1;
    }
    return acc;
  }, {});
  const uniqueSections = Object.keys(sections).map((key) => {
    return key ? (
      <option key={key} value={key}>
        {key.toUpperCase()}
      </option>
    ) : null;
  });
  return (
    <form>
      <div className="dropdown-menu">
        <h3>Find By Section</h3>
        <select onChange={(event) => filterResults(event)}>
          <option>Choose Section</option>
          <option>ALL</option>
          {uniqueSections}
        </select>
      </div>
      {/* <input type="text" placeholder="Search" onChange={handleChange} />
      <button>Submit</button> */}
    </form>
  );
};

export default Search;
