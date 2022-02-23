const Fruits = require('../module/fruits');
const Juices = require('../module/juices');
const Product = require('../module/product_schema')
exports.fruits = async(req,res)=>{
    try{
        let all_fruits = await Fruits.find({})
        res.status(200).send(all_fruits)
    }catch(err){
        console.log(err)
    }
    
}
exports.juices = async(req,res)=>{
    try{
        let all_Juices = await Juices.find({})
        res.status(200).send(all_Juices)
    }catch(err){
        console.log(err)
    }
    
}
exports.medicine = async(req,res)=>{
    try{
        let all_medicine = await Product.find({})
        res.status(200).send(all_medicine)
    }catch(err){
        console.log(err)
    }
    
}