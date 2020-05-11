import express, { json } from "express";
import cors from "cors";
import pool from "./db";

const app = express();

//middleware
app.use(cors());
app.use(json());

//ROUTES
app.get('/table_name', async (req, res) => {
  try {
    // body
    // query
    
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5001, "0.0.0.0", () => {
  console.log("server has started to port 5001");
});