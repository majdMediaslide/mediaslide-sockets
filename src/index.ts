//Importing project dependancies that we installed earlier
import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
//App Varaibles
dotenv.config();

//intializing the express app
const app: Application = express();

//using the dependancies
app.use(helmet());
app.use(cors());
app.use(express.json());

/*
  ===============================================================
 Importing the port set on the .env, if the port number is not set on .env or the port is being used by another server
running on the local macchine we are asking the app to use 3000 as the port number 
  ===============================================================
*/
const PORT = process.env.PORT || 3000;

//routers

//Listing to the app and running it on PORT 5000
app.listen(PORT, async () => {
  console.log(`listning on port ${PORT}`);
});
