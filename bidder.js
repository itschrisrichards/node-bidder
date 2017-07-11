const express = require('express');
const app = express();

const moment = require('moment');

const openrtb = require('openrtb');

var bidRequestBuilder = openrtb.getBuilder({
  builderType: 'bidRequest'
});

app.get('/ad/req', function (req, res)
{
  try
  {
    var bidRequest = bidRequestBuilder
      .timestamp(moment.utc().format())
      .id('1234')
      .at(2)
      .imp([
        {
          "id":"1",
          "tagid": "eb09ff2a287598302fd631493949169b0d17f815",
          "bidfloor": 1.3,
        }
      ])
      .app({
        "id":"55",
        "name":"Test App",
        "cat":["IAB3-1"],
        "storeurl": "http://www.example.com",
        "publisher":{  
            "id": "6332"
        }
      })
      .device({
        "dnt":0,
        "ua":"Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "ip":"76.174.49.222",
        "connectiontype":2,
        "devicetype":1,
        "didsha1": "bbc9ff2a287598302fd631693949169b0d17f215",
        "carrier": "o2",
        "make": "samsung GT-I9300",
        "model": "Android",
        "language": "en",
        "os": "Android",
        "osv": "5.1.1",
        "geo": {
            "country": "UK"
        }
      })
      .user({
        "id":"55816b39711f9b5acf3b90e313ed29e51665623f",
        "yob": 1987,
        "gender": "M",
        "buyeruid": "73B0704E-86B6-4749-AC37-629AB247611D"
      })
      .bcat(["IAB10"])
      .badv(["xxx.com"])
      .ext({
        'extra': '1234'
      })
      .build();
  } catch( err ) { 
    console.log(err);
  }

  res.send(bidRequest);
});

app.listen(3000, function () {
  console.log('Bidder listening on port 3000!');
});
