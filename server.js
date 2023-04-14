require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./database");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app
  .post("/api/register", async (req, res) => {
    try {
      const { name, email, mobile, address, city } = req.body;
      const data = await db.query(
        "insert into practicereact1.register(name,email,mobile,address,city) VALUES(?,?,?,?,?)",
        [name, email, mobile, address, city]
      );
      console.log(data[0].insertId);
      return res.json(data[0].insertId);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  })
  .get("/api/:id", async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const data = await db.query(
        "select * from practicereact1.register where id=?",
        [id]
      );
      return res.json(data[0]);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  })

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
