const mongoose = require("mongoose");
const userDb = require("../dbModel/userModel");

exports.insertData = async (dataa) => {
console.log('data to be added',dataa);
    const addedData = await userDb.insertMany(dataa);
    
    console.log('added data',addedData);
    return addedData;
};

exports.getDetails=async(id)=>{
    const data=await helloDb.findOne({_id:id});
        return data;
    };

    /*--------get member list -----------*/
exports.getMemberList=async(limit,page,search,sortBy,filter)=>{
    const dbQuery={};

const filter1=[];
/*------------sorting----------------*/
if(sortBy==='name'){
sortBy={name:1};
}

/*---------------searching--------------*/
if(search){
    
    filter1.push({ name: { $regex: `.*${search}.*`, $options: 'i' } })
}

if(filter1.lenth===0){
    filter1.push({ name: { $regex: `.*${search}.*`, $options: 'i' } });
}
    // const data=await userDb.find(dbQuery).or(filter1).limit(limit).skip(page*limit).sort(sortBy);
    const data=await userDb.find();
    console.log('data',data);
    return data;
}
/*----------------------*/
exports.getAllData=async()=>{
    const data=await userDb.find();
    return data;
}