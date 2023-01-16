const { response } = require('express');
const express = require('express')
var axios = require("axios").default;
const path = require('path');
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    console.log(path.join(__dirname,'public'))
    return res.sendFile('public/index.html', { root : __dirname});
})
app.get('/searchword', (req, res) => {
  console.log(req.query)
var options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
  params: {entry: req.query.entry},
  headers: {
    'X-RapidAPI-Key': '3c95cb1bfcmsh0f9e70303d2faaep1d49cajsn33a8957f9e8f',
    'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  res.json(response.data)
}).catch(function (error) {
  console.error(error);
});
// let response={}
// response.data = {
//     entry: 'ridiculous',
//     request: 'ridiculous',
//     response: 'ridiculous',
//     assoc_word: [ 'funny', 'stupid', 'silly' ],
//     assoc_word_ex: [ 'funny', 'stupid', 'silly', 'absurd', 'comical' ],
//     version: '7.5.1',
//     author: 'twinword inc.',
//     email: 'help@twinword.com',
//     result_code: '200',
//     result_msg: 'Success'
//   }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})