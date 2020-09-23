
import React, { Component } from 'react';

class CurrencyExchange extends Component{
 
    state = { users:[]
       };
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
    
    this.setState({users:data.rates})
    
        return body;
  };

 
render(){
  
  const{users}=this.state;
    return(
      <div className="table">
      <table>
         <thead>
            <tr>
               <th>Currency Code</th>
               <th>Exchange Rate 1 USD</th>
            </tr>
         </thead>
         <tbody>
           {Object.keys(users).map(function(value, idx) {
             return <tr key={idx}>
               <td>{value}</td>
               <td>{users[value]}</td>
             </tr>
           })}
         </tbody>
       </table>
    </div>
  
  );
}
}export default CurrencyExchange;
