import "./Article.css";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  // const addToLocalStorage = () => {
  //     localStorage.setItem('Title', article.title)
  // }
  return (
    <div className="article">
      <img
        className="article-img"
        src={
          article.multimedia?.[1].url ||
          "https://library.northwestu.edu/wp-content/uploads/2019/06/nytimes.png"
        }
      />
      <div className="article-info">
        <p>{article.section.toUpperCase()}</p>
        <h3>{article.title}</h3>
        <p>{article.byline}</p>
        <Link to={article.title}>
          <button className="detail-button">More Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Article;
