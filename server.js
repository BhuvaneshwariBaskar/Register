const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./database");

const app = express();
app.use(express.json());
app.use(cors);
app.use(morgan("dev"));

app
  .post("/api/register", async (req, res) => {
    try {
      const { fname, lname, email, mobile, address, city, state, pincode } =
        req.body;
      const data = db.query(
        "insert into practicereact2.user_table (fname,lname,email,mobile,address,city,state,pincode) values(?,?,?,?,?,?,?,?)",
        [fname, lname, email, mobile, address, city, state, pincode]
      );
      console.log(data);
      return res.json(data[0].insertId);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  })
  .get("/api/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = db.query(
        "select * from practicereact2.user_table where id=?",
        [id]
      );
      console.log(data);
      return res.json(data[0]);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  });
app.listen(8080, () => {
  console.log("server listening on 8080");
});
