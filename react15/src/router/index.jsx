import React from 'react'
import { Router, Route, hashHistory } from 'react-router';


const App = () => {
  return <h1>hello React15</h1>;
};

class BasicMap extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        {/* 资讯列表 */}
        <Route path="/react15" component={App}/>
      </Router>
    )
  }
}

export default BasicMap
