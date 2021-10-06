import express  from 'express'

const Router = express.Router();

import {creatUser} from '../models/user-model/User.model.js'
import {createAdminUserValidation} from '../middlewares/formValidation.middleware.js'

Router.all ("/",(req,res,next) => {
    console.log("from user router");

    next();
});

Router.post("/", createAdminUserValidation, async (req, res) => {
    try{
        //TODO
        //server side validation
        //encrypt password
        const result = await creatUser(req.body);

    if(result?._id) {
        //TODO
        //CREATE UNIQUE ACTIVATION LIKE AND EMAIL THE LIKE TO USER EMAIL
        return res.json({
            state:"success",
            message:
            "New user has been created successfully!we have send a email conformation to your email,please check and follow the activate your account",
        });
    }
    res.json({
        state:'error',
        message:"Unable to created new user successfully",
    });

    }catch(error){
        let msg = "Error, Unable to created new user"
        console.log(error.message);
        if(error.message.includes("E1100 duplocates key error collection")){
            msg ="This email has been used byto another user."

        }
        res.json({
            state:'error',
            message:"Unable to created new user successfully"
        });

    }
    
});

export default Router;
