const express = require("express");

const app = express();

// app.use((req, res) => {
//   res.send("Hello from server");
// });

// app.use("/", (req, res) => {
//   res.send("Hello from server");
// });

app.use("/home", (req, res) => {
  res.send("Hello from server home");
});

app.use("/menu", (req, res) => {
  res.send("Hello from server menu");
});

app.listen(7777, () => {
  console.log("Server is running");
});
