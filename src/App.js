import React from 'react';
import axios from 'axios';
//mport JSONP from 'jsonp';
import './App.css';
class App extends React.Component{
    state={xauPrice: ''};
    //state={Adj_Close: ''};
    componentDidMount(){
      this.silverPrice();
        setInterval(()=>{
            this.fetchApi();
        },1000)
        
    }
    
    silverPrice=()=>{
      axios.get('https://cors-anywhere.herokuapp.com/https://mcxlivefeeds.indiatimes.com/ET_MCX/currenttick?datatype=eod&filtertype=eod&firstreceivedataid=2019-12-16&lastreceivedataid=2020-09-15&directions=current&callback=serviceHit.autoLoadResultCallback&expirydate=2020-12-04&servicetype=fno&symbol=SILVER')
      
        .then((response) =>{
         
          console.log(response.data);
         
      })
      .catch((error) =>{
          console.log(error);
      });
    }
    fetchApi=()=>{
        axios.get('https://data-asg.goldprice.org/dbXRates/USD')
        .then((response) =>{
            const{ xauPrice}=response.data.items[0];
            console.log(response.data.items[0].xauPrice);
            this.setState({ xauPrice });
        })
        .catch((error) =>{
            console.log(error);
        });
    }

render(){
    const{xauPrice}=this.state;
    //const{Adj_Close}=this.state;
    return(
        <body>


<h2>Price Table</h2>

<table>
  
  <tr>
    <td>Gold price : USD</td>
    
    <td>{xauPrice}</td>
  </tr>
  <tr>
    <td>Silver Price : USD</td>
    <td> </td>
    
  </tr>
  <tr>
    <td>USD </td>
    <td>INR</td>
    
  </tr>
  
  
</table>

</body>
    );
}

}
export default App;