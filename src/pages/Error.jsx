import { Link } from "react-router-dom"

function Error(){
  return (
    <div className="container error-container">
    <div className="error-content">
      <div className="error-code">
        404
      </div>
      <div className="error-message">
        Oops! Page not found.
      </div>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to={'/Ecommerce-app'} className="btn btn-primary btn-home">Go to Homepage</Link>
    </div>
  </div>
  ) 
}

export default Error