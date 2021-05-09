import React,{ Component } from 'react';
import './App.css';
import TextArea from "./components/TextArea";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import FactBox from "./components/FactBox";

class App extends Component {
  
  constructor() {
    super();
    this.input = "";
  }

  typing = e => {
    this.input = e.target.value;
    console.log(this.input);
  }

  render() {
    return (
      <div className="container-fluid">
          <div className="container col-lg-9 col-xl-8" id="container">
            <div className="row">
                <div className="col-md-12 bg-white ">
                  <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center title">Nutrition Analysis API Demo</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-center col-md-12">
                      <p className="notes">Enter an ingredient list list for what you are cooking, like <span className="text-success">"1 cup rice, 10 oz chickpeas"</span>, ect.
                      <br/>
                      Enter each ingredient on a new line.
                      </p>
                      <div className="col-12 col-sm-7 " id="leftArea">
                        <TextArea typing={this.typing}/>
                        <Buttons/>
                        <div>
                          <div className="col-12">
                            <Table/>
                          </div>
                        </div>
                      </div>
                      <div id="rightArea" className="col-12 col-sm-5 ">
                        <div className="fact-container">
                            <FactBox/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
