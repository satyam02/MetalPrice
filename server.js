const express = require('express');
const bodyParser = require('body-parser');

const request = require('request');
const moment = require('moment')
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/USD/Xchange', (req, res) => {
  var options = {
    'method': 'GET',
    'url': 'https://openexchangerates.org/api/latest.json?app_id=8fd12366afb04fa188ecb45f2403b62a',
    'headers': {
      'Content-Type': 'application/json'
    }
  };
  request(options, function (error, response) {
    if (!error && response.statusCode == 200) {
      res.send({ express : response.body});
    }
    else {
      console.log(error);
    } 
  });
});

app.get('/api/xchangerate', (req, res) => {
  var options = {
    'method': 'GET',
    'url': 'https://www.currency.me.uk/remote/ER-CCPAIR-AJAX.php?ConvertTo=INR&ConvertFrom=USD&amount=1000',
    'headers': {
      'Content-Type': 'application/json'
    }
  };
  request(options, function (error, response) {
    if (!error && response.statusCode == 200) {
      res.send({ express : response.body});
    }
    else {
      console.log(error);
    } 
  });
});

app.get('/api/silver', (req, res) => {
    var options = {
      'method': 'GET',
      'url': 'https://mcxlivefeeds.indiatimes.com/ET_MCX/currenttick?datatype=eod&filtertype=eod&firstreceivedataid=2020-08-16&lastreceivedataid=2020-09-15&directions=current&servicetype=fno&symbol=SILVER',
      
      'headers': {
        'Content-Type': 'application/json'
      }
    };
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        res.send({ express : response.body});
      }
      else {
        console.log(error);
      }
    });
  });
  
  app.get('/api/gold', (req, res) => {
    var options = {
      'method': 'GET',
      'url': 'https://data-asg.goldprice.org/dbXRates/USD',
      'headers': {
        'Content-Type': 'application/json'
      }
    };
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        res.send({ express : response.body});
      }
      else {
        console.log(error);
      } 
    });
  });






app.post('/api/reply', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


app.listen(port, () => console.log(`Listening on port ${port}`));
