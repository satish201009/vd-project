const { json } = require("express/lib/response");
// const {getConnection}=require('../db/connection');
const userService = require('../service/userService');
const userDb = require("../dbModel/userModel");
const dataValidation = require('../methods/dataValidation');

const Joi = require('joi');
const conn = require('../app');
exports.addData = async (req, res) => {
    try {
        const schema = Joi.object({
            name: Joi.string().required().label('user name'),
            email: Joi.string().required().label('user email'),
            mobile: Joi.string().allow('').min(10).max(12).label('user mobile'),

        });
        const result = schema.validate(req.body);
        if (result.error)
            return res.status(400).json({ statusText: 'FAIL', statusValue: 400, message: result.error.details[0].message });
        const temp = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
        }
        const data = await userService.insertData(temp);
        console.log('inserted data', data);
        res.status(200).json({ statusText: 'SUCCESS', statusValue: 200, message: 'user message', data: data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ statusText: 'ERROR', statusValue: 500, message: 'unable to process your request' });
    }

};

/*----------------------get api--------------*/
exports.getDetails = async (req, res) => {
    try {


        console.log('point 1');
        const data = await userService.getDetails(req.body.id);
        if (data) {
            res.status(200).json({ statusText: 'SUCCESS', statusValue: 200, message: 'Data found', data: data });
        } else {
            res.status(400).json({ statusText: 'FAIL', statusValue: 400, message: 'Data Not Found' });
        }
    } catch (err) {
        console.log(err);
    }
};
/*---------update---------------*/
exports.updateuser = async (req, res) => {
    try {

        const temp = {
            userName: req.body.userName,
            password: req.body.password
        }
        console.log('before update', temp);
        const data = await userService.updateuser(temp, req.body.id);
        if (data) {
            res.status(200).json({ statusText: 'SUCCESS', statusValue: 200, message: 'Data found', data: data });
        } else {
            res.status(400).json({ statusText: 'FAIL', statusValue: 400, message: 'Data Not Found' });
        }
    } catch (err) {
        console.log(err);
    }
};
/*---------------get all data list-----------*/
exports.getDataList = async (req, res) => {
    try {
        // const { pgno, row, search, sortBy, filter } = req.query;
        // if (!dataValidation.isNumber(pgno) || !dataValidation.isNumber(row)) {
        //     return res.status(400).json({ statusText: 'FAIL', statusValue: 400, message: 'provide valid page and row number' });
        // }

        // const limit = Math.abs(row) || 25;
        // const page = (Math.abs(pgno) || 1) - 1;


        // // const data=await userService.getDataList();
        // const data = await userService.getMemberList(limit, page, search, sortBy, filter);
        // if (data) {
        //     res.status(200).json({ statusText: 'SUCCESS', statusValue: 200, message: 'Data found', data: data });
        // } else {
        //     res.status(400).json({ statusText: 'FAIL', statusValue: 400, message: 'Data Not Found' });
        // }

        const data = await userService.getAllData();
if (data) {
            res.status(200).json({ statusText: 'SUCCESS', statusValue: 200, message: 'Data found', data: data });
        } else {
            res.status(400).json({ statusText: 'FAIL', statusValue: 400, message: 'Data Not Found' });
        }
    } catch (err) {
        console.log(err);
    }
};