function Error(){
  return (
    <div class="container error-container">
    <div class="error-content">
      <div class="error-code">
        404
      </div>
      <div class="error-message">
        Oops! Page not found.
      </div>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="/" class="btn btn-primary btn-home">Go to Homepage</a>
    </div>
  </div>
  ) 
}

export default Error