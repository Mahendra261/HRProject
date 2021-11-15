var express = require('express');
var app = express();
const cors = require('cors');
const fs = require('fs');
const util = require('util');



app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.get('/empdetails/:id', function (req, res) {

  const readFile = util.promisify(fs.readFile);
  id = req.params["id"];
// console.log('id' + req.params["id"]);
  readFile(__dirname + '/user.json')
    .then(text => {
      data = JSON.parse(text);
      for(let item in data){
        if(data[item].empid == id){
          res.send(data[item]);
        }else{
          res.json({
            message: 'Employee details not found!'
          })
        }
      }

    })
    .catch((err) => {
      console.error("invalid json file");
    });
});

app.get('/empaddress/:id', function (req, res) {

  const readFile = util.promisify(fs.readFile);
  id = req.params["id"];
// console.log('id' + req.params["id"]);
  readFile(__dirname + '/empAdd.json')
    .then(text => {
      data = JSON.parse(text);
      for(let item in data){
        if(data[item].empid == id){
          res.send(data[item]);
        }else{
          res.json({
            message: 'Employee details not found!'
          })
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(8000, ()=>{
  console.log('listening at port 8000!')
})
