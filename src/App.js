import React from "react";
import Layout from "./hoc/Loyout/Layout";
import Quiz from "./containers/Quiz/Quiz";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    );
  }
}

export default App;
