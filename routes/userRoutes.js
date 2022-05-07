const express=require('express');
const userController=require('../controller/userController');


/*----------routes init---------------*/
const vd=express.Router();

/*----------Route section------------*/

// vd.post('/vd/user-registeration',userController.userRegisteration);
vd.post('/vd/user-registeration',userController.addData);
vd.post('/vt/hello-simple-program', userController.getDetails);

vd.get('/vt/all-data', userController.getDataList);


/*--------------------*/
module.exports=vd;