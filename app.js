const express = require("express");

var addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  let dateAfter100Days = addDays(new Date(), 100);
  response.send(
    `${dateAfter100Days.getDate()}/${
      dateAfter100Days.getMonth() + 1
    }/${dateAfter100Days.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
