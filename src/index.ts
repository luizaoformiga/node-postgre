import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection } from 'typeorm';
import { Client } from 'pg';
import route from "./routes";
import cors = require('cors');

const app = express();
const port = 3338;


//condition
createConnection().then(async () => {
    
    // Configuration
    app.use(bodyParser.json());
    app.use(cors());
    app.use(route);
    
    // PostgreSQL
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        password: 'defjam'
    })
    client
       .connect()
       .then(() => console.log('Postgre connected!'))
       .catch(() => console.error("ERROR 404: NOT FOUND"));
    
    // execution
    app.listen(port, () => console.log('API listering to port http://localhost:3338'));

}).catch(err => console.log("NOT FOUND" + err));


