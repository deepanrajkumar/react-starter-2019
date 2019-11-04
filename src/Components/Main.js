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
      <div>Loading....</div>
    ) : (
      <div>
        <h3 className="new-world">!! Hello world !!</h3>
        <p>
          <pre>{JSON.stringify(response, null, 4)}</pre>
        </p>
      </div>
    );
  }
}

export default Main;
