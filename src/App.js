import React from "react";
import Main from "./Components/Main";
import ErrorBoundary from "./Components/Shared/ErrorBoundary";

const App = props => (
  <ErrorBoundary>
    <Main {...props} />
  </ErrorBoundary>
);

export default App;
