const productModel= require("../models/product");
module.exports.createproduct= async function (req,res){
    // destructure
    const{name,quantity}=req.body;

    try{
        //validation
        if(!name || quantity){
            return res.status(402).json({
                success:false,
                message:"name is not valid",
            })
        }
        //creating 
        let product = await productModel.create({
            name:name,
            quantity:quantity,
        });
        return req.status(200).json({
            success:true,
            data:product,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }   
};
//get product
 module.exports.getproduct=async function(res,req){
    try{
        let productList= await productModel.find({});
        if(!productList){
            todoList=[];
        }
        return res.status(200).json({
            success:true,
            data:productList,
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
 };

 //delete product
 module.exports.deleteproduct =async function (req,res){
    const{id} = req.params;
    try{
        productModel.findByIdAndDelete(id, function(err,data){
            if(err){
                return res.status(500).json({
                    success:false,
                    message:"internal server error",
                });
            }
            return res.status(200).json({
                success:true,
                message:data,
            });
        });
    }
    catch(error){
        return res.status(200).json({
            success:false,
            message:"Internal server error",
        });
    }
    
 };
 //update product
 module.exports.updateproduct =async function (req,res){
    const{id} = req.params;
    try{
        productModel.findByIdAndupdate(id,{quantity:quantity}, function(err,data){
            if(err){
                return res.status(500).json({
                    success:false,
                    message:"internal server error",
                });
            }
            return res.status(200).json({
                success:true,
                message:data,
            });
        });
    }
    catch(error){
        return res.status(200).json({
            success:false,
            message:"Internal server error",
        });
    }
    
 };
 

 