import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="container bg-success col-lg-9 col-xl-8" id="container">
            <div className="row">
              
                <div className="contentArea col-md-12 bg-white ">
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
                        <p id="textArea">
                          <textarea id="demoAnalysis" cols="30" rows="10">

                          </textarea>
                        </p>
                        <div>
                          <button className="btn btn-success btn-sm m-2">Analyze</button>
                          <button className="btn btn-success btn-sm m-2">New recipe</button>
                        </div>
                        <div>
                          <div className="col-12"> 
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Qty</th>
                                  <th>Unit</th>
                                  <th>Food</th>
                                  <th>Calories</th>
                                  <th>Weight</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>1</th>
                                  <td>cup</td>
                                  <td>rice</td>
                                  <td>702 kcal</td>
                                  <td>195 g</td>
                                </tr>
                                <tr>
                                  <th>2</th>
                                  <td>ounce</td>
                                  <td>chickpease</td>
                                  <td>1071.6 kcal</td>
                                  <td>283.5 g</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div id="rightArea" className="col-12 col-sm-5 ">
                        <div className="fact-container">
                          <section id="factBox">
                            <p className="h2 m-0 pt-3" id="factTitle">Nutrition Facts</p>
                            <p>
                            <table id="factTable">
                              <thead>
                                <tr>
                                  <th>Amount Per Serving</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th className="calories text-start">Calories</th>
                                  <td>1774</td>
                                </tr>
                                <tr id="small-info">
                                  <th></th>
                                  <td>% Daily Value</td>
                                </tr>
                                <tr className="factRows">
                                  <th>Total Fat 18.3 g</th>
                                  <td>28%</td>
                                </tr>
                              </tbody>
                            </table>
                            </p>
                          </section>
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
