import { Link } from "react-router-dom";
import './ArticleDetails.css'
const ArticleDetails = ({ articles, articleTitle }) => {
  const selectedArticle = articles.find(
    (article) => article.title === articleTitle.title
  );
  console.log(selectedArticle);
  const dateCreated = new Date(selectedArticle.created_date);
  console.log(dateCreated);
  const year = dateCreated.getFullYear();
  const day = dateCreated.getDay();
  const month = dateCreated.getMonth();
  return (
    <div className="details">
      <header>
        <img
          className="details-image"
          src={selectedArticle.multimedia[1].url}
        />
      </header>
      <div className="info">

      <h3>{selectedArticle.title}</h3>
      <h4>{selectedArticle.byline}</h4>
      <p>{selectedArticle.abstract}</p>
      <Link to={selectedArticle.short_url}>
        <p>Read more</p>
      </Link>
      <p>
        Created: {1 + month}/{day}/{year}
      </p>
      <p>subsection: {selectedArticle.subsection}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
