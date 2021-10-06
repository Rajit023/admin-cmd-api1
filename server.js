import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
const app = express();
import morgan from 'morgan'

import helmet from 'helmet'


const PORT  =process.env.PORT || 8000;

// Connect MongoDB
import mongoClient from './config/db.js'
mongoClient();


//middleware
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.urlencoded());
app.use(express.json());

//load routers
import userRouter from './routers/userRouter.js';

//use routers
app.use("/api/v1/user",userRouter);


app.use("/",(req,res) => {
    res.json({message:"hello"});
});





app.listen(PORT, error =>{
    if (error){
        return console.log(error);
    }

    console.log(`server is running at http://localhost:${PORT}`)
});