import './NotFoundPage.css'
import {Link} from "react-router-dom";

const NotFoundPage = () => (
  <div className="not-found-page">
    <h1 className="not-found-page__maintitle">PAGE NOT FOUND</h1>
    <p className="not-found-page__description">
      <span>But we have other interesting pages. </span>
      <Link className="not-found-page__link" to="/">/HOME</Link>
    </p>
  </div>
)


export default NotFoundPage
