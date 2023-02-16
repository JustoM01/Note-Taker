const express = require('express');
// const util = require('util')
const routes= require('./routes');
// const fs = require('fs')
const path = require('path')

// setting up server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routes);

// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/notes.html'))
// );

app.listen(PORT, () => {
    console.log('App listening at http://localhost:3001');
});