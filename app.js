const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send(`
  <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>All Aboard The Express Express</h1>
     </body>
    </html>
  `);
});

app.get("/puppies", (req, res) => {
  res.send(`
  <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>All Aboard The Puppy Express</h1>
     </body>
    </html>
  `);
});

app.get("/kittens", (req, res) => {
  res.send(`
  <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>All Aboard The Kitten Express</h1>
     </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
