import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
  state = {
    loading: true,
    response: {},
    error: ""
  };

  componentDidMount() {
    axios
      .get("/mockData")
      .then(response => {
        this.setState({
          response: response,
          loading: false
        });
      })
      .catch(errorMsg => {
        this.setState({
          error: errorMsg
        });
      });
  }

  render() {
    const { response, loading } = this.state;
    return loading ? (
      <div className="loader">
        <h1>Run the following script</h1>
        <pre className="align-center">
          <code>npm run json-server</code>
        </pre>
        <h2 className="align-center">loading....</h2>
      </div>
    ) : (
      <div>
        <h1 className="new-world">!! Hello world !!</h1>
        <div>
          <pre className="align-center-block">
            <code>{JSON.stringify(response, null, 4)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Main;
