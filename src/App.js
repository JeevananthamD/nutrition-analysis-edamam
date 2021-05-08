import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="container bg-success d-flex justify-content-center">
              <div className="col-md-10 col-md-offset-1 bg-white">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="text-center title">Nutrition Analysis API Demo</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="content-area text-center col-md-12">
                      <p className="notes">Enter an ingredient list list for what you are cooking, like <span className="text-success">1 cup rice, 10 oz chickpeas</span>, ect.
                        <br/>
                        Enter each ingredient on a new line.
                      </p>
                      <div className="col-sm-7">
                        <textarea id="demoAnalysis" cols="30" rows="10">

                        </textarea>
                        <div>
                          <button className="btn btn-success btn-sm m-2">Analyze</button>
                          <button className="btn btn-success btn-sm m-2">New recipe</button>
                        </div>
                        <div>
                          <div className="col-md-12"> 
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Qty</th>
                                  <th scope="col">Unit</th>
                                  <th scope="col">Food</th>
                                  <th scope="col">Calories</th>
                                  <th scope="col">Weight</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>cup</td>
                                  <td>rice</td>
                                  <td>702 kcal</td>
                                  <td>195 g</td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
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
                      <div id="facts" className="col-sm-5"></div>
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
