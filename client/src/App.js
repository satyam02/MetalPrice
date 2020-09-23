import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import CurrencyExchange from './CurrencyExchange';

//import './Style.css';
import './slide.css';
//import {TemplateJsx} from './TemplateJsx.js';


class App extends Component {
  state={xauPrice: ''};
  state={xagPrice: ''};
  state={data:'',
  SilverIndia:{"Date":"","Low":"","High":"","Open":"","Close":"","Adj_Close":""}
};
  
  componentDidMount() {
    //setInterval(()=>{
        this.getGold();
        this.getINR();
        this.getSilver();    
    //},1000);
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
	  if (response.status !== 200)
      throw Error(body.message);
	  return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  
  
  

  getSilver = async e => {
    const response = await fetch('/api/silver');
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);
    var data = JSON.parse(body.express);
    
    this.setState({SilverIndia:data.query.results.quote[0]})
    
   
    return body;
  };

  getGold = async e => {
    const response = await fetch('/api/gold');
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);
    var data = JSON.parse(body.express);
    console.log(data);
    const{ xauPrice}=data.items[0];
    const{ xagPrice}=data.items[0];
            //console.log(response.data.items[0].xauPrice);
    this.setState({xauPrice });
    this.setState({xagPrice});
    return body;
  };
 
  getINR = async e => {
    const response = await fetch('/api/xchangerate');
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);
    var data = JSON.parse(body.express);
    
    console.log(data);
    
    this.setState({data});
    return body;
  };


  render() {
    const{xauPrice}=this.state;
    const{xagPrice}=this.state;
    const{data}=this.state;
    const{SilverIndia}=this.state;
    return (<div>
      <Router> 
           <div className="App"> 
            <ul className="App-header"> 
              <li> 
              <Link to="/App">Home</Link>
              </li> 
              <li>
                <Link to="/CurrencyExchange">CurrencyExchange</Link> 
              </li> 
            </ul> 
            <Switch> 
            <Route exact path='/' component={App}></Route>
              <Route exact path='/CurrencyExchange' component={CurrencyExchange}></Route>  
            </Switch> 
          </div> 
       </Router> 
           <h2>Price Table</h2>

<table>
  <tbody>
  <tr>
    <td>Gold price</td>
    
    <td>USD{xauPrice}</td>
  </tr>
  <tr>
    <td>Silver Price</td>
    <td>USD{xagPrice}</td>
    
  </tr>
  <tr>
    <td>1USD:</td>
    <td>INR{data}</td>
  </tr>

  
  </tbody> 
</table>
<h2>Current Silver Price In India</h2>
    <h3>Date:{SilverIndia.Date}</h3>
<table>
  <tbody>
  
  <tr>
    
    <th>Live</th>
    <th>Low</th>
    <th>High</th>
    <th> Open</th>
    <th>Close</th>
  </tr>
  <tr>
    
    <td>{SilverIndia.Adj_Close}</td>
    <td>{SilverIndia.Low}</td>
    <td>{SilverIndia.High}</td>
    <td>{SilverIndia.Open}</td>
    <td>{SilverIndia.Close}</td>
  </tr>
  </tbody>
  
</table>



   </div>);
  }
}export default App;
