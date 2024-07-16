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
      <a href="/" className="btn btn-primary btn-home">Go to Homepage</a>
    </div>
  </div>
  ) 
}

export default Error