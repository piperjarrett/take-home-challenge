// import logo from './logo.svg';
import "./App.css";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Articles from "../Articles/Articles";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Gt7He9ek2wKxfiDtXaqvAIdfCOwBIrQw"
    )
      .then((resp) => resp.json())
      .then((data) => setArticles(data.results))
      .catch((err) => setError(err));
  }, []);
  return (
    <main className="App">
      <Route exact path="/">
        <header className="App-header">
          <h1>Articles</h1>
        </header>
        <Articles articles={articles} />
      </Route>
      <Route
        exact
        path="/:title"
        render={({ match }) => {
          return <ArticleDetails articles={articles} articleTitle={match.params} />;
        }}
      />
    </main>
  );
}

export default App;
