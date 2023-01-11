import { Link } from "react-router-dom";
import "./ArticleDetails.css";
const ArticleDetails = ({ articles, articleTitle }) => {
  console.log(articles);
  console.log(articleTitle);

  const selectedArticle = articles.find((article) =>
    article.title.includes(articleTitle.title)
  );

  const dateCreated = new Date(selectedArticle.created_date);
  const year = dateCreated.getFullYear();
  const day = dateCreated.getDay();
  const month = dateCreated.getMonth();

  const newTab = () => {
    window.open(selectedArticle.short_url);
  };

  return (
    <div className="details">
      {/* <div className="info"> */}
      <h3>{selectedArticle.title}</h3>
      <h4>{selectedArticle.byline}</h4>
      <img className="details-image" src={selectedArticle.multimedia[1].url} />
      <p>{selectedArticle.abstract}</p>
      <div className="date-section">
        <p>
          Created: {1 + month}/{day}/{year}
        </p>
        <p>Section: {selectedArticle.section.toUpperCase()}</p>
      </div>
      <p className="nyTimes-article" onClick={newTab}>
        Read more
      </p>
    </div>
    // </div>
  );
};

export default ArticleDetails;
