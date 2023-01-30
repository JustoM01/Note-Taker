const express = require('express');
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();




// added path for index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

// check to see if port is listening//
app.listen(PORT, () =>
  console.log(`Listening at this location http://localhost:${PORT}`)
);

