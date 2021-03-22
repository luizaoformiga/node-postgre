import "reflect-metadata";
import * as express from "express";
import { createConnection } from 'typeorm';
import route from "./routes/routes";
import cors = require('cors');

createConnection().then(async () => {  
  const app = express();
  const port = process.env.PORT || 3398;
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(route);
    
  app.listen(port, () => console.log(`API listering to port ${port}`));

}).catch(err => console.log("NOT FOUND" + err));


