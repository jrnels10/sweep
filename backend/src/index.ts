import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";


const app = express();
const port = process.env.PORT || 5001
console.log('this is a typescript backend')
//
// Enables JSON in the request body.
//
app.use(bodyParser.json());

//
// Enables cross origin resource sharing so the frontend can us this REST API.
//
app.use(cors());
console.log('tsest')

app.listen(port, () => {
    console.log(`Todo list app listening on port ${port}`);
});