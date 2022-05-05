const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  return res.send({
    build_number: 1,
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in starting the server", err);
  } else {
    console.log("server is up and running on port", port);
  }
});
