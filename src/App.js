import React,{ Component } from 'react';
import './App.css';
import Content from './components/Content';
import MainTitle from './components/MainTitle';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="container col-lg-9 col-xl-8" id="container">
            <div className="row">
                <div className="col-md-12 bg-white ">
                  <MainTitle/>
                  <Content/>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
