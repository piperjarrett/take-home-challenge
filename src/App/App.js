// import logo from './logo.svg';
import "./App.css";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Articles from "../Articles/Articles";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import Search from "../Search/Search";

function App() {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [originalArticles, setOriginalArticles] = useState([]);
  const [error, setError] = useState("");
  // const apiKey = process.env.REACT_APP_API_KEY;
  
  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Gt7He9ek2wKxfiDtXaqvAIdfCOwBIrQw`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setOriginalArticles(data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  const filterResults = (event) => {
    const filteredBySubsection = originalArticles.filter((article) => {
      if (article.section === event.target.value) {
        return article;
      }
    });
    setFilteredArticles(filteredBySubsection);
  };

  const findArticle = (match) => {
    const article = originalArticles.find((article) => {
      article.title.includes(match);
      return article;
    });
    return article;
  };

  return (
    <main className="App">
      <header className="App-header">
        <a href="/">
          <h1>Find Your Article</h1>
        </a>
      </header>
      {/* error ? (
      <h2>Sorry there was a problem getting these articles, try again later</h2>
      ) : ( */}
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
          return <ArticleDetails article={findArticle(match.params.title)} />;
        }}
      />
      {/* ) */}
    </main>
  );
}

export default App;
