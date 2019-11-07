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
      <div>
        Run the following script
        <pre>
          <code>npm run json-server</code>
        </pre>
      </div>
    ) : (
      <div>
        <h3 className="new-world">!! Hello world !!</h3>

        <pre>
          <code>{JSON.stringify(response, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

export default Main;
