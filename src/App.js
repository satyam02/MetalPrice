import React from 'react';
import axios from 'axios';

import './App.css';

  
class App extends React.Component{
    state={xauPrice: ''};
    state={xagPrice: ''};
    componentDidMount(){
     
        setInterval(()=>{
            this.fetchApi();
        },1000)
        
    }
  
    fetchApi=()=>{
        axios.get('https://data-asg.goldprice.org/dbXRates/USD')
        .then((response) =>{
            const{ xauPrice}=response.data.items[0];
            const{ xagPrice}=response.data.items[0];
            //console.log(response.data.items[0].xauPrice);
            this.setState({xauPrice });
            this.setState({ xagPrice});
            //this.setState({curr});

        })
        .catch((error) =>{
            console.log(error);
        });
    }

render(){
    const{xauPrice}=this.state;
    const{xagPrice}=this.state;
    return(
        <body width="580">


<h2>Price Table</h2>

<table>
  <tbody>
  <tr>
    <td>Gold price : USD</td>
    
    <td>${xauPrice}</td>
  </tr>
  <tr>
    <td>Silver Price : USD</td>
    <td>${xagPrice}</td>
    
  </tr>
  
  
  </tbody> 
</table>

</body>
    );
}

}
export default App;