{
  "name": "apis",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.21.1"
  }
}

const app = require('express')();

const PORT =8080;

app.listen(
    PORT,
    () => console.log(server running on ${PORT})
);

app.get('/fruits', (req, res)=> {
    res.send({
        apple: 2,
        banana: 12
    })
    app.get('/vegetables', (req, res)=> {
        res.send({
            potato: 2,
            onion: 12
        })
});
