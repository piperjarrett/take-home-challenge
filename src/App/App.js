// import logo from './logo.svg';
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Articles from "../Articles/Articles";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import Search from "../Search/Search";

function App() {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [originalArticles, setOriginalArticles] = useState([]);
  const [sections, setSetctions] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Gt7He9ek2wKxfiDtXaqvAIdfCOwBIrQw"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setOriginalArticles(data.results);
      })
      .catch((err) => setError(err));
  }, []);

  const filterResults = (event) => {
    const filteredBySubsection = originalArticles.filter((article) => {
      console.log(article.section);
      if (article.section === event.target.value) {
        return article;
      }
    });
    setFilteredArticles(filteredBySubsection);
  };
  return (
    <main className="App">
      <header className="App-header">
        <a href="/">
          <h1>Find Your Article</h1>
        </a>
      </header>
      <Route exact path="/">
        <Search filterResults={filterResults} articles={originalArticles} />
        <Articles
          originalArticles={originalArticles}
          filteredArticles={filteredArticles}
        />
      </Route>
      <Route
        exact
        path="/:title"
        render={({ match }) => {
          return (
            <ArticleDetails
              articles={originalArticles}
              articleTitle={match.params}
            />
          );
        }}
      />
    </main>
  );
}

export default App;
