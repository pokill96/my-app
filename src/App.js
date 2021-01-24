import React, { Fragment, Component } from "react";
import "./test.css";
import Test from "./test";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Test ref={(ref) => (this.scroll = ref)} />
        <button
          onClick={() => {
            this.scroll.scrollBottom();
          }}
        >
          맨 밑으로
        </button>
      </Fragment>
    );
  }
}

export default App;
