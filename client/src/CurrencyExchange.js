
import React, { Component } from 'react';

class CurrencyExchange extends Component{
  constructor(props) {
    super(props);
    this.state = { rates: [] };
  }
componentDidMount()
{
this.getCurrency();
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

  getCurrency = async e => {
    const response = await fetch('/api/USD/Xchange');
    const body = await response.json();
    if (response.status !== 200)
      throw Error(body.message);
    var data = JSON.parse(body.express);
    console.log(data.rates)
    this.setState({rates:data.rates})
    
    return body;
  };

 // {rates.map(s => (<li>{s}</li>))}
render(){
  const{rates}= this.state.rates;
    return(
      
    
        <div>
            <ul>
                {Object.keys(rates).map((price, index) => <li key={index}>{price} : {rates[price]}</li>)}
            </ul>
        </div>
  );
}
}export default CurrencyExchange;