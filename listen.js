const app = require("./app.js");

const { PORT = 9090 } = process.env;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server listening on port ${PORT}...`);
});
